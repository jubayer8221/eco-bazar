import Image from "next/image";
import React from "react";
import Link from "next/link";

const SalesBanner = () => {
  return (
    <div className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
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
        <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-3 sm:p-6">
          <div className="max-w-xs sm:max-w-lg lg:max-w-sm text-center sm:text-left p-2 sm:p-4 rounded-lg">
            <h2 className="text-[10px] sm:text-xs font-poppins text-white">
              Summer Sale
            </h2>
            <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold leading-tight">
              <span className="text-orange-500">37%</span>
              <span className="text-white"> OFF</span>
            </h1>
            <p className="text-[9px] sm:text-xs md:text-sm text-gray-200 mt-1 sm:mt-2">
              Free on all your orders, Free Shipping, and a 30-day money-back
              guarantee.
            </p>

            <Link href="./ProductDetails">
              <button className="mt-2 sm:mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 sm:py-1.5 sm:px-3 md:px-4 rounded-lg transition duration-300 text-[9px] sm:text-xs md:text-sm">
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
