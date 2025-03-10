"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
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
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[#FF8A00]">
            <IoStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[#FF8A00]">
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[#FF8A00]">
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[#FF8A00]">
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <CiStar className="text-[9.75px]" />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[#FF8A00]">
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
            <IoStar className="text-[9.75px]" />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div
        className={`bg-white relative overflow-hidden border pt-1 px-2 border-[#F2F2F2] max-w[400px] xl:max-w-[570px] ${
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
        {/* image */}
        <Link href={`/cartdetails/${id}`}>
          <div className="pt-5">
            <Image
              className="w-full  h-auto"
              src={img}
              width={264}
              height={240}
              alt=""
            />
          </div>
        </Link>
        {/* icon show hover */}
        {isHover ? (
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="p-2 w-[40px] h-[40px] rounded-full bg-[#F2F2F2] flex items-center justify-center">
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
                <Image
                  className="text-black bg-transparent"
                  src="/icons/heart.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <Link href={`/cartdetails/${id}`}>
              <div className="w-[40px] h-[40px] rounded-full bg-[#F2F2F2] p-2 flex justify-center items-center">
                <BsEye className="w-4 h-4" />
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
        {/* info */}
        <div className="pb-3 bottom-0 mt-2">
          {isHover ? (
            <Link href={`/cartdetails/${id}`}>
              <h3 className={`text-[14px] leading-[21px] text-[#00B207]`}>
                {title}
              </h3>
            </Link>
          ) : (
            <Link href={`/cartdetails/${id}`}>
              <h3 className={`text-[14px] leading-[21px] text-[#4D4D4D]`}>
                {title}
              </h3>
            </Link>
          )}
          <div className="flex items-center justify-between">
            <p className="text-4 leading-6 font-medium">
              ${price}{" "}
              {oldPrice ? (
                <del className="text-[#808080] text-4">${oldPrice}</del>
              ) : (
                ""
              )}
            </p>

            {isHover ? (
              <div
                className={`bg-[#00B207] text-white w-8 h-8 rounded-full p-1 flex items-center justify-center`}
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
              </div>
            ) : (
              <div
                className={`bg-[#F2F2F2] w-6 h-6 rounded-full p-1 flex items-center justify-center1}`}
              >
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id,
                        name: title,
                        price,
                        image: img,
                        quantity: 1,
                      })
                    )
                  }
                  type="submit"
                >
                  <HiOutlineShoppingBag />
                </button>
              </div>
            )}
          </div>
          <div className={`mt-2`}>{generateRating(rating)}</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCart;
