"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { addToWishlist } from "@/store/slices/wishlistSlice"; // Import wishlist actions

interface ProductProps {
  id: number;
  img: string;
  title: string;
  price: number;
  rating?: number;
  sale?: string;
  oldPrice?: string;
  bestSale?: boolean;
  reviews?: number;
}

const HotdealsCart: React.FC<ProductProps> = ({
  id,
  img,
  title,
  price,
  rating,
  oldPrice,
  sale,
  bestSale,
  reviews,
}) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  const generateRating = (rating: number) => {
    return (
      <div className="flex gap-1 text-[#FF8A00]">
        {Array.from({ length: 5 }, (_, index) =>
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
    <div
      className={`bg-white relative overflow-hidden border pt-1 px-2 border-[#F2F2F2] max-w[400px] xl:max-w-[570px] transition-all duration-300 ${
        isHover
          ? "text-center col-span1 md:col-span-2 md:row-span-2 xl:col-span-2 xl:row-span-2"
          : "col-span-1 row-span-1"
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
        {bestSale && (
          <span className="ml-2 bg-[#2388FF] pt-[1px] pb-[1px] pl-[4px] pr-[4px] rounded-sm text-[10px] leading-4 text-white">
            Best Sale
          </span>
        )}
      </div>
      {/* image */}
      <div className="pt-5">
        <Image
          className={`w-full h-auto`}
          src={img}
          width={isHover ? 525 : 264}
          height={isHover ? 446 : 240}
          alt="product image"
        />
      </div>
      {/* button show hover */}
      {isHover ? (
        <div className="flex items-center justify-between w-full">
          {/* Wishlist button */}
          <div
            onClick={() =>
              dispatch(addToWishlist({ id, name: title, price, image: img }))
            }
            className="p-3 rounded-full bg-[#F2F2F2] flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/icons/save.svg"
              alt="Add to Wishlist"
              width={20}
              height={20}
            />
          </div>

          {/* Add to Cart button */}
          <button
            onClick={() =>
              dispatch(
                addToCart({ id, name: title, price, image: img, quantity: 1 })
              )
            }
            className="text-white bg-[#00B207] text-[12px] px-4 py-3 sm:px-4 sm:py-3 md:px-12 md:py-4 xl:px-8 xl:py-3 rounded-full flex items-center justify-center gap-2 md:text-[14px] xl:text-[14px] font-medium"
          >
            Add to Cart <HiOutlineShoppingBag className="w-4 h-4" />
          </button>

          {/* View button */}
          <div className="w-[46px] h-[46px] rounded-full bg-[#F2F2F2] p-2 flex justify-center items-center">
            <BsEye className="w-4 h-4" />
          </div>
        </div>
      ) : (
        ""
      )}
      {/* info */}
      <div className="pb-3 bottom-0 mt-2">
        <h3 className="text-[14px] leading-[21px] text-[#4D4D4D]">{title}</h3>
        {isHover ? (
          <p className="text-4 leading-6 font-medium">
            {price} <del className="text-[#808080] text-4">{oldPrice}</del>
            <span className="text-[12px] text-[#808080] leading-4">
              ({reviews} Feedback)
            </span>
          </p>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-4 leading-6 font-medium">
              {price} <del className="text-[#808080] text-4">{oldPrice}</del>
            </p>
            <div className="bg-[#F2F2F2] w-6 h-6 rounded-full p-1 flex items-center justify-center">
              <HiOutlineShoppingBag className="" />
            </div>
          </div>
        )}
        <div
          className={`mt-2 ${
            isHover ? "flex items-center justify-center" : ""
          }`}
        >
          {rating && generateRating(rating)}
        </div>

        {isHover ? (
          <div>
            <p className="text-[12px] text-[#808080] leading-4 mt-2">
              Hurry up! Offer ends In:
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <div className="text-[18px] font-medium flex flex-col items-center justify-center">
                01 <span className="text-[10px] text-[#999999]">DAYS</span>
              </div>
              <div className="text-[18px] font-medium flex flex-col items-center justify-center">
                23 <span className="text-[10px] text-[#999999]">HOURS</span>
              </div>
              <div className="text-[#808080]">:</div>
              <div className="text-[18px] font-medium flex flex-col items-center justify-center">
                34 <span className="text-[10px] text-[#999999]">MINS</span>
              </div>
              <div className="text-[#808080]">:</div>
              <div className="text-[18px] font-medium flex flex-col items-center justify-center">
                57 <span className="text-[10px] text-[#999999]">SECS</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HotdealsCart;
