import React from 'react';
import '../styles/main.scss';

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
      <div className="hero-container">
        <div className="hero-title">
          <h1>Wildwood Coffee</h1>
          <h2>An At-Home Brew For You</h2>
        </div>
        <button name="shop-now">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
