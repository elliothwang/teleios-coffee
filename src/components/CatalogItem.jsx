import '../styles/main.scss';

const CatalogItem = ({ category }) => {
  const { title, description, image } = category;
  return (
    <div className="catalog-item-container">
      <div className="item-info">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <img src={image} alt="coffee beans bag" />
      </div>
    </div>
  );
};

export default CatalogItem;
