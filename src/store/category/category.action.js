import { createAction } from "../../utils/reducer/reducer.utils.js";
import { CATEGORIES_ACTION_TYPES } from './category.types.js';

const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);