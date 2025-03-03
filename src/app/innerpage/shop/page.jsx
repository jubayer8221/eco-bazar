import React from "react";
import Hotdeals from "@/components/Home/Hotdeals";
import PopularProduct from "../popularProducts/page";
import SalesBanner from "@/components/Home/SalesBanner";

export default function page() {
  return (
    <div className="w-full">
      {/* <PopularCategories /> */}
      <PopularProduct />
      <Hotdeals />
      <SalesBanner />
      {/* <FeaturedProducts /> */}
    </div>
  );
}
