const Router = require('express')
const ProductController = require('../controllers/productController')
const router = new Router()

router.get('/', ProductController.getAll)
router.post('/', ProductController.create)
router.delete('/', ProductController.delete)

module.exports = router