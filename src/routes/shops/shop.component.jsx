import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
} from "../../store/category/category.action";
import "./shop.styles.scss";
import { selectCategoriesIsLoading } from "../../store/category/category.selector";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      // const categoriesArray = await getCategoriesAndDocuments();
      // dispatch(setCategories(categoriesArray));
    };
    // fetchCategories();
    // dispatch(fetchCategoriesAsync());
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
