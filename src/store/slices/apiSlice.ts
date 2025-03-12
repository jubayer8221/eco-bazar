import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import types from "@/types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecobazar-backend-alpha.vercel.app" }), // Use your backend URL
  endpoints: (builder) => ({
    getPopularCategories: builder.query<types[], void>({
      query: () => "/popularCategories",
    }),
    getFeaturedProducts: builder.query<types[], void>({
      query: () => "/featured_products",
    }),
    getPopularProducts: builder.query<types[], void>({
      query: () => "/popularProduct",
    }),
    getHotDealsProducts: builder.query<types[], void>({
      query: () => "/hotDealsProduct",
    }),
    getTestimonials: builder.query<types[], void>({
      query: () => "/testimonial",
    }),
    getAllProducts: builder.query<types[], void>({
      query: () => "/all_product",
    }),
  }),
});

// Export hooks for fetching data
export const {
  useGetPopularCategoriesQuery,
  useGetFeaturedProductsQuery,
  useGetPopularProductsQuery,
  useGetHotDealsProductsQuery,
  useGetTestimonialsQuery,
  useGetAllProductsQuery,
} = apiSlice;
