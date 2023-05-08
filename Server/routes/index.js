const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const orderRouter = require('./orderRouter')

router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/order', orderRouter)

module.exports = router