import { data } from "../Data/data";

const CartItems = ({cartItem}) => {
    const selectedPlant = data.find(item => item.id === cartItem.plantId)

    return (
        <div>
            <span>{selectedPlant.itemName}</span>
            <span>x {cartItem.quantity}</span>
        </div>
    )
}
export default CartItems;