import { useState } from 'react';
import ChangeQuantity from '../Cart/ChangeQuantity';
import cart from './cart.png'
import { addItemsToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Slides from './Slides';

const Plant = ({plant}) => {
    console.log(plant)
    const [quantity, setQuantity] = useState(1)
    const [showMore, setShowMore] = useState(false)

    const dispatch = useDispatch()
    const showFullDescription = () => {
        setShowMore(showMore => !showMore)
    }
    return (
        <div className='plant-card'>
            <h3>{plant.itemName}</h3>
            <Slides images = {plant.images}/>
                <p>$ {plant.price}</p>
                <div className='cart-bar'>
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                    <img onClick={() => dispatch(addItemsToCart({plant, quantity}))}
                        src={cart}
                        className='addToCartLogo'
                        alt="shopping bag"/>
                </div>
                <span>{showMore? plant.description : plant.description.substring(0,100)}
                    <button onClick={showFullDescription}>{showMore? "Show Less" : "Show More"}</button>
                </span>
               
        </div>
    )
}
export default Plant;