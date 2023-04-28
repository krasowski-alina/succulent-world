import cart from './cart.png'

const Plant = ({plantInfo}) => {

    return (
        <div>
            <h3>{plantInfo.itemName}</h3>
            <img src={plantInfo.images[0]} width="150px" alt="succulent close up"/>
            <p>$ {plantInfo.price}</p>
            <button>How many?</button>
            <img src={cart} className='addToCartLogo' alt="shopping bag"/>
        </div>
    )
}
export default Plant;