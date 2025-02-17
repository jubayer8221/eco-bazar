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
    <div className="font-poppins max-w-full mx-auto px-3 md:px-8 lg:px-[200px] py-4 border border-gray-200 rounded-lg bg-white shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
        My Wishlist
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase">
              <th className="p-2 md:p-3">Product</th>
              <th className="p-2 md:p-3">Stock Status</th>
              <th className="p-2 md:p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                {/* For small devices, image, name, and price in a row */}
                <td className="p-2 md:p-3 flex flex-col md:flex-row md:items-center md:space-x-4">
                  <div className="flex items-center space-x-2 md:space-x-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                      <span className="text-gray-800 text-xs md:text-sm">
                        {item.name}
                      </span>
                      <span className="font-semibold text-gray-800 text-xs md:text-sm">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <span className="text-gray-400 line-through text-[10px] md:text-xs">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Stock Status */}
                <td className="p-2 md:p-3">
                  {item.stock ? (
                    <span className="bg-green-100 text-green-600 text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </td>

                {/* Action Buttons */}
                <td className="p-2 md:p-3 flex flex-wrap items-center space-x-2">
                  <button
                    className={`text-white font-medium py-1 px-2 md:px-3 rounded-lg transition duration-300 text-[10px] md:text-xs ${
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
                    className="text-gray-500 hover:text-red-500 text-sm md:text-base"
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
      <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-3 mt-4">
        <span className="text-gray-600 font-medium text-xs md:text-sm">
          Share:
        </span>
        <FaFacebookF className="text-white text-[10px] md:text-xs cursor-pointer bg-green-500 rounded-full p-1" />
        <FaTwitter className="text-gray-500 text-[10px] md:text-xs cursor-pointer" />
        <FaPinterestP className="text-gray-500 text-[10px] md:text-xs cursor-pointer" />
        <FaInstagram className="text-gray-500 text-[10px] md:text-xs cursor-pointer" />
      </div>
    </div>
  );
}
