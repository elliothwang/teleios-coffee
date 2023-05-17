import React from 'react';
import '../styles/main.scss';

function Hero() {
  return (
    <div className="hero-container">
      <section>
        <div className="hero-info">
          <h1>
            <span>88</span> ROASTING
          </h1>
          <h2>Small batch coffee - roasted in Sunnyside District, SF</h2>
          <div>
            <button name="shop-now" className="hero-button">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
