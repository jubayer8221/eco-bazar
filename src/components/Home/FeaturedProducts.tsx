"use client";
import React from "react";
import { useGetFeaturedProductsQuery } from "@/store/slices/apiSlice";
import LatestNews from "./LatestNews";
import FeaturedProductCart from "./FeaturedProductCart";

const FeaturedProducts = () => {
  const {
    data: FeaturedProduct,
    isLoading,
    error,
  } = useGetFeaturedProductsQuery();

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-5 w-full">
        <p className="text-center py-5 text-green-500 border border-green-500 w-[250px] h-16 rounded-md flex items-center justify-center">
          Loading...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center py-5 w-full">
        <p className="text-center py-5 text-red-500 border border-red-500 w-[250px] h-16 rounded-md flex items-center justify-center">
          Error fetching data
        </p>
      </div>
    );

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[140px] md:pr[140px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Featured Products
        </h2>
        <button className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium">
          View all →
        </button>
      </div>
      {/* Featured Products list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
        {FeaturedProduct?.map((product) => (
          <FeaturedProductCart
            key={product.id}
            id={product.id}
            title={product.name}
            img={product.image}
            sale={product.sale ?? ""}
            price={product.price}
            rating={product.rating}
            oldPrice={product.oldPrice ?? ""}
            quantity={1}
          />
        ))}
      </div>
      {/* latest news  */}
      <div className="mt-12">
        <LatestNews />
      </div>
    </div>
  );
};

export default FeaturedProducts;
