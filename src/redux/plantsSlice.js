import { createSlice } from '@reduxjs/toolkit'

export const plantsSlice = createSlice({
    name: 'plants',
    initialState: {
        selectedCategory: "all"
    },
    reducers: {
        filterCategory: (state, action) => {
        state.selectedCategory = action.payload
        },
    },
    })
export const { filterCategory } = plantsSlice.actions
export const getSelectedCategory = state => state.plants.selectedCategory
export default plantsSlice.reducer