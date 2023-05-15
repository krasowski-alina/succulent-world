import { configureStore } from '@reduxjs/toolkit'
import plants from './plantsSlice'

export const store = configureStore({
    reducer: {
        plants
    }
}) 