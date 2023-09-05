import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartContext } from "../../contexts/cart.context.jsx";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
  // const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);
  const cartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const handleClick = () => {
    // setCartOpen(!cartOpen);
    dispatch(setIsCartOpen(!cartOpen));
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
