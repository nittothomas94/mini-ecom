import Navbar from '../../../Components/User/Navbar/Navbar';
import './Products.css';
import { useState, useEffect } from 'react';
import Button from '../../../Components/Button/Button';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('/product');
    setProducts(response.data);
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const onClick = async id => {
    const response = await axios.get('/product/' + id);

    await axios.post('/cartProduct', response.data);

    // toast('Product added to Cart');

    toast.success('Product added to Cart', {
      position: 'bottom-right', // Ensures toast appears at bottom-right
      autoClose: 2000, // Closes after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return (
    <>
      <Navbar />
      {products.length < 1 ? (
        <div className="empty-products">
          <img
            src="/Images/main/no-products-found.png"
            alt="no products found"
          />
        </div>
      ) : (
        <div className="products">
          {products.map(item => {
            return (
              <div key={item._id} className="product-card">
                <img src={item.imageurl} alt="product Image" />
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>₹{item.price}</p>
                <Button
                  text="Add to Cart"
                  className="add-to-cart"
                  onClick={() => onClick(item._id)}
                >
                  <i className="material-icons">shopping_cart</i>
                </Button>
              </div>
            );
          })}
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Products;
