import { takeLatest, all, call, put } from "redux-saga/effects";
import { fetchCategoriesSuccess, fetchCategoriesFail } from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//         const categoriesArray = await getCategoriesAndDocuments();
//         // dispatch(fetchCategoriesSuccess(categoriesArray))
//         put(fetchCategoriesSuccess(categoriesArray));
//     }
//     catch (error) {
//         dispatch(fetchCategoriesFail(error));
//     }
// }

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        put(fetchCategoriesSuccess(categoriesArray));
        // dispatch(fetchCategoriesSuccess(categoriesArray))
    }
    catch (error) {
        // dispatch(fetchCategoriesFail(error));
        put(fetchCategoriesFail(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
} 