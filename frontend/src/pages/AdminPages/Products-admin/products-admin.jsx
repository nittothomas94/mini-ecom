import './products-admin.css';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/navbar-admin';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import Button from '../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import OrderCartSklton from '../../../Components/Order-Cart-Sklton/Order-Cart-Sklton';

const ProductAdmin = () => {
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

      {loading ? (
        [1, 2, 3].map(() => {
          return (
            <div className="loadingCard">
              <OrderCartSklton />
            </div>
          );
        })
      ) : (
        <>
          {products.length < 1 ? (
            <div className="empty-products">
              <img
                src="/Images/main/no-products-found.png"
                alt="no products found"
              />
            </div>
          ) : (
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
          )}
        </>
      )}
    </>
  );
};

export default ProductAdmin;
