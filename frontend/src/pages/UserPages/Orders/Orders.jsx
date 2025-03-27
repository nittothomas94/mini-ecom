import './Orders.css';
import Navbar from '../../../Components/User/Navbar/Navbar';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await axios.get('/orders');
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(orders);

  return (
    <>
      <Navbar />

      <div className="orders">
        <h1>My Orders</h1>
        {orders.length < 1 ? (
          // Show this when the cart is empty
          <div className="empty-cart">
            <img src="/Images/main/no-orders-found.png" alt="Empty Cart" />
            <h2>No Orders'yet!</h2>
            <p>Add items to your Orders to start shopping.</p>
            <Link to="/">
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="orders-box">
            {orders.map((item, index) => {
              return (
                <div className="card">
                  <img src={item.imageurl} alt="product image" />
                  <h3>{item.category}</h3>
                  <p>₹{item.price}</p>
                  <p>
                    Order Status :{' '}
                    <span
                      style={{
                        color: 'green',
                        fontSize: '18px',
                        fontWeight: '800',
                      }}
                    >
                      {' '}
                      {item.status}
                    </span>{' '}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
