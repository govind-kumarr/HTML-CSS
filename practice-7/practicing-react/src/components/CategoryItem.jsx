const CategoryItem = ({ category }) => {
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
