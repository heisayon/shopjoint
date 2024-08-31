import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
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
      [
        ...state.cart,
        state.cart.push({ uniqueID: uuidv4(), cartItems: action.payload }),
      ];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (items) => items.uniqueID !== action.payload
      );
    },
    totalPrice: (state) => {
      let allPrice = 0;
      let shipment = state.shippingFee * state.cart.length;
      state.cart.forEach((products) => (allPrice += products.cartItems.price));
      state.total = allPrice + shipment;
      state.productPrice = allPrice;
    },
  },
});

export const { addToCart, removeFromCart, totalPrice } = cartSlice.actions;

export default cartSlice.reducer;
