import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setCartOpen(!cartOpen);
    setFlag(!flag);
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
