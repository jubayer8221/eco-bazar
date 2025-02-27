import React from "react";
import PopularProductCard from "@/components/popularProduct/page";
import Hotdeals from "@/components/Home/Hotdeals";
import PopularCategories from "@/components/popularCategory/page";
export default function page() {
  return (
    <div className="mt-16 xl:mt-48">
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
      <Hotdeals></Hotdeals>
    </div>
  );
}
