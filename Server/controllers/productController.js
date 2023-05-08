const path = require("path")
const { Product, ProductPrice, Guarantee, OrderProduct } = require("../models/models")
const uuid = require('uuid')
const fs = require('fs')
const { where } = require("sequelize")

class ProductController {
    async getAll(req, res) {
        const { typeId } = req.query
        let products
        if (typeId) {
            products = await Product.findAll({
                where: { typeId },
                include: [
                    { model: ProductPrice, as: 'price' },
                    { model: Guarantee, as: 'guarantee' }
                ]
            })
        } else {
            products = await Product.findAll({
                include: [
                    { model: ProductPrice, as: 'price' },
                    { model: Guarantee, as: 'guarantee' }
                ]
            })
        }
        return res.json(products)
    }

    async create(req, res) {
        const { serialNumber, title, specification, typeId, isNew, guarantee, price } = req.body
        const { photo } = req.files
        let fileName = uuid.v4() + '.jpg'
        photo.mv(path.resolve(__dirname, '..', 'static', fileName))
        const product = await Product.create({
            serialNumber,
            title,
            specification,
            typeId,
            isNew,
            photo: fileName
        })


        const parsed_price = JSON.parse(price)
        for (const cost of parsed_price) {
            await ProductPrice.create({
                value: cost.value,
                isDefault: cost.isDefault,
                symbol: cost.symbol,
                productId: product.id
            })
        }


        if (guarantee) {
            const parsed_guarantee = JSON.parse(guarantee)
            await Guarantee.create({
                start: parsed_guarantee[0].start,
                end: parsed_guarantee[0].end,
                productId: product.id
            })

        } else {
            await Guarantee.create({
                start: "",
                end: "",
                productId: product.id
            })
        }

        return res.json(product)
    }

    async delete(req, res) {
        const { id } = req.body
        const product = await Product.findOne({ where: { id } })
        fs.unlinkSync(path.resolve(__dirname, '..', 'static', product.photo))
        await Guarantee.destroy({ where: { productId: id } })
        await ProductPrice.destroy({ where: { productId: id } })
        await OrderProduct.destroy({ where: { productId: id } })
        await Product.destroy({ where: { id } })
        return res.json("Product has been deleted")
    }
}

module.exports = new ProductController()