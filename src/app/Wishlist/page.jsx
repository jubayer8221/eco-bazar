"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import { useCart } from "@/components/context/CartContext"; // Ensure this is correctly imported

export default function WishList() {
  const { wishlist, addToCart, removeFromWishlist } = useCart(); // Use cart context

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 }); // Add to cart with quantity 1
    removeFromWishlist(item.id); // Remove from wishlist
  };

  return (
    <div className="xl:mt-32 font-poppins max-w-full mx-auto px-2 md:px-12 lg:px-[300px] py-[80px] h-auto border border-gray-200 rounded-[8px] bg-white shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
        My Wishlist
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-[10px] sm:text-xs md:text-sm">
              <th className="p-2 md:p-4">Product</th>
              <th className="p-2 md:p-4">Price</th>
              <th className="p-2 md:p-4">Stock Status</th>
              <th className="p-2 md:p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                {/* Product Column */}
                <td className="p-2 md:p-4 flex items-center pt-2 space-x-2 md:space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="rounded-md w-8 h-8 sm:w-6 sm:pt-2 sm:h-6 md:w-10 md:h-10"
                  />
                  <span className="text-gray-800 text-[10px] sm:text-[7px] md:text-base">
                    {item.name}
                  </span>
                </td>

                {/* Price Column */}
                <td className="p-2 md:p-4 text-[10px] sm:text-[7px] md:text-base">
                  <span className="font-poppins text-gray-800">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-1 md:ml-2">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </td>

                {/* Stock Status Column */}
                <td className="p-2 md:p-4">
                  {item.stock ? (
                    <span className="bg-green-100 text-green-600 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 text-[10px] sm:text-[6px] font-poppins px-1 py-1 rounded-full whitespace-nowrap">
                      Out of Stock
                    </span>
                  )}
                </td>

                {/* Action Column */}
                <td className="p-2 md:p-4 flex flex-wrap items-center space-x-1 md:space-x-4">
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`text-white font-poppins py-1 px-1 md:py-2 md:px-4 rounded-lg transition duration-300 text-[10px] sm:text-[7px] md:text-sm ${
                      item.stock
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!item.stock}
                  >
                    Add to Cart
                  </button>

                  {/* Remove from Wishlist */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-gray-500 hover:text-red-500 text-[10px] sm:text-xs md:text-lg"
                  >
                    <RxCross2 className="text-gray-500 hover:text-red-500 text-[10px] sm:text-xs md:text-lg cursor-pointer lg:ml-8" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Social Share */}
      <div className="flex flex-wrap items-left justify-start space-x-2 md:space-x-4 mt-4 md:mt-6">
        <span className="text-gray-600 font-medium text-[10px] sm:text-xs md:text-base">
          Share:
        </span>
        <FaFacebookF className="text-white text-[10px] sm:text-xs md:text-lg cursor-pointer bg-green-500 rounded-full p-1" />
        <FaTwitter className="text-gray-500 text-[10px] sm:text-xs md:text-lg cursor-pointer" />
        <FaPinterestP className="text-gray-500 text-[10px] sm:text-xs md:text-lg cursor-pointer" />
        <FaInstagram className="text-gray-500 text-[10px] sm:text-xs md:text-lg cursor-pointer" />
      </div>
    </div>
  );
}
