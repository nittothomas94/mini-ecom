import './navbar-admin.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const NavbarAdmin = () => {
  // Get theme from localStorage or set default to light
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme to body when it changes
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const curentPage = location.pathname;

  console.log(curentPage);

  return (
    <div className="navbar">
      <h1>mini-ecom</h1>
      <div className="menu-items">
        <Link
          to={'/admin/dashboard'}
          className={`nav-link ${
            curentPage === '/admin/dashboard' ? 'active-page' : ''
          }`}
        >
          Dashboard
        </Link>
        <Link
          to={'/admin/products'}
          className={`nav-link ${
            curentPage === '/admin/products' ? 'active-page' : ''
          }`}
        >
          Products
        </Link>
        <Link
          to={'/admin/addProduct'}
          className={`nav-link ${
            curentPage === '/admin/addProduct' ? 'active-page' : ''
          }`}
        >
          Add Product
        </Link>
        <Link
          to={'/admin/users'}
          className={`nav-link ${
            curentPage === '/admin/users' ? 'active-page' : ''
          }`}
        >
          Users
        </Link>
        <Link
          to={'/admin/orders'}
          className={`nav-link ${
            curentPage === '/admin/orders' ? 'active-page' : ''
          }`}
        >
          Orders
        </Link>
      </div>
      {/* Account Cart Theme */}
      <div className="acc-cart">
        <Link
          className={`nav-link ${curentPage === '/sign' ? 'active-page' : ''}`}
        >
          <i class="material-icons">account_circle</i>
          Sign in
        </Link>

        <Link
          className={`nav-link ${
            curentPage === '/admin/products' ? 'active-page' : ''
          }`}
        >
          <i class="material-icons">account_circle</i>
          Sign up
        </Link>

        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
        >
          {theme === 'dark' ? (
            <FaSun color="yellow" />
          ) : (
            <FaMoon color="black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
