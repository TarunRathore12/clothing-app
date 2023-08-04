import "./categories-preview.styles.scss";
import { useContext, Fragment } from "react";
import { CategoryContext } from "../../contexts/category.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { category } = useContext(CategoryContext);

  return (
    <Fragment>
      {Object.keys(category).map((title) => {
        const products = category[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
