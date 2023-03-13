const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((cat) => (
        <div className="category-container">
          <img alt="" />

          <div className="category-body-container"></div>
          <h2>{cat.title}</h2>
          <p>Shop Now</p>
        </div>
      ))}
    </div>
  );
};

export default App;
