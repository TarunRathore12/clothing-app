import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducers } from "./category/category.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducers
});

export default rootReducer;