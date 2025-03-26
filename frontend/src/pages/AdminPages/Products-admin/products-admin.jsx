import './products-admin.css';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/Navbar-Admin';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import Button from '../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
const ProductAdmin = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('/product');
    setProducts(response.data);
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const onEditClick = id => {
    navigate('/admin/editProduct/' + id);
  };

  const onDeleteClick = async id => {
    await axios.delete('/product/' + id);
    getProducts();
  };
  return (
    <>
      <NavbarAdmin />
      <div className="products-admin">
        {products.map(item => {
          return (
            <div key={item._id} className="product-card">
              <img src={item.imageurl} alt="product Image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>

              <div className="update-and-delete">
                <i
                  className="material-icons edit"
                  onClick={() => {
                    onEditClick(item._id);
                  }}
                >
                  edit
                </i>
                <i
                  className="material-icons delete"
                  onClick={() => {
                    onDeleteClick(item._id);
                  }}
                >
                  delete
                </i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductAdmin;
