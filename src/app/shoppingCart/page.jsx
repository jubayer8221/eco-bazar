"use client";

import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Image from "next/image";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/image/capsicum.png",
      name: "Capsicum",
      price: 70.0,
      quantity: 5,
    },
    {
      id: 2,
      image: "/image/chili.png",
      name: "Chili",
      price: 14.0,
      quantity: 5,
    },
  ]);

  const calculateSubtotal = (item) => item.price * item.quantity;
  const cartTotal = cartItems.reduce(
    (total, item) => total + calculateSubtotal(item),
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="mx-auto mt-16 xl:mt-48 font-poppins text-xs my-10">
      {/* Content container with max-width */}
      <div className="max-w-[1320px] px-4 lg:px-[300px]">
        <h1 className="text-2xl font-bold mb-4 text-center">

          My Shopping Cart
        </h1>

        <div className="flex flex-col justify-center lg:flex-row gap-5">
          <div className="w-full lg:w-[672px] border border-gray-300 rounded-lg p-4">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-2 sm:px-2 border-b text-left font-light text-[#808080]">
                    PRODUCT
                  </th>
                  <th className="py-2 px-2 sm:px-2 border-b text-left font-light text-[#808080]">
                    PRICE
                  </th>
                  <th className="py-2 px-2 sm:px-2 border-b text-left font-light text-[#808080]">
                    QUANTITY
                  </th>
                  <th className="py-2 px-2 sm:px-2 border-b text-left font-light text-[#808080]">
                    SUBTOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-2 px-2 sm:px-4 border-b flex items-center gap-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="w-10 h-10 sm:w-7 sm:h-7"
                      />
                      <span className="truncate">{item.name}</span>
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="p-1 border rounded hover:bg-gray-200"
                        >
                          <CiCircleMinus />
                        </button>
                        <span className="w-6 sm:w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="p-1 border rounded hover:bg-gray-200"
                        >
                          <CiCirclePlus />
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b">
                      ${calculateSubtotal(item).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-between flex-wrap gap-2">
              <button className="bg-[#F2F2F2] text-[#4D4D4D] px-4 py-2 rounded hover:bg-[#ebe8e8]">
                Return to Shop
              </button>
              <button className="bg-[#F2F2F2] text-[#4D4D4D] px-4 py-2 rounded hover:bg-[#ebe8e8]">
                Update Cart
              </button>
            </div>
            <div className="max-w-3xl h-auto border border-gray-300 rounded-lg mt-4 flex items-center gap-4 flex-wrap p-4">
              <h1 className="font-poppins text-[#1A1A1A]">Coupon Code</h1>
              <div className="flex border rounded-full overflow-hidden w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex w-full sm:w-[231px] h-[52px] outline-none font-poppins py-2 px-4"
                />
                <button className="bg-[#333333] text-xs font-semibold text-white w-full sm:w-[196px] h-[52px] px-4 py-2 rounded-full hover:bg-[#131212]">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[324px] h-auto lg:h-[296px] border border-gray-300 rounded-lg p-4">
            <h2 className="text-md font-normal mb-4">Cart Total</h2>
            <div className="space-y-2 text-xs">
              <div className="justify-between flex p-2">
                <p>Subtotal:</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <div className="border-y-2 justify-between flex p-2">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="justify-between flex p-2">
                <p className="font-normal">Total:</p>
                <p className="font-semibold">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
            <button className="bg-[#00B207] text-white w-full lg:w-[276px] px-4 py-2 my-5 mx-3 rounded-full hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
