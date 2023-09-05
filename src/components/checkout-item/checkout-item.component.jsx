import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
import {
  addItemsToCart,
  removeCartItem,
  removeItemsToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  //   const { removeCartItem, addItemsToCart, removeItemsToCart } =
  //     useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            dispatch(removeItemsToCart(cartItems, cartItem));
            // removeItemsToCart(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            dispatch(addItemsToCart(cartItems, cartItem));
            // addItemsToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(removeCartItem(cartItems, cartItem));
          //   removeCartItem(cartItem);
        }}
      >
        &#10006;
      </div>
    </div>
  );
};

export default CheckOutItem;
