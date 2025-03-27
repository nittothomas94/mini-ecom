import './add-product.css';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/navbar-admin';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    imageurl: '',
  });

  const navigate = useNavigate();

  const onChange = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  console.log(product);
  const onUploadImage = async (e, key) => {
    try {
      const imageData = e.target.files[0];

      const formData = new FormData();

      formData.append('avatar', imageData);

      const response = await axios.post('/upload-img', formData);

      // console.log('Upload details :', response.data);

      if (response.data.imageUrl) {
        setProduct({ ...product, [key]: response.data.imageUrl });
      } else {
        console.error('Image URL missing in response:', response.data);
      }
      toast.success('Image added successfully!');
    } catch (e) {
      console.log('image upload failed', e);
      toast.error('Failed to add product. Try again later.');
    }
  };

  const onClick = async () => {
    try {
      console.log(product);
      await axios.post('/product', product);
      navigate('/admin/products');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <NavbarAdmin />
      <ToastContainer />
      <div className="add-product-container">
        <Input
          className="input-class"
          label="Product Name"
          onChange={e => onChange(e, 'name')}
        />
        <Input
          type="Number"
          className="input-class"
          label="Product Price"
          onChange={e => onChange(e, 'price')}
        />
        <Input
          className="input-class"
          label="Product Description"
          onChange={e => onChange(e, 'description')}
        />
        <Input
          className="input-class"
          label="Product Category"
          onChange={e => onChange(e, 'category')}
        />
        <Input
          type="file"
          label="Product Image"
          onChange={e => onUploadImage(e, 'imageurl')}
        />
        <Button text="Add Product" className="add-user" onClick={onClick} />
      </div>
      ;
    </>
  );
};

export default AddProduct;
