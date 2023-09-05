import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import { CategoryContext } from "../../contexts/category.context";
import { useContext, useState, useEffect, Fragment } from "react";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category: categoryParam } = useParams();
  console.log("render check category component");
  const category = useSelector(selectCategoriesMap);
  // const { category } = useContext(CategoryContext);
  const loading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(category[categoryParam]);

  useEffect(() => {
    console.log("useEffect in category component");
    setProducts(category[categoryParam]);
  }, [category, categoryParam]);

  console.log("checking the loading state", loading);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="category-title">{categoryParam.toUpperCase()}</h2>
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Category;
