import Image from "next/image";
import React from "react";
import Link from "next/link";

const SalesBanner = () => {
  return (
    <div className="relative container mx-auto max-w-full sm:px-6 md:px-[100px] lg:px-[100px] py-6 md:py-10 px-[100px]">
      {/* Image */}
      <div className="relative">
        <Image
          src="/images/sales-banner.webp"
          alt="Sales Banner"
          width={1320}
          height={358}
          className="w-full h-[150px] sm:h-auto object-cover "
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center sm:justify-end p-3 sm:p-1 md:p-2">
          <div className="max-w-xs sm:max-w-lg md:text-center lg:max-w-sm text-center sm:text-center p-2 sm:p-1 md:p-6 md:px-10 rounded-lg">
            <h2 className="text-[10px] lg:text-2xl sm:text-lg md:text-lg font-poppins md:drop-shadow-[2px_2px_0px_black] text-white sm:drop-shadow-[2px_2px_0px_black]">
              Summer Sale
            </h2>
            <h1 className="md:drop-shadow-[2px_2px_0px_black] sm:drop-shadow-[5px_5px_5px_black] lg:text-2xl md:font-bold sm:text-2xl md:text-xl font-semibold">
              <span className="text-orange-500">37%</span>
              <span className="text-white"> OFF</span>
            </h1>
            <p className="text-[9px] sm:text-sm md:text-sm text-gray-200 mt-1 sm:mt-2 md:mt-3 md:drop-shadow-[1px_1px_0px_black] sm:drop-shadow-[2px_2px_0px_black]">
              Free on all your orders, Free Shipping, and a 30-day money-back
              guarantee.
            </p>

            <Link href="./innerpage/featuredProducts">
              <button className="mt-2 sm:mt-1 md:mt-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 sm:py-1 sm:px-3 md:px-4 rounded-lg text-[9px] sm:text-sm md:text-sm">
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
