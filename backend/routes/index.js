const express = require('express');

const productRoute = require('./products-route');
const uploadImageRoute = require('./image-route');
const cartProductRoute = require('./cartProduct-route');
const paymentRoute = require('./paymentRoute');
const orderRoute = require('./order-route');

const router = express.Router();

router.use('/product', productRoute);

router.use('/upload-img', uploadImageRoute);

router.use('/cartProduct', cartProductRoute);

router.use('/payment', paymentRoute);

router.use('/orders', orderRoute);

module.exports = router;
