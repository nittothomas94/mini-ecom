import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // Get theme from localStorage or set default to light
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const onSidebarCancelClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="navbar">
      {/* Heading */}
      <h1>mini e-com</h1>
      {/* menu items */}
      <div className="menu-items-nav">
        <Link
          to={'/'}
          className={`nav-link ${curentPage === '/' ? 'active-page' : ''}`}
        >
          Home
        </Link>
        <Link
          to={'/products'}
          className={`nav-link ${
            curentPage === '/products' ? 'active-page' : ''
          }`}
        >
          Products
        </Link>
        <Link
          to={'/categories'}
          className={`nav-link ${
            curentPage === '/categories' ? 'active-page' : ''
          }`}
        >
          Categories
        </Link>
      </div>

      {/* Account Cart Theme */}
      <div className="acc-cart">
        <Link
          to={'/signin'}
          className={`nav-link ${
            curentPage === '/signin' ? 'active-page' : ''
          }`}
        >
          <i class="material-icons">account_circle</i>
          Sign in
        </Link>

        <Link
          to={'/signup'}
          className={`nav-link ${
            curentPage === '/signup' ? 'active-page' : ''
          }`}
        >
          <i class="material-icons">account_circle</i>
          Sign up
        </Link>

        <Link
          to={'/cart'}
          className={`nav-link ${curentPage === '/cart' ? 'active-page' : ''}`}
        >
          <i class="material-icons">shopping_cart</i>
          Cart
        </Link>

        <Link
          to={'/orders'}
          className={`nav-link ${
            curentPage === '/orders' ? 'active-page' : ''
          }`}
        >
          <i class="material-icons">shopping_bag</i>
          Orders
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

      {/* MOBILE */}

      {isSidebarOpen ? (
        <div className="sidebar">
          <i
            className="material-icons cancel-icon-sidebar"
            onClick={onSidebarCancelClick}
          >
            cancel
          </i>
          <div className="sidebar-links">
            <Link
              to={'/'}
              className={`nav-link ${curentPage === '/' ? 'active-page' : ''}`}
            >
              Home
            </Link>
            <Link
              to={'/products'}
              className={`nav-link ${
                curentPage === '/products' ? 'active-page' : ''
              }`}
            >
              Products
            </Link>
            <Link
              to={'/categories'}
              className={`nav-link ${
                curentPage === '/categories' ? 'active-page' : ''
              }`}
            >
              Categories
            </Link>
            <Link
              to={'/signin'}
              className={`nav-link ${
                curentPage === '/signin' ? 'active-page' : ''
              }`}
            >
              <i class="material-icons">account_circle</i>
              Sign in
            </Link>

            <Link
              to={'/signup'}
              className={`nav-link ${
                curentPage === '/signup' ? 'active-page' : ''
              }`}
            >
              <i class="material-icons">account_circle</i>
              Sign up
            </Link>

            <Link
              to={'/cart'}
              className={`nav-link ${
                curentPage === '/cart' ? 'active-page' : ''
              }`}
            >
              <i class="material-icons">shopping_cart</i>
              Cart
            </Link>

            <Link
              to={'/orders'}
              className={`nav-link ${
                curentPage === '/orders' ? 'active-page' : ''
              }`}
            >
              <i class="material-icons">shopping_bag</i>
              Orders
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
      ) : (
        <div className="menu-icon" onClick={() => setIsSidebarOpen(true)}>
          <i className="material-icons">menu</i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
