import Navbar from '../../../Components/User/Navbar/Navbar';
import './Products.css';
import { useState, useEffect } from 'react';
import Button from '../../../Components/Button/Button';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import CardSklton from '../../../Components/CardSkelton/CardSkelton';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await axios.get('/product');
    setProducts(response.data);
    setLoading(false);
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

      <div className="products">
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => <CardSklton />)
        ) : (
          <>
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
          </>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Products;
