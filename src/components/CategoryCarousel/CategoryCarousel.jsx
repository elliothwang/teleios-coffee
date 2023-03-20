import React from 'react';
import { useState } from 'react';
import CategoryCarouselCard from '../CategoryCarouselCard/CategoryCarouselCard';
import categories from '../../assets/categories';
import './CategoryCarousel.styles.scss';

function CategoryCarousel({}) {
  // const [windowSize, setWindowSize] = useState(getWindowSize());
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = categories && categories.length;
  const show = length - 1;

  // const getWindowSize()

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="categories-container">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {currentIndex > 0 && (
            <button className="left-arrow" onClick={prev}>
              &lt;
            </button>
          )}
          <div className="carousel-content-wrapper">
            <div
              // className="carousel-content"
              className={`carousel-content show-${show}`}
              // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              {categories.map((category) => (
                <CategoryCarouselCard key={category.id} category={category} />
              ))}
            </div>
          </div>
          {currentIndex < length - show && (
            <button className="right-arrow" onClick={next}>
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousel;
