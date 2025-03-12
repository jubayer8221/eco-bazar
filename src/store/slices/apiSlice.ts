import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import types from "@/types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecobazar-backend-alpha.vercel.app" }), // Use your backend URL
  endpoints: (builder) => ({
    getPopularCategories: builder.query<types[], void>({
      query: () => "/popularCategories",
    }),
  }),
});

// Export hook for fetching categories
export const { useGetPopularCategoriesQuery } = apiSlice;
