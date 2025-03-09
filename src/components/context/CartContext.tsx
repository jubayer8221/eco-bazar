// "use client";
// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";

// interface Item {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity?: number;
// }

// interface CartContextType {
//   cart: Item[];
//   wishlist: Item[]; // ✅ Wishlist state
//   addToCart: (item: Item) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, newQuantity: number) => void;
//   clearCart: () => void;
//   totalPrice: number;
//   addToWishlist: (item: Item) => void; // ✅ Add to wishlist
//   removeFromWishlist: (id: number) => void; // ✅ Remove from wishlist
//   clearWishlist: () => void; // ✅ Clear wishlist
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Item[]>([]);
//   const [wishlist, setWishlist] = useState<Item[]>([]); // ✅ Wishlist state
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Load cart & wishlist from localStorage on initial render
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = localStorage.getItem("cart");
//       const storedWishlist = localStorage.getItem("wishlist");

//       if (storedCart) setCart(JSON.parse(storedCart));
//       if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
//     }
//   }, []);

//   // Save cart & wishlist to localStorage and update total price whenever cart changes
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(cart));
//       localStorage.setItem("wishlist", JSON.stringify(wishlist)); // ✅ Save wishlist
//       setTotalPrice(
//         cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
//       );
//     }
//   }, [cart, wishlist]);

//   // Cart Functions
//   const addToCart = (item: Item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
//             : cartItem
//         );
//       }
//       return [...prevCart, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   // Wishlist Functions
//   const addToWishlist = (item: Item) => {
//     setWishlist((prevWishlist) => {
//       if (!prevWishlist.find((wishlistItem) => wishlistItem.id === item.id)) {
//         return [...prevWishlist, item];
//       }
//       return prevWishlist; // Prevent duplicates
//     });
//   };

//   const removeFromWishlist = (id: number) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.filter((item) => item.id !== id)
//     );
//   };

//   const clearWishlist = () => {
//     setWishlist([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         wishlist, // ✅ Provide wishlist
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         totalPrice,
//         addToWishlist, // ✅ Provide wishlist functions
//         removeFromWishlist,
//         clearWishlist,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
