"use client";

import { useState } from "react";
import Image from "next/image";
import ProductDescription from "./productDetailsCards/page";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import AddToCartButton from "./productDetailsCards/AddToCartButton";
import RelatedProducts from "./productDetailsCards/RelatedProducts";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Descriptions");

  return (
    <div className="mt-16 xl:mt-48 min-h-screen flex flex-col justify-between p-6 mx-auto font-poppins items-center md:px-[300px] pb-[40px] shadow-md my-5">
      <div className="flex-1 w-full">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              src="/cabbage.png"
              alt="Chinese Cabbage"
              width={500}
              height={500}
              className="rounded-lg w-full"
            />
          </div>

          {/* Details Section */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-4xl font-bold">Chinese Cabbage</h1>
              <p className="text-green-600 font-normal bg-[#20B52633] rounded w-20 h-6 text-center mt-2 md:mt-0">
                In Stock
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
              <div className="flex items-center my-2 py-2">
                ⭐⭐⭐⭐
                <span className="ml-2 text-gray-600">4 Reviews</span>
              </div>
              <div className="item-center my-2 py-2">
                <p className=" font-semibold">
                  SKU <span className="font-light">2,51,594</span>
                </p>
              </div>
            </div>

            <div className="text-xl font-semibold mt-2">
              <span className="line-through text-gray-500">$48.00</span>
              <span className="text-red-500 ml-2">$17.28</span>
              <span className="bg-red-100 rounded font-normal text-red-600 ml-2 text-sm">
                64% Off
              </span>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between py-5">
                <div className="flex gap-3 items-center">
                  <h1 className="center">Brand</h1>
                  <img src="/image/brand.png" alt="" />
                </div>
                <div className="flex gap-4 items-center mt-4 md:mt-0">
                  <h1>Share item</h1>
                  <FaFacebookF className=" border rounded-full text-white border-green-600 w-9 h-9 p-2  bg-[#00B207]" />
                  <FaTwitter className=" w-9 h-9 p-2" />
                  <FaPinterest className=" w-9 h-9 p-2" />
                  <FaInstagram className=" w-9 h-9 p-2" />
                </div>
              </div>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-4">
              <div className="flex w-full md:w-32 h-12 items-center space-x-4 shadow-sm">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="w-12 h-12 px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="w-10 h-6 py-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <AddToCartButton>
                <button className="w-full md:w-96 m-2 mt-4 flex items-center justify-center bg-green-600 text-white text-center px-6 py-2 rounded-md">
                  Add to Cart
                </button>
              </AddToCartButton>

              <button className=" mt-4 ml-4 p-2 border rounded-full">❤</button>
            </div>
            <ul className=" my-5">
              <li className=" font-bold">
                Category: <span className="font-light">Vegetables</span>
              </li>
              <li className=" font-bold">
                Tag:
                <span className=" font-light px-1">
                  Vegetables Healthy{" "}
                  <span className="font-normal">Chinese</span> Cabbage Green
                  Cabbage
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ProductDescription />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
