import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  page: 1,
};

export const appSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { getSearchValue } = appSlice.actions;

export default appSlice.reducer;
