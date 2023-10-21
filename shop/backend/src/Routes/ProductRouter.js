const express = require("express")
const router = express.Router()
const productController = require('../Controllers/ProductController')

router.post('/create-product', productController.createProduct)
router.get('/get-all', productController.getAllProduct)

module.exports = router