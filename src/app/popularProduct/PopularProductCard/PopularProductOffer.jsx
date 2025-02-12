"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    title: "Sale of the Month",
    subtitle: "BEST DEALS",
    buttonText: "Shop Now",
    background: "bg-blue-500",
    image: "/image/popularCards/discount_cards/fruits.png",
    discount: "00 : 02 : 18 : 46",
  },
  {
    title: "Low-Fat Meat",
    subtitle: "85% FAT FREE",
    buttonText: "Shop Now",
    background: "bg-black",
    image: "/image/popularCards/discount_cards/meat.png", // Replace with your image path
    price: "$79.99",
  },
  {
    title: "100% Fresh Fruit",
    subtitle: "SUMMER SALE",
    buttonText: "Shop Now",
    background: "bg-yellow-400",
    image: "/image/popularCards/discount_cards/apple.png", // Replace with your image path
    discount: "64% OFF",
  },
];

export default function PopularProductOffer() {
  return (
    <div className="flex justify-center space-x-6 p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className={`rounded-xl p-6 w-80 text-white ${product.background}`}
        >
          <h3 className="text-sm uppercase font-semibold">
            {product.subtitle}
          </h3>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          {product.discount && (
            <p className="text-lg font-bold">{product.discount}</p>
          )}
          {product.price && (
            <p className="text-lg font-bold text-yellow-300">
              Started at {product.price}
            </p>
          )}
          <button className="mt-4 bg-white text-black px-4 py-2 rounded-full">
            {product.buttonText} →
          </button>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
            className="mt-4 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
