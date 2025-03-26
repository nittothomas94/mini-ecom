const CartProduct = require('../db/models/cart-product-schema');
const Order = require('../db/models/orders-schema');

module.exports.getOrders = async (req, res) => {
  try {
    const response = await Order.find();

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Orders.findById(id);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: e });
  }
};

module.exports.processOrder = async (req, res) => {
  try {
    // Fetch all items from the cart
    const cartItems = await CartProduct.find();

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Modify each cart item: Remove `_id` to avoid duplicate key error
    const orderedItems = cartItems.map(item => {
      const { _id, ...orderData } = item.toObject(); // Remove `_id`
      return {
        ...orderData,
        status: 'Ordered',
        orderDate: new Date(),
      };
    });

    // Insert the modified items into the orders collection
    await Order.insertMany(orderedItems);

    // Clear the cart after successful order processing
    await CartProduct.deleteMany();

    res.status(200).json({ message: 'Order processed successfully' });
  } catch (error) {
    console.error('Order Processing Error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    // Allowed statuses
    const allowedStatuses = ['Ordered', 'Shipping', 'Delivered'];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    // Update the order status in the database
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order status updated', updatedOrder });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// module.exports.updateOrderStatus = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const { status } = req.body;

//     // Validate the status before updating
//     const allowedStatuses = ['Ordered', 'Shipping', 'Delivered'];
//     if (!allowedStatuses.includes(status)) {
//       return res.status(400).json({ message: 'Invalid status value' });
//     }

//     // Update the order status
//     const updatedOrder = await Order.findByIdAndUpdate(
//       orderId,
//       { status },
//       { new: true }
//     );

//     if (!updatedOrder) {
//       return res.status(404).json({ message: 'Order not found' });
//     }

//     res.status(200).json({ message: 'Order status updated', updatedOrder });
//   } catch (error) {
//     console.error('Error updating order status:', error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };
