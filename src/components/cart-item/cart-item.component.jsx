import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const {name, quantity, price, imageUrl} = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <h2>{name}</h2>
                <span>{quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;