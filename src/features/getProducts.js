import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProducts = createApi({
  reducerPath: "getProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (searchItem) => {
        if (searchItem !== "undefined" && searchItem) {
          return `/products/search?q=${searchItem}`;
        } else {
          return "/products";
        }
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = getProducts;
