import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
///Redux store = the entire state for the application
///Store manages state via a reducer object which takes features as props

export const store = configureStore({
reducer: {
    cart: cartReducer
}
})



