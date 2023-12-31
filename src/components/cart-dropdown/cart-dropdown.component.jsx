import { useContext } from "react";
import { useSelector } from "react-redux";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const checkOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkOutHandler}>CheckOut</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
