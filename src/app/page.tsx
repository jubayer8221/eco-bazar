import React from "react";
import Home from "@/components/Home/Home";
// import ProductDetails from "@/components/ProductDetails/ProductDetails";

import WishList from "@/components/Wishlist/page";

export default function page() {
  return (
    <div>
      <Home />
      {/* <ProductDetails></ProductDetails> */}
      <WishList></WishList>
    </div>
  );
}
