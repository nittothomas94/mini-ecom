const express = require('express');

const {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
} = require('../controllers/cart-product-contollers');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', addProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
