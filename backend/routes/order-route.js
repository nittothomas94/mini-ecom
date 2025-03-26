const express = require('express');

const {
  getOrders,
  processOrder,
  getOrderById,
  updateOrderStatus,
} = require('../controllers/order-controllers');

const router = express.Router();

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', processOrder);

router.patch('/', updateOrderStatus);

module.exports = router;
