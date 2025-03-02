"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ShoppingCardPopup from "../ShoppingCardPopup";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const MiddleNavbar = () => {
  const {cart} = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [searchIconR, setsearchIconR] = useState("");
  // const { cart, totalPrice } = useCart();
  const [totalCartAddShow, setTotalCartAddShow] = useState(false);
  return (
    <>
      <div className="pt-6 pb-6 pl-[300px] pr-[300px] flex justify-between bg-white">
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
              <GoSearch className="absolute left-3 bottom-[12px] h-4 w-4 text-gray-400" />
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
                width={28}
                height={24}
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
                <HiOutlineShoppingBag className="w-[25px] h-[25px] text-[#1A1A1A]" />
              </div>

              <div className="absolute bg-[#2C742F] w-3 h-3 flex items-center justify-center rounded-full text-white text-[10px] top-[68px] right-[379px]">
                {cart.length}
              </div>
            </div>
            <div className="">
              <p className="text-[11px] leading-[13.5px">Shopping Cart:</p>

              <p className="text-[14px] leading-[14px] font-medium">${totalPrice}</p>
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
