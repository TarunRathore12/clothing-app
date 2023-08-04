import { useParams } from "react-router-dom";
import { CategoryContext } from "../../contexts/category.context";
import { useContext, useState, useEffect, Fragment } from "react";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category: categoryParam } = useParams();
  const { category } = useContext(CategoryContext);
  const [products, setProducts] = useState(category[categoryParam]);

  useEffect(() => {
    setProducts(category[categoryParam]);
  }, [category, categoryParam]);

  return (
    <Fragment>
      <h2 className="category-title">{categoryParam.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
