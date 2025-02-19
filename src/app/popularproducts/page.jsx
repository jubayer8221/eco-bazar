import React from "react";
import PopularProductCard from "@/components/popularProduct/page";
import Hotdeals from "@/components/Home/Hotdeals";
import PopularCategories from "@/components/popularCategory/page";
export default function page() {
  return (
    <div>
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
      <Hotdeals></Hotdeals>
    </div>
  );
}
