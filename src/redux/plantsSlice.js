import { createSlice } from '@reduxjs/toolkit'

export const plantsSlice = createSlice({
    name: 'plants',
    initialState: {
        selectedCategory: "succulent"
    },
    reducers: {
        incrementByAmount: (state, action) => {
        state.value += action.payload
        },
    },
    })
export const getSelectedCategory = state => state.plants.selectedCategory
export default plantsSlice.reducer