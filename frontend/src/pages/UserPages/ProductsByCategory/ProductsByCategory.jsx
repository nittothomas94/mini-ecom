import Navbar from '../../../Components/User/Navbar/Navbar';
import './ProductsByCategory.css';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const queryString = window.location.search;

    const response = await axios.get(`/product${queryString}`);
    setProducts(response.data);
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="products">
        {products.map(item => {
          return (
            <div key={item._id} className="product-card">
              <img src={item.imageurl} alt="product Image" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsByCategory;
