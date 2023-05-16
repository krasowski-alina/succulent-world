import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemsToCart: (state, action) => {
            state.cartItems.push({
                plantId: action.payload.plant.id,
                quantity: action.payload.quantity
            })
        }
    }
    })
    
export const getCartItems = state => state.cart.cartItems
export const { addItemsToCart } = cartSlice.actions
export default cartSlice.reducer 