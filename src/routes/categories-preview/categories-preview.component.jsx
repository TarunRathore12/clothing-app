import { useContext, Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import { CategoryContext } from "../../contexts/category.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  // const { category } = useContext(CategoryContext);
  // console.log("this is category iniside preview", category);
  const category = useSelector(selectCategoriesMap);
  const loading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(category).map((title) => {
          const products = category[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
