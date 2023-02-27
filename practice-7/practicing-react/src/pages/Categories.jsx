import "../categories.styles.scss";
import categories from "../categories.json";
import CategoryItem from "../components/CategoryItem";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
