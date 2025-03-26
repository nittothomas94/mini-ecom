import './Dashboard.css';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/navbar-admin';
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <NavbarAdmin />
      <div className="dashboard">
        <div className="menu-items">
          <Link to={'/admin/dashboard'} className="nav-link">
            Dashboard
          </Link>
          <Link to={'/admin/products'} className="nav-link">
            Products
          </Link>
          <Link to={'/admin/addProduct'} className="nav-link">
            Add Product
          </Link>
          <Link to={'/admin/users'} className="nav-link">
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
