import '../styles/main.scss';

// ! FIX: background images aren't rendering

const CatalogItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="catalog-item-container">
      <div
        className="catalog-item-bg-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="catalog-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CatalogItem;
