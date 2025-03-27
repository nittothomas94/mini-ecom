import Navbar from '../../../Components/User/Navbar/Navbar';
import { useState, useEffect } from 'react';
import './Cart.css';
import axios from '../../../utils/axios';
import { Link } from 'react-router-dom';
import PaymentButton from '../../../Components/PaymentButton/PaymentButton';
import OrderCartSklton from '../../../Components/Order-Cart-Sklton/Order-Cart-Sklton';

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCartProducts = async () => {
    const response = await axios.get('/cartProduct');
    setCartProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  const onDeleteClick = async id => {
    await axios.delete('/cartProduct/' + id);
    getCartProducts();
  };

  const totalAmount = cartProduct.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <>
      <Navbar />

      {loading ? (
        [1, 2, 3].map(() => {
          return (
            <div className="loading-card">
              <OrderCartSklton />
            </div>
          );
        })
      ) : (
        <div className="cart">
          <h1 className="shopping-cart-heading">Shopping Cart</h1>

          {cartProduct.length < 1 ? (
            // Show this when the cart is empty
            <div className="empty-cart">
              <img src="/Images/main/cart-is-empty.png" alt="Empty Cart" />
              <h2>Your Cart is Empty!</h2>
              <p>Add items to your cart to start shopping.</p>
              <Link to="/">
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            // Show this when there are products in the cart
            <>
              <div className="shopping-cart">
                {cartProduct.map(item => (
                  <div className="card" key={item._id}>
                    <img src={item.imageurl} alt="product image" />
                    <h3>Product name</h3>
                    <p className="price-center">{item.price}</p>
                    <div className="no-of-products-delete">
                      <i
                        className="material-icons delete-icon"
                        onClick={() => onDeleteClick(item._id)}
                      >
                        delete
                      </i>
                    </div>
                    <h4>{item.price}</h4>
                  </div>
                ))}
              </div>

              <div className="order-summary">
                <h2>Order Summary</h2>
                <p>Shopping calculated at checkout</p>
                <hr />
                <div className="total-amount">
                  <h3>Total Amount</h3>
                  <h3>₹{totalAmount}</h3>
                </div>
                <PaymentButton amount={totalAmount} /> {/* Payment Button */}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
