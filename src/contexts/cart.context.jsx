import { useReducer } from "react";
import { createContext, useState } from "react";

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

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemsToCart: () => {},
  removeItemsToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (initialValue, cartItem) => initialValue + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce((initialValue, cartItem) => {
      return initialValue + cartItem.price * cartItem.quantity;
    }, 0);

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemsToCart = (productsToAdd) => {
    // setCartItems(addCartItems(cartItems, productsToAdd));
    const newCartItems = addCartItems(cartItems, productsToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemsToCart = (productToRemove) => {
    const newCartItems = removeCartItems(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const removeCartItem = (cartItemToBeRemoved) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToBeRemoved.id
    );
    updateCartItemsReducer(newCartItems);
    // setCartItems(newCartItems);
  };

  const setCartOpen = (bool) => {
    dispatch({ type: "SET_IS_CART_OPEN", payload: { cartOpen: bool } });
  };

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    addItemsToCart,
    cartCount,
    removeItemsToCart,
    removeCartItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
