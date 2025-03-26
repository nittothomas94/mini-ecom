const { Schema, model } = require('mongoose');

const ordersSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  imageurl: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Ordered', 'Shipping', 'Delivered'],
    default: 'Ordered',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Orders = model('orders', ordersSchema);

module.exports = Orders;
