import { useDispatch } from "react-redux";
import { data } from "../Data/data";
import { removeItemsFromCart } from "../redux/cartSlice";

const CartItems = ({cartItem}) => {

    const dispatch = useDispatch()
    const selectedPlant = data.find(item => item.id === cartItem.plantId)
    return (
        <div className="cartItems-container">
            <img src={selectedPlant.images[0]} alt="selected plant" className="selected-plant-img"/>
            <span className="cartItem-name">{selectedPlant.itemName} </span>
            <span>x {cartItem.quantity}  </span>
            <span> ${selectedPlant.price  * cartItem.quantity} </span>
            <img onClick={()=> dispatch(removeItemsFromCart({cartItemId: cartItem.id}))}
                src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png "
                className="trash-icon"
                alt="trash can icon"/>
        </div>
        
    )
}
export default CartItems;