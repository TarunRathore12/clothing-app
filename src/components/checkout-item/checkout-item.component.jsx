import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeCartItem, addItemsToCart, removeItemsToCart } = useContext(CartContext);

    return(
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => { removeItemsToCart(cartItem)}}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => { addItemsToCart(cartItem) }}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => { removeCartItem(cartItem) }}>&#10006;</div>
        </div>
    )
}

export default CheckOutItem;