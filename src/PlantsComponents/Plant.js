import { useState } from 'react';
import ChangeQuantity from '../Cart/ChangeQuantity';
import cart from './cart.png'

const Plant = ({plantInfo}) => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className='plant-card'>
            <h3>{plantInfo.itemName}</h3>
            <img src={plantInfo.images[0]} width="150px" alt="succulent close up"/>
            <p>$ {plantInfo.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <img src={cart} className='addToCartLogo' alt="shopping bag"/>
        </div>
    )
}
export default Plant;