const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()

router.get('/', orderController.getAll)
router.get('/:id', orderController.getOne)
router.put('/', orderController.update)
router.post('/', orderController.create)
router.delete('/', orderController.delete)

module.exports = router