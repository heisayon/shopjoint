import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  cart: [],
  total: 0,
  productPrice: 0,
  shippingFee: 0.5,
  numberOfProducts: 1,
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
      state.productPrice = allPrice * state.numberOfProducts;
      state.total = state.productPrice + shipment;
    },
    increaseCount: (state) => {
      state.numberOfProducts += 1;
    },
    decreaseCount: (state) => {
      state.numberOfProducts -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  totalPrice,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
