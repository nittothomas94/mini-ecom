const express = require('express');

const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product-controllers');

const {
  upload,
  uploadImage,
} = require('../controllers/image-upload-controller');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', addProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
