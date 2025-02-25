"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReviewPage from "./review/page";
import Link from "next/link";

const productData = {
  id: 1,
  name: "Fresh Organic Cabbage",
  description:
    "Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris.",
  additionalInfo: {
    weight: "03 kg",
    color: "Green",
    type: "Organic",
    category: "Vegetables",
    stockStatus: "Available (5,413)",
    tags: ["Vegetables", "Healthy", "Chinese Cabbage", "Green Cabbage"],
  },
  discount: "64% Discount",
  discountDetails: "Save 64% on your purchase.",
  organic: "100% Organic",
  organicDetails: "Guaranteed fresh and organic vegetables.",
  imageUrl: "/delivery_man.png",
};

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState("Descriptions");
  const tabs = ["Descriptions", "Additional Information", "Customer Feedback"];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex flex-col xl:flex-row justify-between border-b pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 text-lg font-poppins transition-all duration-300 rounded-md ${
              activeTab === tab
                ? "bg-green-500 text-white"
                : "text-gray-600 hover:text-green-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6">
        {/* Left Section */}
        <div className="w-full sm:w-1/2">
          {activeTab === "Descriptions" && (
            <p className="text-gray-600 text-justify">
              {productData.description}
            </p>
          )}
          {activeTab === "Additional Information" && (
            <div className="text-gray-600 space-y-2">
              {Object.entries(productData.additionalInfo).map(
                ([key, value]) => (
                  <p key={key}>
                    <span className="font-bold text-black capitalize">
                      {key}:{" "}
                    </span>
                    {value}
                  </p>
                )
              )}
            </div>
          )}
          {activeTab === "Customer Feedback" && (
            <div className="w-auto">
              <ReviewPage className="p-4 shadow-md border hover:border-green-600" />
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={productData.imageUrl}
              alt={productData.name}
              width={500}
              height={300}
              className="rounded-lg max-w-full"
            />
          </div>

          {/* Discount and Organic Small Banner */}
          <div className="flex flex-col sm:flex-row bg-gray-100 space-y-4 sm:space-x-6 sm:space-y-0 mt-6 shadow-md border p-4 rounded-lg">
            {/* Discount Banner */}
            <div className="flex items-center space-x-4">
              <Image
                src="/image/discount.png"
                alt="Discount"
                width={32}
                height={32}
              />
              <div>
                <h3 className="font-bold">{productData.discount}</h3>
                <p className="text-sm text-gray-600">
                  {productData.discountDetails}
                </p>
              </div>
            </div>

            {/* Organic Banner */}
            <div className="flex items-center space-x-4">
              <Image
                src="/image/organic.png"
                alt="Organic"
                width={32}
                height={32}
              />
              <div>
                <h3 className="font-bold">{productData.organic}</h3>
                <p className="text-sm text-gray-600">
                  {productData.organicDetails}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
