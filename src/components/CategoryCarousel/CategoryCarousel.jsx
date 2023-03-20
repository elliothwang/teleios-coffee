import React from 'react';
import { useState, useEffect } from 'react';
import CategoryCarouselCard from '../CategoryCarouselCard/CategoryCarouselCard';
import categories from '../../assets/categories';
import './CategoryCarousel.styles.scss';
import useWindowSize from '../../helperFunctions';

function CategoryCarousel({}) {
  const window = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const length = categories && categories.length;
  let show = length - 1;

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

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  // display 1 carousel item on mobile
  if (window.width <= 730 && window.width > 0) {
    show = 1;
  } else {
    show = length - 1;
  }

  return (
    <div className="categories-container">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {currentIndex > 0 && (
            <button className="left-arrow" onClick={prev}>
              &lt;
            </button>
          )}
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
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
