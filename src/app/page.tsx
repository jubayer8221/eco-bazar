import React from "react";
import Home from "@/components/home/Home";
// import ProductDetails from "@/components/ProductDetails/ProductDetails";
import PopularCategories from "@/components/popularCategory/page";
import PopularProductCard from "@/components/popularProduct/page";
import Hotdeals from "@/components/home/Hotdeals";
import SalesBanner from "@/components/home/SalesBanner";

export default function page() {
  return (
    <div>
      <Home />
      {/* <ProductDetails></ProductDetails> */}
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
      <Hotdeals></Hotdeals>
      <SalesBanner />
    </div>
  );
}
