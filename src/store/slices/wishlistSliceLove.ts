import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: boolean;
}

interface WishlistState {
  wishlist: WishlistItem[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.wishlist.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload); // ✅ Only add if it doesn't already exist
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
