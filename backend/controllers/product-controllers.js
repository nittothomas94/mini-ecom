const Product = require('../db/models/product-schema');

module.exports.getProducts = async (req, res) => {
  try {
    const { category } = req.query;

    const query = {};

    if (category) {
      query.category = category;
    }

    const response = await Product.find(query);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Product.findById(id);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const body = req.body;

    const response = await Product.create(body);

    return res.status(200).json({ message: 'New Product Added Sucessfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const { body } = req;

    const response = await Product.findByIdAndUpdate(id, body);

    return res.status(200).json({ message: 'Updated The Product Sucessfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Product.findByIdAndDelete(id);

    return res.status(200).json({ message: 'User Deleted with the id :' + id });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};
