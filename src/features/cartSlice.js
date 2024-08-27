import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      [...state.cart, state.cart.push(action.payload)];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (products) => products.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
