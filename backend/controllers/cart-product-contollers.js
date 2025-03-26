const CartProduct = require('../db/models/cart-product-schema');

module.exports.getProducts = async (req, res) => {
  try {
    const response = await CartProduct.find();

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await CartProduct.findById(id);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const body = req.body;

    await CartProduct.create(body);

    return res
      .status(200)
      .json({ message: 'New Product  Added to Cart Sucessfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await CartProduct.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: 'Product in the Deleted with the id :' + id });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};
