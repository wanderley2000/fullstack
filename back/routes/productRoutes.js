const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/productos', productController.addProduct);
router.get('/productos', productController.getProducts);
router.put('/productos/:id', productController.updateProduct);
router.delete('/productos/:id', productController.deleteProduct);

module.exports = router;