import { configureStore } from '@reduxjs/toolkit'
import beneficiariesReducer from '../features/beneficiaries/beneficiariesSlice'

export const store = configureStore({
    reducer: {
        beneficiaries: beneficiariesReducer
    }
})