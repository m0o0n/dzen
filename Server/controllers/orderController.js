const { json, where } = require("sequelize")
const { Order, OrderProduct, Product } = require("../models/models")

class OrderController {

    async create(req, res) {
        const { title, description, products } = req.body
        const order = await Order.create({ title, description })
        console.log(products)
        if (products) {
            for (const product of products) {
                await OrderProduct.create({
                    orderId: order.id,
                    productId: product
                })
            }
        }
        return res.json(order)
    }

    async getAll(req, res) {
        const order = await Order.findAll({
            include: [
                {
                    model: OrderProduct,
                    include: [Product],
                }
            ]
        })
        return res.json(order)
    }

    async getOne(req, res) {
        const { id } = req.body
        const order = await Order.findOne({
            where: { id },
            include:
            {
                model: OrderProduct,
                include: [Product],
            }
        })
        return res.json(order)
    }

    async update(req, res) {
        const { id, order_product_id, product_id } = req.body

        if (order_product_id && !product_id) {
            await OrderProduct.destroy({ where: { id: order_product_id } })
        } else if (!order_product_id && product_id) {
            await OrderProduct.create({ orderId: id, productId: product_id })
        }
        const order = await Order.findOne({
            where: { id },
            include:
            {
                model: OrderProduct,
                include: [Product],
            }
        })
        return res.json(order)
    }

    async delete(req, res) {
        const { id } = req.body
        await OrderProduct.destroy({ where: { orderId: id } })
        await Order.destroy({ where: { id } })
        return res.json('Order has been deleted')
    }
}

module.exports = new OrderController()