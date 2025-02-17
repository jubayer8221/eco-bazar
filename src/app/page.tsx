import React from "react";
import Home from "@/components/Home/Home";
import WishList from "@/components/Wishlist/page";
import ShoppingCart from "@/components/shoppingCart/ShoppingCart";

export default function page() {
  return (
    <div>
      <Home />
      <WishList></WishList>
      <ShoppingCart />
    </div>
  );
}
