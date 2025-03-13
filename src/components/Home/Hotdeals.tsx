"use client";

import React, { useEffect, useState } from "react";
import HotdealsCart from "@/components/Home/HotdealsCart";

interface product {
  id: number;
  image: string;
  name: string;
  price: number;
  rating?: number;
  sale?: string;
  oldPrice?: string;
  bestSale?: boolean;
  reviews?: number;
}
const Hotdeals = () => {
  const [hotDealsProduct, setHotDealsProduct] = useState<product[]>([]);
  // console.log(hotDealsProduct[0])

  useEffect(() => {
    const fatchData = async () => {
      const api = await fetch(
        "https://ecobazar-backend-alpha.vercel.app//hotDealsProduct"
      );
      const data = await api.json();
      setHotDealsProduct(data.hotDeals_product);
    };
    fatchData();
  }, []);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 mt-14 bg-[#F7F7F7] font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Hot Deals
        </h2>
        <button className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium">
          View all →
        </button>
      </div>
      {/* hot list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
        {hotDealsProduct.map((product) => (
          <HotdealsCart
            key={Math.random()}
            id={product.id}
            img={product.image}
            title={product.name}
            price={product.price}
            rating={product.rating}
            sale={product.sale ?? "0%"}
            oldPrice={product.oldPrice?.toString() ?? ""}
            bestSale={product.bestSale}
            reviews={product.reviews ?? 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Hotdeals;
