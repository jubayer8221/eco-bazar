"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart } from "@/store/slices/cartSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart); // ✅ Get cart data from Redux
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice); // ✅ Get total price from Redux

  return (
    <>
      <div className="pl-3 pr-3 mt-16 md:mt-16 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] xl:h-[500px] font-poppins bg-white flex flex-col justify-between xl:mt-[200px] mb-5">
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[18px] md:text-[20px] leading-7">
              Shopping Cart ({cart.length})
            </h3>
          </div>

          {/* ✅ Show empty cart message */}
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-b-[#E6E6E6] py-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                  <div>
                    <h5 className="text-[14px] leading-5">{item.name}</h5>
                    <p className="text-[14px] font-medium">
                      <span className="text-[#808080]">{item.quantity} x</span>{" "}
                      ${item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="w-[22px] h-[22px] rounded-full border border-[#CCCCCC] flex items-center justify-center"
                >
                  <IoMdClose className="text-[13px]" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* ✅ Bottom Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p>{cart.length} Product(s)</p>
            <div>${totalPrice.toFixed(2)}</div> {/* ✅ Fixed total price */}
          </div>

          {/* ✅ Navigate to Billing Page */}
          <div className="flex items-center justify-between gap-4">
            <Link href="/innerpage/billinginfo">
              <button className="bg-[#00B207] w-full text-[16px] font-semibold rounded-lg py-4 px-10 text-white">
                Checkout
              </button>
            </Link>

            {/* ✅ Navigate to Cart Page */}
            <Link href="/shoppingCart">
              <button className="bg-[#4c5b4c] w-full text-[16px] font-semibold rounded-lg py-4 px-10 border border-[#00B207] text-white">
                Go To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
