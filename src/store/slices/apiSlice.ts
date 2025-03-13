import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import types from "@/types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecobazar-backend-alpha.vercel.app" }), // Use your backend URL
  endpoints: (builder) => ({
    getPopularCategories: builder.query<types[], void>({
      query: () => "/popular_categories", // Update this if needed
    }),
    getAllProducts: builder.query<types[], void>({
      query: () => "/products", // Update this endpoint to match your backend
    }),
  }),
});

// Export hooks for fetching data
export const { useGetPopularCategoriesQuery, useGetAllProductsQuery } = apiSlice;
