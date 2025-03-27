"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { addToWishlist } from "@/store/slices/wishlistSlice";

interface propsType {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice: string;
  rating: number;
  quantity: number;
  sale?: string;
}

const FeaturedProductCart: React.FC<propsType> = ({
  id,
  img,
  title,
  price,
  rating,
  sale,
  oldPrice,
}) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();

  const generateRating = (rating: number) => {
    return (
      <div className="flex gap-1 text-[#FF8A00]">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <IoStar key={index} className="text-[9.75px]" />
          ) : (
            <CiStar key={index} className="text-[9.75px]" />
          )
        )}
      </div>
    );
  };

  return (
    <>
      <div
        className={`bg-white relative overflow-hidden border pt-1 px-2 border-[#F2F2F2] max-w[400px] xl:max-w-[570px] transition-all duration-200 ease-in-out ${
          isHover ? "border-[#2C742F]" : ""
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="absolute">
          {sale && (
            <span className="bg-[#EA4B48] pt-[1px] pb-[1px] pl-[4px] pr-[4px] rounded-sm text-[10px] leading-4 text-white">
              Sale: {sale}
            </span>
          )}
        </div>

        {/* Image */}
        <Link href={`/cartdetails/${id}`}>
          <div className="pt-5">
            <Image
              className="w-full h-auto"
              src={img}
              width={264}
              height={240}
              alt=""
            />
          </div>
        </Link>

        {/* Hover Icons (Wishlist & Quick View) */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() =>
              dispatch(
                addToWishlist({
                  id,
                  name: title,
                  price,
                  image: img,
                })
              )
            }
          >
            <div className="w-[40px] h-[40px] rounded-full bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white p-2 flex justify-center items-center">
              <FaRegHeart className="w-4 h-4" />
            </div>
          </button>
          <Link href={`/cartdetails/${id}`}>
            <div className="w-[40px] h-[40px] rounded-full bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white p-2 flex justify-center items-center">
              <BsEye className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Product Info */}
        <div className="pb-3 bottom-0 mt-2">
          <Link href={`/cartdetails/${id}`}>
            <h3
              className={`text-[14px] leading-[21px] ${
                isHover ? "text-[#00B207]" : "text-[#4D4D4D]"
              }`}
            >
              {title}
            </h3>
          </Link>

          {/* Price and Cart Button */}
          <div className="flex items-center justify-between">
            <p className="text-4 leading-6 font-medium">
              ${price}{" "}
              {oldPrice ? (
                <del className="text-[#808080] text-4">${oldPrice}</del>
              ) : (
                ""
              )}
            </p>

            {/* Cart Button (Fixed Size, No Movement) */}
            <div className="w-8 h-8 flex items-center justify-center">
              <button
                className=" hover:bg-[#00B207] hover:text-white rounded-full p-1 flex items-center justify-center transition-all duration-200 ease-in-out active:scale-90"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id,
                      name: title,
                      price,
                      image: img,
                      quantity: 1,
                    })
                  );
                }}
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className={`mt-2`}>{generateRating(rating)}</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCart;
