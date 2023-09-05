import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducers } from "./category/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducers,
    cart: cartReducer
});

export default rootReducer;