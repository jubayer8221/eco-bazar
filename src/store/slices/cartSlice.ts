import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to Cart: Adds an item to the cart or updates its quantity if it already exists
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If the item already exists, update its quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the item does not exist, add it to the cart with the provided quantity
        state.cart.push({ ...action.payload });
      }
      // Recalculate the total price
      state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    // Remove from Cart: Removes an item from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      // Recalculate the total price
      state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    // Update Quantity: Updates the quantity of a specific item in the cart
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      // Recalculate the total price
      state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    // Clear Cart: Removes all items from the cart
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;