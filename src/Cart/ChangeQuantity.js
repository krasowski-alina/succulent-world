const ChangeQuantity = ({quantity, setQuantity}) => {
    const increment = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
    }
    const decrement = () => {
        const newQuantity = quantity - 1
        if(quantity <= 1) {
            return quantity
        }
        setQuantity(newQuantity)
    }
    return (
        <div className="addRemoveItemsBtn">
            <button onClick={decrement} className="add">-</button>
            <span className="itemsAmount">{quantity}</span>
            <button onClick={increment} className="remove">+</button>
        </div>
    )
}
export default ChangeQuantity;