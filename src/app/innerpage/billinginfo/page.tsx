"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const carts = [
  {
    id: 1,
    name: "Fresh Indian Orange",
    price: 12.0,
    image: "/images/hot2.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Green Apple",
    price: 14.0,
    image: "/images/hot3.png",
    quantity: 2,
  },
];
const BillingInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const countries = ["USA", "Canada", "UK", "Australia"];
  const states = ["California", "Texas", "New York", "Florida"];
  const totalPrice = carts.reduce(
    (sum, cart) => sum + cart.price * cart.quantity,
    0
  );
  return (
    <div className="mt-16 xl:mt-[180px] pl-3 pr-3 py-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] flex flex-col xl:flex-row justify-between gap-3 font-poppins">
      {/* Billing Information */}
      <div className="flex flex-col gap-3">
        <h1 className="text-[24px] leading-9">Billing Information</h1>
        {/* First Name, Last Name, Company Name */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-2">
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
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">
              Company Name <span className="text-[#505050]">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Company name"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
        </div>
        {/* Street Address */}
        <div className="flex flex-col">
          <label className="text-[14px] leading-5">Street Address</label>
          <input
            type="text"
            placeholder="Street address"
            className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2 w-full"
          />
        </div>
        {/* Country/Region, States, Zip Code */}
        <div className="flex items-center gap-20">
          <div className="flex gap-2">
            {/* Country Dropdown */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-[14px] leading-5">Country / Region</label>
              <div className="flex items-center bg-[#FFFFFF] border border-[#E6E6E6] overflow-hidden rounded-sm p-2 relative">
                <input
                  type="text"
                  value={selectedCountry}
                  onChange={(e)=>setSelectedCountry(e.target.value)}
                  placeholder="Selected"
                  className="w-full pl-1 outline-none"
                />
                <IoIosArrowDown className="text-[#999999]" />
                <select
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* State Dropdown */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-[14px] leading-5">States</label>
              <div className="flex items-center bg-[#FFFFFF] border border-[#E6E6E6] overflow-hidden rounded-sm p-2 w-28 relative">
                <input
                  type="text"
                  value={selectedState}
                  onChange={(e)=>setSelectedState(e.target.value)}
                  placeholder="Selected"
                  className="w-full pl-1 outline-none"
                />
                <select
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown className="text-[#999999]" />
              </div>
            </div>
          </div>
          {/* Zip Code */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] leading-5">Zip code</label>
            <input
              type="text"
              placeholder="Zip code"
              className="bg-[#FFFFFF] w-32 border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
        </div>
        {/* Email, Phone */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col w-1/2 gap-1">
            <label className="text-[14px] leading-5">Email</label>
            <input
              type="text"
              placeholder="Email Address"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-1">
            <label className="text-[14px] leading-5">Phone</label>
            <input
              type="text"
              placeholder="Phone number"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
        </div>
        {/* check setion  */}
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-[#CCCCCC] rounded focus:ring-blue-500"
          />
          <p className="text-[14px] text-[#4D4D4D]">
            Ship to a different address
          </p>
        </div>
        <hr className="border border-[#E6E6E6] my-8" />
        <div>
          <h1 className="text-[24px] leading-5 font-medium mb-3">
            Additional Info
          </h1>
          <div className="">
            <p className="text-[14px] mb-1">Order Notes (Optional)</p>
            <div>
              <input
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery"
                className=" w-full rounded-sm border border-[#E6E6E6] h-20 p-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Order Summary */}
      <div className="w-full xl:w-1/3 border border-[#E6E6E6] p-3 rounded-md">
        <h1>Order summary</h1>
        {/* product  */}
        <div className="mb-10">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="flex items-center justify-between gap-1"
            >
              <div className="flex items-center justify-center gap-1">
                <Image src={cart.image} alt="" width={50} height={50} />
                <p className="text-[12px]">
                  {cart.name} x{cart.quantity}
                </p>
              </div>
              <p className="text-[12px] font-medium">${cart.price}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#4D4D4D] text-[14px]">Subtotal:</p>
          <p className="text-[14px] font-medium">${totalPrice}</p>
        </div>
        <hr className="my-2 border-[#838383]" />
        <div className="flex items-center justify-between">
          <p className="text-[#4D4D4D] text-[14px]">Shipping:</p>
          <p className="text-[14px] font-medium">Free</p>
        </div>
        <hr className="my-2 border-[#838383]" />
        <div className="flex items-center justify-between">
          <p className="text-[#4D4D4D] text-[14px]">Total:</p>
          <p className="text-[18px] font-medium">${totalPrice}</p>
        </div>
        {/* paymet method  */}
        <div>
          <h1 className="my-3">Payment Method</h1>
          <div className="flex flex-col gap-1 mb-8">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] accent-[#00B207] border-2 border-[#00B207] rounded-full"
              />
              <p className="text[#4D4D4D] text-[14px]">Cash on Delivery</p>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] accent-[#00B207] border-2 border-[#00B207] rounded-full"
              />
              <p className="text[#4D4D4D] text-[14px]">Paypal</p>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] accent-[#00B207] border-2 border-[#00B207] rounded-full"
              />
              <p className="text[#4D4D4D] text-[14px]">Amazon Pay</p>
            </div>
          </div>
        </div>
        <Link href="/">
          <button className="bg-[#00B207] w-full py-[12px] text-[16px] text-white font-medium rounded-full">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BillingInfo;
