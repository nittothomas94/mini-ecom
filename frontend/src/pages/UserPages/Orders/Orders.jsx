import './Orders.css';
import Navbar from '../../../Components/User/Navbar/Navbar';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';

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
      </div>
    </>
  );
};

export default Orders;
