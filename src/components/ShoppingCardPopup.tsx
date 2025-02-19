"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

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

const ShoppingCardPopup = () => {
  const totalPrice = carts.reduce(
    (sum, cart) => sum + cart.price * cart.quantity,
    0
  );
  const [closePopup, setClosePopup] = useState(true);
  // console.log(totalPrice)
  return (
    <>
      {closePopup && (
        <div className="absolute top-0 right-0 bg-black bg-opacity-50 w-full h-[calc(100vh)] z-20 flex justify-end font-poppins">
          <div className="bg-white w-1/4 h-full p-4 flex flex-col justify-between">
            {/* top section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[20px] leading-7">
                  Shopping Card ({carts.length})
                </h3>
                <button onClick={() => setClosePopup((prev) => !prev)}>
                  <IoMdClose className="text-[13px] text-[#1A1A1A]" />
                </button>
              </div>
              {carts.map((cart) => (
                <div
                  key={cart.id}
                  className="flex items-center justify-between border-b border-b-[#E6E6E6]"
                >
                  <div className="flex items-center gap-1">
                    <Image src={cart.image} alt="" width={120} height={100} />
                    <div>
                      <h5 className="text-[14px] leading-5 font-normal">
                        {cart.name}
                      </h5>
                      <p className="text-[14px] font-medium">
                        <span className="text-[#808080]">
                          {cart.quantity} kg x
                        </span>{" "}
                        {cart.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-[22px] h-[22px] rounded-full border border-[#CCCCCC] bg-none flex items-center justify-center">
                    <IoMdClose className="text-2" />
                  </div>
                </div>
              ))}
            </div>
            {/* bottom section  */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p>{carts.length} Product</p>
                <div>${totalPrice}</div>
              </div>
              <Link href="/innerpage/billinginfo">
                <button className="bg-[#00B207] w-full text-[16px] font-semibold rounded-full py-4 px-10 text-white">
                  Checkout
                </button>
              </Link>
              <Link href="/">
                <button className="bg-[#4c5b4c] w-full text-[16px] font-semibold rounded-full py-4 px-10 border border-[#00B207] text-white">
                  Go To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCardPopup;
