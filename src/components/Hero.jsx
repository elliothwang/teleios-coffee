import React from 'react';
// ! FIX: import styles using new scaffoling system
// import '../styles/main.scss';

function Hero() {
  const imageUrl =
    'https://i.pinimg.com/originals/05/77/7b/05777b82951e564c972a756f11e3e95d.jpg';
  return (
    <div className="hero-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <div className="hero-title">
          <h1>Teleios Coffee</h1>
          <h2>An At-Home Brew For You</h2>
        </div>
        <button name="shop-now">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
