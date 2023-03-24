import React from 'react';
import '../styles/main.scss';

function Hero() {
  return (
    <div className="hero-container">
      <section>
        <div className="hero-info">
          <h1>Wildwood Coffee</h1>
          <h2>An At-Home Brew For You</h2>
          <div>
            <button name="shop-now">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
