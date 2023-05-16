import { useState } from 'react';
import ChangeQuantity from '../Cart/ChangeQuantity';
import cart from './cart.png'
import { addItemsToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Plant = ({plant}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
        <div className='plant-card'>
            <h3>{plant.itemName}</h3>
            <img src={plant.images[0]} width="150px" alt="succulent close up"/>
            <p>$ {plant.price}</p>
            <div className='cart-bar'>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <img onClick={() => dispatch(addItemsToCart({plant, quantity}))}
                    src={cart}
                    className='addToCartLogo'
                    alt="shopping bag"/>
            </div>
        </div>
    )
}
export default Plant;