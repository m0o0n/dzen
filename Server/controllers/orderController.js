const { json, where } = require("sequelize")
const ApiError = require("../error/ApiError")
const { Order, OrderProduct, Product, Guarantee, ProductPrice } = require("../models/models")

class OrderController {

    async create(req, res, next) {
        try {
            const { title, description, products } = req.body
            const order = await Order.create({ title, description })
            if (products) {
                for (const product of products) {
                    await OrderProduct.create({
                        orderId: order.id,
                        productId: product
                    })
                }
            }
            const created_order = await Order.findOne({
                where: { id: order.id },
                include: [
                    {
                        model: OrderProduct,
                        include: [{
                            model: Product,
                            include: [{ model: Guarantee, as: "guarantee" }, { model: ProductPrice, as: "price" }]
                        }],
                    }
                ]
            })
            return res.json(created_order)
        } catch (e) {
            return next(ApiError.forbidden(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const order = await Order.findAll({
                include: [
                    {
                        model: OrderProduct,
                        include: [{
                            model: Product,
                            include: [{ model: Guarantee, as: "guarantee" }, { model: ProductPrice, as: "price" }]
                        }],
                    }
                ]
            })
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const order = await Order.findOne({
                where: { id },
                include: [
                    {
                        model: OrderProduct,
                        include: [{
                            model: Product,
                            include: [{ model: Guarantee, as: "guarantee" }, { model: ProductPrice, as: "price" }]
                        }],
                    }
                ]
            })
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async update(req, res, next) {
        try {
            const { id, order_product_id, product_id } = req.body
            console.log(id, order_product_id, product_id)
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
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body
            await OrderProduct.destroy({ where: { orderId: id } })
            await Order.destroy({ where: { id } })
            return res.json({ id })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new OrderController()