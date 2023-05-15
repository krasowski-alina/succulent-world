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
        <div>
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default ChangeQuantity;