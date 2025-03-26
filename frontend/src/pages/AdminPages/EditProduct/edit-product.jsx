import './edit-product.css';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/navbar-admin';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    imageurl: '',
  });

  const { id } = useParams();

  const getProducts = async (req, res) => {
    const response = await axios.get('/product/' + id);
    setProduct(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const onChange = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  const onClick = async () => {
    try {
      console.log(product);
      await axios.patch('/product/' + id, product);
      navigate('/admin/products');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <NavbarAdmin />
      <div className="add-product-container">
        <Input
          className="input-class"
          label="Product Name"
          value={product.name}
          onChange={e => onChange(e, 'name')}
        />
        <Input
          type="Number"
          className="input-class"
          label="Product Price"
          value={product.price}
          onChange={e => onChange(e, 'price')}
        />
        <Input
          className="input-class"
          label="Product Description"
          value={product.description}
          onChange={e => onChange(e, 'description')}
        />
        <Input
          className="input-class"
          label="Product Category"
          value={product.category}
          onChange={e => onChange(e, 'category')}
        />

        <Button text="Edit Product" className="add-user" onClick={onClick} />
      </div>
      ;
    </>
  );
};

export default EditProduct;
