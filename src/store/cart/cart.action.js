import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItems = (cartItems, productsToAdd) => {
    // first check if cartItems contains the product to add
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === productsToAdd.id
    );

    // if its present already then we need to return with increment
    if (existingCartItems) {
        return cartItems.map((cartItem) =>
            cartItem.id === productsToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // if not present then return with quantity as 1
    return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, productToRemove) => {
    if (productToRemove.quantity === 1) {
        return cartItems.filter((cartItem) => {
            return cartItem.id !== productToRemove.id;
        });
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemsToCart = (cartItems, productsToAdd) => {
    // setCartItems(addCartItems(cartItems, productsToAdd));
    const newCartItems = addCartItems(cartItems, productsToAdd);
    console.log("new cart items", newCartItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    // updateCartItemsReducer(newCartItems);
};

export const removeItemsToCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItems(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    // updateCartItemsReducer(newCartItems);
};

export const removeCartItem = (cartItems, cartItemToBeRemoved) => {
    const newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToBeRemoved.id
    );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    // updateCartItemsReducer(newCartItems);
    // setCartItems(newCartItems);
};
