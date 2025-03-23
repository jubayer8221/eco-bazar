"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ShoppingCardPopup from "../ShoppingCardPopup";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MiddleNavbar = () => {
  const cart = useSelector((state: RootState) => state.cart.cart); // ✅ Redux cart state
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice); // ✅ Redux total price

  const [searchIconR, setsearchIconR] = useState("");
  // const { cart, totalPrice } = useCart();
  const [totalCartAddShow, setTotalCartAddShow] = useState(false);
  return (
    <>
      <div className="pt-6 pb-6 xl:pl-[100px] xl:pr-[100px] flex justify-between bg-white">
        {/* logo */}
        <div className=" ">
          <Link href="/" className="flex flex-row items-center gap-1">
            <Image src="/icons/logo.png" alt="" width={32} height={30} />
            <samp className="font-poppins font-medium text-[32px] leading-[38px] tracking-[-0.03em] text-[#002603]">
              Ecobazar
            </samp>
          </Link>
        </div>
        {/* search */}
        <div className=" relative w-[400px] h-11 border border-gray-300 rounded-lg overflow-hidden flex items-center">
          <div className="p-2">
            {!searchIconR && (
              <GoSearch className="absolute left-1 bottom-[12px] text-gray-400 text-[20px]" />
            )}
          </div>
          <input
            type="text"
            placeholder="search"
            className=" w-full pl-3 outline-none text-gray-700"
            value={searchIconR}
            onChange={(e) => setsearchIconR(e.target.value)}
          />
          <button className="text-[14px] bg-[#00B207] pt-[12px] pb-[12px] pr-[24px] pl-[24px] text-white">
            Search
          </button>
        </div>
        {/* icon  */}
        <div className="flex items-center gap-5">
          <div>
            <Link href="/Wishlist">
              <Image
                src="/icons/save.svg"
                alt=""
                width={30}
                height={30}
                className="text-black hover:border-red-500"
              />
            </Link>
          </div>
          <span className="text-[#E6E6E6]">|</span>
          {/* shopping cart  */}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setTotalCartAddShow((prev) => !prev)}
          >
            <div>
              <div className="relative cursor-pointer">
                <HiOutlineShoppingBag className="w-[30px] h-[30px] text-[#1A1A1A]" />
              </div>

              <div className="absolute bg-[#2C742F] w-4 h-4 flex items-center justify-center rounded-full text-white text-[14px] top-[62px]">
                {cart.length}
              </div>
            </div>
            <div className="">
              <p className="text-[14px] leading-[13.5px]">Shopping Cart:</p>

              <p className="text-[14px] leading-[14px] font-medium">
                ${totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
      {totalCartAddShow && (
        <div>
          <ShoppingCardPopup />
        </div>
      )}
    </>
  );
};

export default MiddleNavbar;
