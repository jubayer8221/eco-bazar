import React from "react";
import Hotdeals from "@/components/Home/Hotdeals";
import PopularProduct from "../popularProducts/page";
import SalesBanner from "@/components/Home/SalesBanner";

export default function page() {
  return (
    <div className="mt-10 xl:mt-48">
      {/* <PopularCategories /> */}
      <PopularProduct />
      <Hotdeals />
      <SalesBanner />
      {/* <FeaturedProducts /> */}
    </div>
  );
}
