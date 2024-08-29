import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  productPrice: 0,
  shippingFee: 0.5,
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
    totalPrice: (state) => {
      let allPrice = 0;
      let shipment = state.shippingFee * state.cart.length;
      state.cart.forEach((products) => (allPrice += products.price));
      state.total = allPrice + shipment;
      state.productPrice = allPrice;
    },
  },
});

export const { addToCart, removeFromCart, totalPrice } = cartSlice.actions;

export default cartSlice.reducer;
