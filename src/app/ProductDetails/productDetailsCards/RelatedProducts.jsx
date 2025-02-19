"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Green Apple",
    image: "/apple.png",
    price: 14.99,
    originalPrice: 20.99,
    sale: true,
  },
  {
    id: 2,
    name: "Chanise Cabbage",
    image: "/cabbage.png",
    price: 14.99,
    originalPrice: null,
    sale: false,
  },
  {
    id: 3,
    name: "Green Capsicum",
    image: "/capsicum.png",
    price: 14.99,
    originalPrice: null,
    sale: false,
  },
  {
    id: 4,
    name: "Ladies Finger",
    image: "/ladyfingers.png",
    price: 14.99,
    originalPrice: null,
    sale: false,
  },
];

const RelatedProducts = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">Related Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative border p-4 rounded-lg">
            {product.sale && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                Sale 50%
              </span>
            )}
            <div className="relative h-48 w-full mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-poppins mb-2">{product.name}</h3>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <span className="text-md font-semibold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-gray-500">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex justify-between mx-5 space-x-4">
                <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600">
                  <AiOutlineHeart size={20} />
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-green-600">
                  <BsCartPlusFill size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
