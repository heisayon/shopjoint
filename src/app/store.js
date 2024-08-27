import { configureStore } from "@reduxjs/toolkit";
import { getProducts } from "../features/getProducts";
import appSlice from "../features/appSlice";
import cartSlice from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    [getProducts.reducerPath]: getProducts.reducer,
    appSlice,
    cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProducts.middleware),
});
