const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    serialNumber: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    isNew: { type: DataTypes.INTEGER, allowNull: false },
    photo: { type: DataTypes.STRING, unique: true, allowNull: false },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    specification: { type: DataTypes.STRING, allowNull: false },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Guarantee = sequelize.define('guarantee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    start: { type: DataTypes.STRING },
    end: { type: DataTypes.STRING },
})

const ProductPrice = sequelize.define('product_price', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: DataTypes.INTEGER, allowNull: false },
    symbol: { type: DataTypes.STRING, allowNull: false },
    isDefault: { type: DataTypes.INTEGER, allowNull: false },
})


const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
})

const OrderProduct = sequelize.define('order_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

Type.hasMany(Product)
Product.belongsTo(Type)

Product.hasMany(ProductPrice, { as: 'price' })
ProductPrice.belongsTo(Product)

Product.hasOne(Guarantee, { as: 'guarantee', foreignKey: 'productId' })
// Guarantee.belongsTo(Product, { foreignKey: 'productsId' })

Order.belongsToMany(Product, { through: OrderProduct, as: 'project' })
Product.belongsToMany(Order, { through: OrderProduct })

module.exports = {
    Order,
    Product,
    Guarantee,
    Type,
    ProductPrice,
    OrderProduct
}