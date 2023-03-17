import React from 'react';
import { useState } from 'react';
import CategoryCarouselCard from '../CategoryCarouselCard/CategoryCarouselCard';
import categories from '../../assets/categories';
import './CategoryCarousel.styles.scss';

function CategoryCarousel({}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = categories.length;

  const next = () => {
    if (currentIndex < length - 1) {
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
      {/* {categories.map((category) => (
        <CategoryCarouselCard key={category.id} category={category} />
      ))} */}

      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button className="left-arrow" onClick={prev}>
            &lt;
          </button>
          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {categories.map((category) => (
                <CategoryCarouselCard key={category.id} category={category} />
              ))}
            </div>
          </div>
          <button className="right-arrow" onClick={next}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousel;
