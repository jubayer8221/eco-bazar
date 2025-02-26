"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Sale of the Month",
    subtitle: "BEST DEALS",
    buttonText: "Shop Now",
    image: "/image/fruits.png",
    date: "00  :  02  : 18  :  46",
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

// ProductCard Component
const ProductCard = ({ product, index }) => {
  const textColor = index === 2 ? "text-black" : "text-white";

  return (
    <div className="font-poppins mx-0 mt-12">
      <div className="w-auto h-[435px] md:h-[300px] lg:h-[375px] rounded-xl relative overflow-hidden ">
        {/* Image as background, fills container */}
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="100%"
          className="object-cover object-center rounded-xl"
        />

        {/* Content */}
        <div
          className={`absolute inset-0 flex flex-col text-center py-16 md:py-10 ${textColor}`}
        >
          <h2 className="text-sm uppercase font-semibold ">
            {product.subtitle}
          </h2>
          <h2 className="text-lg font-semibold">{product.title}</h2>
          {product.date && (
            <p className="font-poppins text-sm">{product.date}</p>
          )}
          {product.datetext && (
            <p className="text-xs font-poppins">{product.datetext}</p>
          )}
          {product.price && (
            <p className="text-lg font-semibold text-orange-600">
              <span className={textColor}>Started at</span> {product.price}
            </p>
          )}
          {product.discount && (
            <p className="text-lg font-bold text-orange-600">
              <span className={textColor}>Up to</span>{" "}
              <span className="bg-black font-poppins text-sm rounded p-1">
                {product.discount}
              </span>
            </p>
          )}
          <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Link href="./ProductDetails">
              <button className="w-[160px] bg-white font-semibold text-[#00B207] px-4 py-2 rounded-lg hover:bg-[#00B207] hover:text-white md:w-[120px] md:text-xs">
                {product.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// PopularProductOffer Component
export default function PopularProductOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Function to go to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Slider Container for Small and Mid Devices */}
      <div className="md:hidden relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Visible only on small and mid devices) */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Grid Layout for Large Devices (Laptops/Computers) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 justify-center items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
