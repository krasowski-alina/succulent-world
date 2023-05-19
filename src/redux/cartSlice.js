import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemsToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                plantId: action.payload.plant.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.plant.price
            })
        },
        removeItemsFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => {
                return cartItem.id !== action.payload.cartItemId
            })
        }
    }
    })
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return total + cartItems.totalPrice
    }, 0)
}

export const getCartItems = state => state.cart.cartItems
export const { addItemsToCart, removeItemsFromCart } = cartSlice.actions
export default cartSlice.reducer 