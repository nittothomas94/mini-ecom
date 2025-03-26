import Navbar from '../../../Components/User/Navbar/Navbar';
import { useState } from 'react';
import './Categories.css';

const Categories = () => {
  const categories = ['Accessories', 'Electronics', 'Fitness', 'Shoes'];

  const handleCategoryClick = category => {
    const url = `/ProductsByCategory?category=${encodeURIComponent(category)}`;
    console.log(url);
    window.open(url);
  };

  return (
    <>
      <Navbar />
      <div className="categories">
        <h1>Shop by Category</h1>
        <div className="categories-box">
          {categories.map(item => {
            return (
              <div className="card" onClick={() => handleCategoryClick(item)}>
                <img
                  src="https://cdn.pixabay.com/photo/2021/10/11/23/49/app-6702045_1280.png"
                  alt="categories logo"
                />
                <h2>{item}</h2>
                <p>Browse {item} Collection</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
