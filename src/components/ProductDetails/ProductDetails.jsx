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
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1 or your desired default
  const [activeTab, setActiveTab] = useState("Descriptions"); // Add state for activeTab

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
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
          <h1 className="text-3xl font-bold">Chinese Cabbage</h1>
          <p className="text-green-600 font-medium">In Stock</p>
          <div className="flex items-center mt-2 text-orange-500">
            ⭐⭐⭐⭐
            <span className="ml-2 text-gray-600">4 Reviews</span>
          </div>
          <div className="text-xl font-semibold mt-2">
            <span className="line-through text-gray-500">$48.00</span>
            <span className="text-red-500 ml-2">$17.28</span>
            <span className="text-sm text-red-600 ml-2">(64% Off)</span>
          </div>
          <p className="mt-4 text-gray-600">
            A fresh and healthy choice for your meals.
          </p>

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
