import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartItems: []
};

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemExists = state.cartItems.some(
                (item) => item.id === action.payload.id
            );

            if (!itemExists) {
                state.cartItems.unshift(action.payload);
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;