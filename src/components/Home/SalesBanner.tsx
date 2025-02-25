import Image from "next/image";
import React from "react";
import Link from "next/link";

const SalesBanner = () => {
  return (
    <div className="relative container mx-auto max-w-5xl px-4 sm:px-6 md:px-[100px] lg:px-16 py-6 md:py-10">
      {/* Image */}
      <div className="relative">
        <Image
          src="/images/sales-banner.webp"
          alt="Sales Banner"
          width={1320}
          height={358}
          className="w-full h-auto"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center sm:justify-end p-3 sm:p-6 md:p-2">
          <div className="max-w-xs sm:max-w-lg md:text-center lg:max-w-sm text-center sm:text-center p-2 sm:p-4 md:p-6 md:px-10 rounded-lg">
            <h2 className="text-[10px] lg:text-2xl sm:text-xs md:text-sm font-poppins md:drop-shadow-[2px_2px_0px_black] text-white sm:drop-shadow-[2px_2px_0px_black]">
              Summer Sale
            </h2>
            <h1 className="md:drop-shadow-[2px_2px_0px_black] sm:drop-shadow-[2px_2px_0px_black] lg:text-2xl md:font-bold sm:text-xl md:text-xl font-semibold">
              <span className="text-orange-500">37%</span>
              <span className="text-white"> OFF</span>
            </h1>
            <p className="text-[9px] sm:text-xs md:text-sm text-gray-200 mt-1 sm:mt-2 md:mt-3 md:drop-shadow-[2px_2px_0px_black] sm:drop-shadow-[2px_2px_0px_black]">
              Free on all your orders, Free Shipping, and a 30-day money-back
              guarantee.
            </p>

            <Link href="./ProductDetails">
              <button className="mt-2 sm:mt-3 md:mt-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 sm:py-1.5 sm:px-3 md:px-4 rounded-lg text-[9px] sm:text-xs md:text-sm">
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
