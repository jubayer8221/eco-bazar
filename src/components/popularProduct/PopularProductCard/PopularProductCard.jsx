"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/store/slices/cartSlice";
import { addToWishlist } from "@/store/slices/wishlistSlice";
import { useDispatch } from "react-redux";

// Cart Icon Component
const CartIcon = () => (
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
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const PopularCard = ({ name, image, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="shadow-md h-[240px] px-2 text-left border border-transparent hover:shadow-lg hover:border-green-700 transition-all mb-0 pb-0">
      <Link href={`/cartdetails/${id}`}>
        <div>
          {/* Product Image */}
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="w-[130px] h-[135px] object-contain mx-auto"
          />
          {/* Product Name with Hover Effect */}
          <p className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
            {name}
          </p>
        </div>
      </Link>

      {/* Price, Reviews, and Cart Button */}
      <div className="mt-2 flex justify-between items-center">
        <div className="gap-2">
          {/* Price */}
          <p className=" flex-col">
            price: $<span className="text-green-600 flex-col">{price}</span>{" "}
          </p>

          {/* Reviews */}
          <div className="flex-col items-center">
            <div className="text-yellow-400">★★★★☆</div>
          </div>
        </div>

        {/* Cart Button */}
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id,
                name,
                price,
                image,
                quantity: 1,
              })
            )
          }
          className="p-2 text-green-600 hover:text-green-700 hover:border-green-700 transition-colors"
        >
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default React.memo(PopularCard);
