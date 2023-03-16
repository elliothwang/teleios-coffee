import React from 'react';

function Hero() {
  const imageUrl =
    'https://img.freepik.com/premium-photo/top-view-cup-coffee-table_23-2148336777.jpg?w=2000';
  return (
    <div className="hero-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h1>Teleios Coffee</h1>
        <h2>Beans handled with love and delicacy</h2>
        <button>Shop</button>
      </div>
    </div>
  );
}

export default Hero;
