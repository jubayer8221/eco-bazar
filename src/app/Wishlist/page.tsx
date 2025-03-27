"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/store/slices/cartSlice";
import {
  // addToWishlist,
  removeFromWishlist,
} from "@/store/slices/wishlistSliceLove";
import CartItem from "@/types/types";

export default function WishList() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  // State for notifications
  const [notification, setNotification] = useState<string | null>(null);

  // Show notification for 2 seconds
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  //  Handle Adding to Cart
  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
    showNotification(`Added to Cart: ${item.name}`);
  };

  return (
    <div className="xl:mt-32 font-poppins max-w-full mx-auto px-3 sm:px-[100px] md:px-[100px] xl:px-[100px] py-[80px] h-auto border border-gray-200 rounded-[8px] bg-white shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
        My Wishlist
      </h2>

      {/* Notification Popup */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-opacity">
          {notification}
        </div>
      )}

      {/* Show Cart Summary */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold">
          You have {cart.length} item(s) in your cart.
        </p>
        <p className="text-md text-gray-600">
          Total Cart Value: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600 uppercase text-[10px] sm:text-xs md:text-sm">
                    <th className="p-2 md:p-4">Product</th>
                    <th className="p-2 md:p-4">Price</th>
                    <th className="p-2 md:p-4">Stock Status</th>
                    <th className="p-2 md:p-4 hidden md:table-cell">Action</th>
                    {/* Hide on mobile */}
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <>
                      {/* Main Row */}
                      <tr key={item.id} className="border-t border-gray-200">
                        {/* Product Column */}
                        <td className="p-2 md:p-4 flex items-center pt-2 space-x-2 md:space-x-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={30}
                            height={30}
                            className="rounded-md w-8 h-8 sm:w-6 sm:h-6 md:w-10 md:h-10"
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
                        </td>

                        {/* Stock Status Column */}
                        <td className="p-2 md:p-4">
                          {item.stock ? (
                            <span className="bg-green-100 text-green-600 text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px]  sm:text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                              In Stock
                            </span>
                          ) : (
                            <span className="bg-red-100 text-red-600 text-[10px] sm:text-[6px] md:text-[10px] lg:text-[12px] xl:text-[12px] font-poppins px-1 py-1 rounded-full whitespace-nowrap">
                              Out of Stock
                            </span>
                          )}
                        </td>

                        {/* Action Column (Hidden on mobile, Visible on larger screens) */}
                        <td className="p-2 md:p-4 hidden md:flex items-center space-x-1 md:space-x-4">
                          {/* Add to Cart Button (Visible on larger screens) */}
                          <button
                            onClick={() =>
                              handleAddToCart({
                                ...item,
                                quantity: 1,
                                oldPrice: "0",
                                rating: 0,
                                sale: "",
                              })
                            }
                            className="bg-green-500 text-white py-1 px-4 rounded-lg text-sm hover:bg-green-600"
                          >
                            Add to Cart
                          </button>

                          {/* Remove from Wishlist Button */}
                          <button
                            onClick={() => {
                              dispatch(removeFromWishlist(item.id));
                              showNotification(
                                `Removed from Wishlist: ${item.name}`
                              );
                            }}
                            className="text-gray-500 hover:text-red-500 text-[10px] sm:text-xs md:text-lg"
                          >
                            <RxCross2 className="text-gray-500 hover:text-red-500 text-[10px] sm:text-xs md:text-lg cursor-pointer lg:ml-8" />
                          </button>
                        </td>
                      </tr>

                      {/* New Row for Add to Cart & Remove (Only on Mobile) */}
                      <tr className="md:hidden">
                        <td className="p-2 flex justify-center space-x-4">
                          {/* Add to Cart Button */}
                          <button
                            onClick={() =>
                              handleAddToCart({
                                ...item,
                                quantity: 1,
                                oldPrice: "0",
                                rating: 0,
                                sale: "",
                              })
                            }
                            className="bg-green-500 text-white py-1 px-4 rounded-lg text-sm hover:bg-green-600"
                          >
                            Add to Cart
                          </button>

                          {/* Remove from Wishlist Button */}
                          <button
                            onClick={() => {
                              dispatch(removeFromWishlist(item.id));
                              showNotification(
                                `Removed from Wishlist: ${item.name}`
                              );
                            }}
                            className="text-gray-500 hover:text-red-500 text-lg"
                          >
                            <RxCross2 className="cursor-pointer" />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
