import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.cartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        console.log("cartItems are here", cartItems)
        return cartItems.reduce(
            (initialValue, cartItem) => initialValue + cartItem.quantity, 0)
    })

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((initialValue, cartItem) =>
        initialValue + cartItem.price * cartItem.quantity, 0)
)
