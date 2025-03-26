const { Schema, model } = require('mongoose');

const productSchema = Schema({
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
});

const Product = model('products', productSchema);

module.exports = Product;
