import React from "react";
import Home from "@/components/Home/Home";
import PopularCategories from "@/components/popularCategory/page";
import PopularProductCard from "@/components/popularProduct/page";
import Hotdeals from "@/components/Home/Hotdeals";
import SalesBanner from "@/components/Home/SalesBanner";
import WishList from "@/components/Wishlist/page";

export default function page() {
  return (
    <div>
      <Home />
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
      <Hotdeals></Hotdeals>
      <SalesBanner />

      <WishList></WishList>
    </div>
  );
}
