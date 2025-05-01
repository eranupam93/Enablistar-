import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    fetchBeneficiaries,
    addBeneficiary,
    updateBeneficiary,
    deleteBeneficiary
} from '../../api/mockApi'

const initialState = {
    beneficiaries: [],
    status: 'idle',
    error: null
}

export const fetchAllBeneficiaries = createAsyncThunk(
    'beneficiaries/fetchAll',
    async () => {
        const response = await fetchBeneficiaries()
        return response
    }
)

export const addNewBeneficiary = createAsyncThunk(
    'beneficiaries/add',
    async (beneficiary) => {
        const response = await addBeneficiary(beneficiary)
        return response
    }
)

export const updateExistingBeneficiary = createAsyncThunk(
    'beneficiaries/update',
    async ({ id, beneficiary }) => {
        const response = await updateBeneficiary(id, beneficiary)
        return response
    }
)

export const deleteExistingBeneficiary = createAsyncThunk(
    'beneficiaries/delete',
    async (id) => {
        await deleteBeneficiary(id)
        return id
    }
)

const beneficiariesSlice = createSlice({
    name: 'beneficiaries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBeneficiaries.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllBeneficiaries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.beneficiaries = action.payload
            })
            .addCase(addNewBeneficiary.fulfilled, (state, action) => {
                state.beneficiaries.push(action.payload)
            })
            .addCase(updateExistingBeneficiary.fulfilled, (state, action) => {
                const index = state.beneficiaries.findIndex(b => b.id === action.payload.id)
                if (index !== -1) {
                    state.beneficiaries[index] = action.payload
                }
            })
            .addCase(deleteExistingBeneficiary.fulfilled, (state, action) => {
                state.beneficiaries = state.beneficiaries.filter(b => b.id !== action.payload)
            })
    }
})

export default beneficiariesSlice.reducer