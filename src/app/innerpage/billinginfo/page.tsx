"use client";
import Image from "next/image";
import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
// import { updateQuantity, removeFromCart } from "@/store/slices/cartSlice";

const BillingInfo = () => {
  // const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedState, setSelectedState] = useState("");
  const countries = ["USA", "Canada", "UK", "Australia"];
  const states = ["California", "Texas", "New York", "Florida"];

  return (
    <div className="mt-16 xl:mt-[180px] pl-3 pr-3 py-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] flex flex-col xl:flex-row justify-between gap-3 font-poppins">
      <div className="w-full xl:w-[65%] flex flex-col gap-3">
        <h1 className="text-[24px] leading-9">Billing Information</h1>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 items-center gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] leading-5">Country / Region</label>
          <select
            // onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] leading-5">State</label>
          <select
            // onChange={(e) => setSelectedState(e.target.value)}
            className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] leading-5">Zip code</label>
          <input
            type="text"
            placeholder="Zip code"
            className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] leading-5">Email</label>
          <input
            type="text"
            placeholder="Email Address"
            className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] leading-5">Phone</label>
          <input
            type="text"
            placeholder="Phone number"
            className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
          />
        </div>
      </div>
      <div className="w-full xl:w-[35%] border border-[#E6E6E6] p-3 rounded-md">
        <h1>Order summary</h1>
        <div className="mb-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-1"
            >
              <div className="flex items-center gap-2">
                <Image src={item.image} alt="" width={50} height={50} />
                <p className="text-[12px]">
                  {item.name} x{item.quantity}
                </p>
              </div>
              <p className="text-[12px] font-medium">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#4D4D4D] text-[14px]">Total:</p>
          <p className="text-[18px] font-medium">${totalPrice}</p>
        </div>
        <Link href="/">
          <button
            className="bg-[#00B207] w-full py-[12px] text-[16px] text-white font-medium rounded-full"
            onClick={() => alert("Order placed successfully")}
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BillingInfo;
