"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const SalesBanner = () => {
  return (
    <div className="relative container p-4 max-w-6xl mx-auto">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src="/images/sales-banner.webp"
          alt="Sales Banner"
          width={1320}
          height={358}
          className="w-full h-auto"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-end p-6">
          <div className="max-w-lg w-full text-left p-4 md:p-6 rounded-lg">
            <h2 className="text-lg md:text-xl font-normal text-white">
              Summer Sale
            </h2>
            <h1 className="text-[36px] md:text-[56px] font-semibold leading-tight">
              <span className="text-orange-500">37%</span>
              <span className="text-white"> OFF</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mt-2">
              Free on all your orders, Free Shipping, and a 30-day money-back
              guarantee.
            </p>
            <Link href="/ProductDetails">
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 md:px-6 rounded-lg transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesBanner;
