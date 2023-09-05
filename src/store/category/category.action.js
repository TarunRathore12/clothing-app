import { createAction } from "../../utils/reducer/reducer.utils.js";
import { CATEGORIES_ACTION_TYPES } from './category.types.js';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { fetchSignInMethodsForEmail } from "firebase/auth";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFail = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//         const categoriesArray = await getCategoriesAndDocuments();
//         dispatch(fetchCategoriesSuccess(categoriesArray))
//     }
//     catch (error) {
//         dispatch(fetchCategoriesFail(error));
//     }
// }