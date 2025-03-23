import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartReducer from "./slices/cartSlice"; 
import wishlistReducer from "./slices/wishlistSliceLove";
import productReducer from "./slices/productSlice";
import userReducer from './slices/userSlice';
import searchReducer from "./slices/searchSlice"


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
    user: userReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
