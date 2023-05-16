import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import cart from './cart.png'
import { getCartItems } from '../redux/cartSlice';
const Cart = () => {
    const cartItems = useSelector(getCartItems)
    return (
        <div>
            <h2>Your cart items: </h2>
            <img src={cart}  alt="shopping bag"/>
            {cartItems.map((cartItem, index) => <CartItems cartItem = {cartItem} key={index}/>)}
            
        </div>
    )
}
export default Cart;