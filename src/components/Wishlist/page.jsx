"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import React, { useState } from "react";

export default function WishList() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      image: "/image/capsicum.png",
      price: 14.99,
      oldPrice: 20.99,
      stock: true,
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      image: "/image/cabbage.png",
      price: 45.0,
      oldPrice: null,
      stock: true,
    },
    {
      id: 3,
      name: "Fresh Sujapuri Mango",
      image: "/image/mango.png",
      price: 9.0,
      oldPrice: null,
      stock: false,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className=" font-poppins items-center pl-[300px] pr-[300px] pb-[40px] h-[506px] border border-gray-200 rounded-[8px] bg-white shadow-md p-8">
      <h2 className="items-center text-2xl font-bold text-center mb-6">
        My Wishlist
      </h2>
      <div className="items-center">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="p-4 flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <span className="text-gray-800">{item.name}</span>
                </td>
                <td className="p-4">
                  <span className="text-normal font-semibold text-gray-800">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </td>
                <td className="p-4">
                  {item.stock ? (
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </td>
                <td className="p-4 flex items-center space-x-4">
                  <button
                    className={`text-white font-medium py-2 px-4 rounded-lg transition duration-300 ${
                      item.stock
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={!item.stock}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-gray-500 hover:text-red-500 text-lg items-center"
                  >
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Social Share */}
      <div className="flex items-center space-x-4 mt-6">
        <span className="text-gray-600 font-medium">Share:</span>
        <FaFacebookF className="text-white text-lg cursor-pointer bg-green-500 rounded-full" />
        <FaTwitter className="text-gray-500 text-lg cursor-pointer" />
        <FaPinterestP className="text-gray-500 text-lg cursor-pointer" />
        <FaInstagram className="text-gray-500 text-lg cursor-pointer" />
      </div>
    </div>
  );
}
