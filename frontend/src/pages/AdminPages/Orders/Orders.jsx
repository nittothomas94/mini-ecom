import './Orders.css';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/navbar-admin';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';
import Button from '../../../Components/Button/Button';
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

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.patch('/orders/', {
        orderId: orderId,
        status: newStatus,
      });

      if (response.data.message === 'Order status updated') {
        alert(`Order status updated to ${newStatus}`);
        getOrders(); // Refresh orders after update
      } else {
        alert('Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="orders">
        <h1>Full Orders</h1>

        {orders.length < 1 ? (
          // Show this when the cart is empty
          <div className="empty-cart">
            <img src="/Images/main/no-orders-found.png" alt="Empty Cart" />
            <h2>No Orders'yet!</h2>
          </div>
        ) : (
          <div className="orders-box">
            {orders.map((item, index) => {
              return (
                <div className="card">
                  <img src={item.imageurl} alt="product image" />
                  <h3>{item.category}</h3>
                  <p>Payed {item.price}</p>
                  <p className="id-p"> {item._id}</p>
                  <div className="order-buttons">
                    <Button
                      text="Ordered"
                      className={`order-btn ${
                        item.status == 'Ordered' ? 'active-btn' : ''
                      }`}
                      onClick={() => updateOrderStatus(item._id, 'Ordered')}
                    />
                    <Button
                      text="Shipping"
                      className={`order-btn ${
                        item.status == 'Shipping' ? 'active-btn' : ''
                      }`}
                      onClick={() => updateOrderStatus(item._id, 'Shipping')}
                    />
                    <Button
                      text="Delivered"
                      className={`order-btn ${
                        item.status == 'Delivered' ? 'active-btn' : ''
                      }`}
                      onClick={() => updateOrderStatus(item._id, 'Delivered')}
                    />
                  </div>
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
