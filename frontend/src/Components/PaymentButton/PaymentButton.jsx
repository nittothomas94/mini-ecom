import React from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const PaymentButton = ({ amount }) => {
  const navigate = useNavigate(); // To navigate to the orders page

  const handlePayment = async () => {
    try {
      // Create order on backend
      const { data } = await axios.post('/payment/create-order', { amount });

      if (data.success) {
        const options = {
          key: 'rzp_test_GFQKcHCLvHeM90', // Replace with your Test Key ID
          amount: data.order.amount,
          currency: data.order.currency,
          name: 'mini-ecom',
          description: 'E-commerce Transaction',
          order_id: data.order.id,
          handler: async response => {
            alert('Payment Successful!');
            console.log(response);

            // Trigger the order processing function
            await handleOrderProcessing();
          },
          prefill: {
            name: 'Nitto Thomas',
            email: 'nittothomas94@gmail.com',
            contact: '9446979075',
          },
          theme: {
            color: '#3399cc',
          },
        };

        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      }
    } catch (error) {
      console.error('Payment Failed:', error);
    }
  };

  const handleOrderProcessing = async () => {
    try {
      const response = await axios.post('/orders'); // Call the backend route

      if (response.data.message === 'Order processed successfully') {
        alert('Payment Successful! Order has been placed.');
        navigate('/orders'); // Redirect to the Orders page
      } else {
        alert('Order processing failed.');
      }
    } catch (error) {
      console.error('Order Processing Error:', error);
      alert('Something went wrong while processing your order.');
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PaymentButton;
