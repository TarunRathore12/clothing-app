// import { CartContext } from '../../contexts/cart.context';
import { useSelector } from "react-redux";
import CheckOutItem from "../checkout-item/checkout-item.component.jsx";
import "./checkout.styles.scss";
import { useContext } from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  // const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>The Checkout Page</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : {cartTotal}</span>
    </div>
  );
};

export default CheckOut;
