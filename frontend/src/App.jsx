import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/UserPages/Home/Home';
import Products from './pages/UserPages/Products/Products';
import Categories from './pages/UserPages/Categories/Categories';
import Signin from './pages/UserPages/SIgnin/Signin';
import Signup from './pages/UserPages/Signup/Signup';
import Cart from './pages/UserPages/Cart/Cart';
import ProductsByCategory from './pages/UserPages/ProductsByCategory/productsByCategory';
import Dashboard from './pages/AdminPages/Dashboard/Dashboard';
import ProductAdmin from './pages/AdminPages/Products-admin/products-admin';
import AddProduct from './pages/AdminPages/AddProduct/add-product';
import EditProduct from './pages/AdminPages/EditProduct/edit-product';
import Users from './pages/AdminPages/Users/users';
import Orders from './pages/UserPages/Orders/Orders';
import OrdersAdminPage from './pages/AdminPages/Orders/Orders';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsByCategory" element={<ProductsByCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductAdmin />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/editProduct/:id" element={<EditProduct />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<OrdersAdminPage />} />
      </Routes>
    </>
  );
};

export default App;
