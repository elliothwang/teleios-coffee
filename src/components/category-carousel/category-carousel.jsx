import React from 'react';
import CategoryCarouselCard from '../category-carousel-card/category-carousel-card';

function CategoryCarousel({}) {
  const categories = [
    {
      id: 1,
      title: 'Arabica',
      imageUrl:
        'https://circawho.com/wp-content/uploads/image-test-filler-blank.jpg',
    },
    {
      id: 2,
      title: 'Robusta',
      imageUrl:
        'https://circawho.com/wp-content/uploads/image-test-filler-blank.jpg',
    },
    {
      id: 3,
      title: 'Excelsa',
      imageUrl:
        'https://circawho.com/wp-content/uploads/image-test-filler-blank.jpg',
    },
    {
      id: 4,
      title: 'Liberica',
      imageUrl:
        'https://circawho.com/wp-content/uploads/image-test-filler-blank.jpg',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryCarouselCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryCarousel;
