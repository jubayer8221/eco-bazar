"use client";
import Image from "next/image";
import Link from "next/link";

// import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
// import { updateQuantity, removeFromCart } from "@/store/slices/cartSlice";

const BillingInfo = () => {
  // const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  // country
  const [countries, setCountries] = useState<{ name: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  //state selected
  // const [states, setStates] = useState(null);
  const [sInputValue, setSInputValue] = useState("");
  const [sSelected, setSSelected] = useState("");
  const [sOpen, setSOpen] = useState(false);

  //state

  console.log(countries);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="mt-16 xl:mt-[180px] pl-3 pr-3 py-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] flex flex-col xl:flex-row justify-between gap-3 font-poppins">
      {/* billing info  */}
      <div className="w-full sm:w-full xl:w-[65%] flex flex-col gap-3">
        <h1 className="text-[24px] leading-9">Billing Information</h1>
        {/* first name, last name, company name  */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-[6px] p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              className="bg-[#FFFFFF] border rounded-[6px] border-[#E6E6E6] p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">
              Copany name <span className="text-[#727272]">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Company name"
              className="bg-[#FFFFFF] border rounded-[6px] border-[#E6E6E6] p-2"
            />
          </div>
        </div>
        {/* street addres  */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] leading-5">Country / Region</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-[6px] p-2"
          />
        </div>
        {/* country region states zip code  */}
        <div className="grid grid-cols-2 gap-3">
          {/* country region  */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">Country / region</label>
            <div>
              <div
                className={`bg-white p-2 flex items-center justify-between border rounded-[6px]`}
                onClick={() => setOpen(!open)}
              >
                {selected
                  ? selected.length > 20
                    ? selected?.substring(0, 20) + "...."
                    : selected
                  : "select country"}
                <IoIosArrowDown
                  size={20}
                  className={`${open && "rotate-180"}`}
                />
              </div>
              <ul
                className={`bg-white bg-opacity-95 mt-2 rounded-[6px] overflow-y-auto absolute z-20 w-72 ${
                  open ? "max-h-36" : "max-h-0"
                }`}
              >
                <div className="flex items-center sticky top-0 bg-white ">
                  <IoIosSearch size={18} className="text-gray-700" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) =>
                      setInputValue(e.target.value.toLowerCase())
                    }
                    placeholder="Select country"
                    className="placeholder:text-gray-700 p-2 outline-none"
                  />
                </div>
                {countries?.map((country) => (
                  <li
                    key={country?.name}
                    className={`p-2 text-sm hover:bg-[#00B207] hover:text-white cursor-pointer ${
                      country?.name?.toLowerCase() ===
                        selected?.toLowerCase() && "bg-[#00B207] text-white"
                    } ${
                      country?.name?.toLowerCase().startsWith(inputValue)
                        ? "block"
                        : "hidden"
                    }`}
                    onClick={() => {
                      if (
                        country?.name?.toLowerCase() !==
                        selected.toLocaleLowerCase()
                      ) {
                        setSelected(country?.name);
                        setOpen(false);
                        setInputValue("");
                      }
                    }}
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* states */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">States</label>
            <div>
              <div
                className={`bg-white border rounded-[6px] flex items-center justify-between p-2`}
                onClick={() => setSOpen(!sOpen)}
              >
                {sSelected
                  ? sSelected.length > 20
                    ? sSelected.substring(0, 20) + "..."
                    : sSelected
                  : "State"}
                <IoIosArrowDown
                  size={20}
                  className={`${sOpen && "rotate-180"}`}
                />
              </div>
              <ul
                className={`bg-white overflow-y-auto absolute z-20 w-72 bg-opacity-95 ${
                  sOpen ? "max-h-36" : "max-h-0"
                }`}
              >
                <div className="flex items-center sticky top-0 bg-white">
                  <IoIosSearch size={18} className="text-gray-700" />
                  <input
                    type="text"
                    placeholder="State"
                    value={sInputValue}
                    className="placeholder:text-gray-700 outline-none p-2"
                    onChange={(e) =>
                      setSInputValue(e.target.value.toLowerCase())
                    }
                  />
                </div>
                {countries?.map((country) => (
                  <li
                    key={country?.name}
                    className={`text-sm p-2 hover:bg-[#00B207] hover:text-white ${
                      country?.name?.toLowerCase() ===
                        sSelected.toLowerCase() && "text-white bg-[#00B207]"
                    } ${
                      country?.name?.toLowerCase().startsWith(sInputValue)
                        ? "block"
                        : "hidden"
                    }`}
                    onClick={() => {
                      if (
                        country?.name?.toLowerCase() !== sSelected.toLowerCase()
                      ) {
                        setSSelected(country?.name);
                        setSOpen(false);
                        setSInputValue("");
                      }
                    }}
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* zip code  */}
          <div className="w-1/2 flex flex-col gap-1">
            <label className="text-[14px] leading-5">Zip code</label>
            <input
              type="text"
              placeholder="Zip code"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-sm p-2"
            />
          </div>
        </div>

        {/* email phone  */}
        <div className="flex flex-col xl:flex-row items-center gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[14px] leading-5">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-[6px] p-2"
            />
          </div>
          <div className=" w-full flex flex-col gap-1">
            <label className="text-[14px] leading-5">Phone</label>
            <input
              type="number"
              placeholder="Phone number"
              className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-[6px] p-2"
            />
          </div>
        </div>
        {/* ship to a different address  */}
        <label className="flex items-center gap-1 cursor-pointer">
          <input
            type="checkbox"
            name=""
            id=""
            className="accent-green-600 w-4 h-4 cursor-pointer"
          />
          <span className="text-[14px] text-[#4D4D4D]">
            Ship to a different address
          </span>
          {/* #4D4D4D */}
        </label>
        {/* additinl info  */}
        <hr className="my-6" />
        <div>
          <h3 className="text-[24px]">Additional info</h3>
          <div className="mt-5">
            <p className="text-[14px] text-[#1A1A1A]">Order Notes (optional)</p>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="h-[100px] w-full border border-[#E6E6E6] rounded-[6px] p-3 placeholder:top-0"
            />
          </div>
        </div>
      </div>
      {/* order  */}
      <div className="w-full xl:w-[35%] rounded-md">
        <div className="border border-[#E6E6E6] p-3">
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

          {/* payment method  */}
          <div className="mt-10">
            <h3 className="text-[20px] mb-2">Payment Method</h3>

            <label className="flex items-center gap-1 mb-2">
              <input
                type="radio"
                name="paymentMethod" // Added name attribute
                className="accent-green-600 w-4 h-4 cursor-pointer"
              />
              <span className="text-[14px] text-[#4D4D4D]">
                Cash on Delivery
              </span>
            </label>

            <label className="flex items-center gap-1 mb-2">
              <input
                type="radio"
                name="paymentMethod" // Same name for all options
                className="accent-green-600 w-4 h-4 cursor-pointer"
              />
              <span className="text-[14px] text-[#4D4D4D]">Paypal</span>
            </label>

            <label className="flex items-center gap-1 mb-5">
              <input
                type="radio"
                name="paymentMethod" // Same name for all options
                className="accent-green-600 w-4 h-4 cursor-pointer"
              />
              <span className="text-[14px] text-[#4D4D4D]">Amazon Pay</span>
            </label>
          </div>

          <Link href="/">
            <button className="bg-[#00B207] w-full py-[12px] text-[16px] text-white font-medium rounded-full">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BillingInfo;
