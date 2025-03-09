// // productSlice.ts
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { CartItem } from "@/types/types"; // Import your CartItem interface

// // Define the initial state
// interface ProductState {
//   allData: CartItem[];
//   data: CartItem | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: ProductState = {
//   allData: [],
//   data: null,
//   loading: false,
//   error: null,
// };

// // Async thunk to fetch all products
// export const fetchAllProducts = createAsyncThunk(
//   "products/fetchAllProducts",
//   async () => {
//     const response = await fetch("http://localhost:4000/allProduct");
//     const data = await response.json();
//     return data;
//   }
// );

// // Async thunk to fetch a single product by ID
// export const fetchProductById = createAsyncThunk(
//   "products/fetchProductById",
//   async (id: number) => {
//     const response = await fetch(`http://localhost:4000/allProduct/${id}`);
//     const data = await response.json();
//     return data;
//   }
// );

// // Create the slice
// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setSelectedImage: (state, action) => {
//       if (state.data) {
//         state.data.image = action.payload;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.allData = action.payload;
//       })
//       .addCase(fetchAllProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch products";
//       })
//       .addCase(fetchProductById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch product";
//       });
//   },
// });

// export const { setSelectedImage } = productSlice.actions;
// export default productSlice.reducer;