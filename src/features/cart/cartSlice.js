import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/// Initial initialState object passing certain props
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

/// Create a 'cart' slice object passing the initialState as props 
const cartSlice = createSlice({
    name: 'cart',
    initialState
})

console.log(cartSlice)

export default cartSlice.reducer