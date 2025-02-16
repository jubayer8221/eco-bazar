"use client";

import { useState } from "react";
import Image from "next/image";
import ProductDescription from "@/components/ProductDetails/ProductDiscription";
import styles from "@/styles/productDetails.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import AddToCartButton from "./AddToCartButton";
import RelatedProducts from "@/components/ProductDetails/RelatedProducts";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1 or desired default
  const [activeTab, setActiveTab] = useState("Descriptions"); // Add state for activeTab

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Image
            src="/cabbage.png"
            alt="Chinese Cabbage"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <div className="flex">
            <h1 className="text-5xl font-bold">Chinese Cabbage</h1>
            <p className="text-green-600 font-normal bg-[#20B52633] rounded w-20 h-6 text-center">
              In Stock
            </p>
          </div>
          <div className="flex items-center gap-10 ">
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
            <div className="flex justify-between py-5">
              <div className="flex gap-3 items-center">
                <h1 className="center">Brand</h1>
                <img src="/image/brand.png" alt="" />
              </div>
              <div className="flex gap-4 items-center">
                <h1>Share item</h1>
                <FaFacebookF
                  className=" border rounded-full text-white border-green-600 w-9 h-9 p-2  bg-[#00B207]
]"
                />
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

          <div className="flex justify-between">
            <div className="flex w-32 h-12 items-center space-x-4 mt-4 shadow-sm">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="w-32 h-12 px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="w-10 h-6 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-32 h-12 px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <AddToCartButton>
              <button className="w-96 m-2 mt-4 flex items-center center bg-green-600 text-white text-center px-6 py-2 rounded-md">
                Add to Cart
              </button>
            </AddToCartButton>

            <button className=" mt-4 ml-4 p-2 border rounded-full">❤</button>
          </div>
          <ul className=" my-5">
            <li className=" font-bold">
              Catagory: <span className="font-light">Vegetables</span>
            </li>
            <li className=" font-bold">
              Tag:
              <span className=" font-light px-1">
                Vegetables Healthy Chinese Cabbage Green Cabbage
              </span>
            </li>
          </ul>
        </div>
      </div>
      <ProductDescription></ProductDescription>
      <div>
        <RelatedProducts></RelatedProducts>
      </div>
    </div>
  );
};

export default ProductPage;
