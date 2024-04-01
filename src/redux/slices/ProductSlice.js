import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')

    return await response.json();
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
        }
    },
    extraReducers: function (builder) {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = 'success'
        }).addCase(fetchData.rejected, (state, action) => {
            console.error('API call failed:', action.error.message);
            state.status = 'faild'
            state.error = action.error.message
        })
    }
})

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;