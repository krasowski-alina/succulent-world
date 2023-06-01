import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import cart from './cart.png'
import { getCartItems, getTotalPrice } from '../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div className='cart-container'>
            <header className='cart-header'>
                <img src={cart}  alt="shopping bag" className='cart-cartImg'/>
                <h2>Your cart items: </h2>
            </header>
            
            {cartItems.map((cartItem, index) => <CartItems cartItem = {cartItem} key={index}/>)}
            <h3>Total price: ${totalPrice.toFixed(2)}</h3>
            
        </div>
    )
}
export default Cart;