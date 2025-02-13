"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    title: "Sale of the Month",
    subtitle: "BEST DEALS",
    buttonText: "Shop Now",
    image: "/image/fruits.png",
    date: "00  :  02  :  18  :  46",
    datetext: "DAYS   HOURS   MINS   SECS",
  },
  {
    title: "Low-Fat Meat",
    subtitle: "85% FAT FREE",
    buttonText: "Shop Now",
    image: "/image/meat.png",
    price: "$79.99",
  },
  {
    title: "100% Fresh Fruit",
    subtitle: "SUMMER SALE",
    buttonText: "Shop Now",
    image: "/image/fruitscover.png",
    discount: "64% OFF",
  },
];

// ProductCard Component (Modified to use Image as background)
const ProductCard = ({ product, index }) => {
  return (
    <div className="h-[1220] w-[536]">
      <div
        key={index}
        className={`  rounded-xl w-[335px] relative overflow-hidden h-[436px]`} // Removed background color, added overflow-hidden
      >
        <div className="justify-center absolute inset-0">
          {/* Image as background, fills container */}
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="100%"
            className="object-cover object-center rounded-xl" // Rounded corners for the image too
          />
        </div>

        <div className=" text-center p-6 relative z-10 text-white">
          <h3 className="text-sm uppercase font-semibold">
            {product.subtitle}
          </h3>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          {product.date && (
            <p className="font-poppins text-lg w-[290]">{product.date}</p>
          )}
          {product.datetext && (
            <p className="text-xs  font-poppins">{product.datetext}</p>
          )}
          {product.price && (
            <p className="text-lg font-bold text-yellow-300">
              Started at {product.price}
            </p>
          )}
          <button className="justify-center mt-4 bg-white font-semibold text-[#00B207] px-4 py-2 rounded-full">
            {product.buttonText} →
          </button>
        </div>
      </div>
    </div>
  );
};

// PopularProductOffer Component (No changes needed here)
export default function PopularProductOffer() {
  return (
    <div className="flex justify-center items-center space-x-6 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  );
}
