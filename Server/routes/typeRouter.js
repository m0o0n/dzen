const Router = require('express')
const typesController = require('../controllers/typesController')
const router = new Router()

router.post('/', typesController.create)
router.get('/', typesController.getAll)

module.exports = router