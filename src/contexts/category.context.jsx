import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoryContext = createContext({
  category: [],
});

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const value = { category, setCategory };

  useEffect(() => {
    const gettingTheData = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategory(categories);
    };
    gettingTheData();
  }, []);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
