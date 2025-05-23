"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  updateQuantity,
  clearCart,
  removeFromCart,
} from "@/store/slices/cartSlice";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-auto mt-16 xl:mt-48 pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:px-[100px] font-poppins">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          My Shopping Cart
        </h1>

        <div className="flex flex-col justify-between lg:flex-row gap-5">
          <div className="w-full border border-gray-300 shadow-md rounded-lg p-4">
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
                  <th className="py-2 px-2 sm:px-2 border-b text-left font-light text-[#808080]">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
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
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td>
                      {/* Remove from Cart Button */}
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500 text-[10px] sm:text-xs md:text-lg"
                      >
                        <RxCross2 className="text-gray-500 hover:text-red-500 text-[10px] sm:text-xs md:text-lg cursor-pointer lg:ml-8" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-between flex-wrap gap-2">
              <Link href="/">
                <button className="bg-[#F2F2F2] text-[#4D4D4D] px-4 py-2 rounded hover:bg-[#ebe8e8]">
                  Return to Shop
                </button>
              </Link>
              <button
                onClick={() => handleClearCart()}
                className="bg-[#F2F2F2] text-[#4D4D4D] px-4 py-2 rounded hover:bg-[#ebe8e8] transition active:scale-95 duration-150 ease-in-out"
              >
                Clear Cart
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

          <div className="w-full h-auto lg:h-[296px] border border-gray-300 rounded-lg p-4">
            <h2 className="text-md font-semibold mb-4 text-center">
              Cart Total
            </h2>
            <div className="space-y-2 text-xs">
              <div className="justify-between flex p-2">
                <p>Subtotal:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="border-y-2 justify-between flex p-2">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="justify-between flex p-2">
                <p className="font-normal">Total:</p>
                <p className="font-semibold">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <Link href="/innerpage/billinginfo">
              <button className="bg-[#00B207] text-white w-full lg:w-[276px] px-4 py-2 my-5 mx-3 rounded-full hover:bg-green-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
