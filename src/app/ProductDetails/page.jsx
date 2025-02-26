"use client";

import { useState } from "react";
import Image from "next/image";
import ProductDescription from "./productDetailsCards/page";
import AddToCartButton from "./productDetailsCards/AddToCartButton";
import RelatedProducts from "./productDetailsCards/RelatedProducts";
import { FaHeart } from "react-icons/fa";

const product = [
  {
    id: 1,
    name: "Chinese Cabbage",
    image: "/cabbage.png",
    stockStatus: "In Stock",
    reviews: 4,
    sku: "2,51,594",
    originalPrice: 48.0,
    discountedPrice: 17.28,
    discount: 64,
    description:
      "Fresh and organic Chinese cabbage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sapiente optio harum sint repellat accusamus libero? Quas corporis laborum quasi?",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const productData = product[0]; // Access the first product from the local array

  return (
    <div className="mt-16 xl:mt-48 min-h-screen flex flex-col justify-between p-6 mx-auto font-poppins items-center md:px-[300px] pb-[40px] shadow-md my-5">
      <div className="flex-1 w-full">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              src={productData.image}
              alt={productData.name}
              width={500}
              height={500}
              className="rounded-lg w-full"
            />
          </div>

          {/* Details Section */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-4xl font-bold">{productData.name}</h1>
              <p className="text-green-600 font-normal bg-[#20B52633] rounded w-20 h-6 text-center mt-2 md:mt-0">
                {productData.stockStatus}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
              <div className="flex items-center my-2 py-2">
                ⭐⭐⭐⭐
                <span className="ml-2 text-gray-600">
                  {productData.reviews} Reviews
                </span>
              </div>
              <div className="item-center my-2 py-2">
                <p className=" font-semibold">
                  SKU <span className="font-light">{productData.sku}</span>
                </p>
              </div>
            </div>

            <div className="text-xl font-semibold mt-2">
              <span className="line-through text-gray-500">
                ${productData.originalPrice}
              </span>
              <span className="text-red-500 ml-2">
                ${productData.discountedPrice}
              </span>
              <span className="bg-red-100 rounded font-normal text-red-600 ml-2 text-sm">
                {productData.discount}% Off
              </span>
            </div>

            <div>
              <p>{productData.description}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-4 text-center items-center">
              <div className="flex w-full md:w-32 h-12 items-center space-x-4 shadow-sm">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="w-12 h-12 px-3 py-1 bg-gray-200 rounded"
                  type="button"
                >
                  -
                </button>
                <span className="w-10 h-6 py-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 px-3 py-1 bg-gray-200 rounded"
                  type="button"
                >
                  +
                </button>
              </div>
              <AddToCartButton
                product={productData}
                quantity={quantity}
                className="w-full md:w-96 m-2 mt-4 flex items-center justify-center bg-green-600 text-white text-center px-6 py-2 rounded-md"
              />
              <button
                className="m-2 mb-1 ml-4 p-2 border rounded-full items-center"
                type="button"
              >
                <FaHeart />
              </button>
            </div>
            <ul className="my-5">
              <li className="font-bold">
                Category:{" "}
                <span className="font-light">{productData.category}</span>
              </li>
              <li className="font-bold">
                Tags:{" "}
                <span className="font-light px-1">
                  {productData.tags.join(", ")}
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
