import React from "react";
import Hotdeals from "@/components/Home/Hotdeals";
import PopularProduct from "../popularProducts/page";
import SalesBanner from "@/components/Home/SalesBanner";

export default function page() {
  return (
    <div className="mt-20 pt-20 md:pt-2 md:mt-5">
      {/* <PopularCategories /> */}
      <PopularProduct />
      <Hotdeals />
      <SalesBanner />
      {/* <FeaturedProducts /> */}
    </div>
  );
}
