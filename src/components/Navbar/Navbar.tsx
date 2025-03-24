"use client";
import React, { useState } from "react";
import TopNabar from "./TopNabar";
import MiddleNavbar from "./MiddleNavbar";
import Bottom from "./Bottom";
import Link from "next/link";
import Image from "next/image";
import MobaileNavbar from "./MobaileNavbar";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const [searchIconR, setsearchIconR] = useState("");
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* mobaile */}
      {/* logo manuvar and language  */}
      <div className="">
        <div className="absolute z-20 p-3 w-full sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] flex items-center justify-between xl:hidden bg-white drop-shadow-[0px_2px_1px_rgba(229,229,229,1)]">
          <Link href="/">
            <div className=" flex items-center gap-1">
              <Image src="/icons/logo.png" alt="" width={20} height={20} />
              <span className="font-poppins font-medium text-[20px] leading-[20px] tracking-[-0.03em] text-[#002603]">
                Ecobazar
              </span>
            </div>
          </Link>
          <MobaileNavbar />
        </div>
        {/* mobaile save and shoping cart icon search */}
        <div className="fixed bottom-0 left-0 right-0 z-20 px-3 py-4 w-full sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] flex items-center justify-between xl:hidden bg-white drop-shadow-[1px_2px_0px_rgba(1,229,229,229)]">
          <Link href="/Wishlist">
            <CiHeart className="text-[30px] text-black hover:text-[#00B207]" />
          </Link>
          <div className=" relative border w-[250px] md:w-auto border-gray-300 rounded-lg overflow-hidden flex items-center">
            <div className="p-2 flex items-center">
              {!searchIconR && (
                <GoSearch className="absolute left-1 bottom-[] text-gray-400 text-[20px]" />
              )}
            </div>
            <input
              type="text"
              placeholder="search"
              className=" w-full pl-3 outline-none text-gray-700"
              value={searchIconR}
              onChange={(e) => setsearchIconR(e.target.value)}
            />
            <button className="text-[14px] bg-[#00B207] pt-[7px] pb-[7px] pr-[20px] pl-[20px] md:pr-[24px] md:pl-[24px] text-white">
              Search
            </button>
          </div>
          <Link href="/shoppingCart" className="relative">
            {/* Shopping Bag Icon */}
            <HiOutlineShoppingBag className="text-[30px] sm:text-[35px] md:text-[40px] text-black hover:text-[#00B207]" />

            {/* Notification Badge */}
            <div className="absolute w-5 h-5 bg-[#2C742F] rounded-full top-[-12px] right-0 md:right-[6px] text-white flex items-center justify-center text-[12px] font-bold">
              {cart.length}
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex flex-col">
        {/* top navbar  */}
        <TopNabar />
        {/* middel */}
        <MiddleNavbar />
        {/* bottom  */}
        <Bottom />
      </div>
    </div>
  );
};

export default Navbar;
