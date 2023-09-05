import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    cartOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    console.log("action in cartReducer", action);
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            console.log("cart intial state", payload);
            return {
                ...state,
                cartItems: payload,
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                cartOpen: payload,
            };
        default:
            return state;
    }
};
