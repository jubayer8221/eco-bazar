"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReviewPage from "./review/page";

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState("Descriptions");
  const [isTabVisible, setIsTabVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsTabVisible(false);
  };

  return (
    <div>
      {/* Description Section */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Tab Navigation */}
        <div className="flex border-b">
          {["Descriptions", "Additional Information", "Customer Feedback"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-green-500 text-green-500"
                    : "text-gray-500"
                } ${isTabVisible ? "block" : "hidden"} sm:block`}
              >
                {tab}
              </button>
            )
          )}
          <button
            onClick={() => setIsTabVisible(!isTabVisible)}
            className="sm:hidden px-6 py-2 text-gray-500"
          >
            {activeTab}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6 max-w-6xl">
          {/* Left Section */}
          <div className="w-full sm:w-1/2">
            {activeTab === "Descriptions" && (
              <div>
                <p className="text-gray-600 text-justify">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit. <br /> <br /> Nulla
                  mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
                  iaculis, metus faucibus elementum tincidunt, turpis mi viverra
                  velit, pellentesque tristique neque mi eget nulla. Proin
                  luctus elementum neque et pharetra.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>✔️ 100g of fresh leaves provided.</li>
                  <li>✔️ Great for soups, salads, and stir-fries.</li>
                  <li>✔️ Nutritious and delicious.</li>
                </ul>
              </div>
            )}
            {activeTab === "Additional Information" && (
              <div className="text-gray-600">
                <p>
                  <span className="font-normal text-black">Weight: </span>03
                </p>
                <p>
                  <span className="font-normal text-black">Color: </span>Green
                </p>
                <p>
                  <span className="font-normal text-black">Type:</span> Organic
                </p>
                <p>
                  <span className="font-normal text-black">Category:</span>{" "}
                  Vegetables
                </p>
                <p>
                  <span className="font-normal text-black">Stock Status:</span>{" "}
                  Available <span className="text-gray-400">(5,413)</span>
                </p>
                <p>
                  <span className="font-normal text-black">Tags:</span>
                  <span className="ml-2 space-x-2">
                    <Link href="#" className="text-black hover:underline">
                      Vegetables
                    </Link>
                    ,
                    <Link href="#" className="text-black hover:underline">
                      Healthy
                    </Link>
                    ,
                    <Link href="#" className="text-black underline">
                      Chinese Cabbage
                    </Link>
                    ,
                    <Link href="#" className="text-black hover:underline">
                      Green Cabbage
                    </Link>
                  </span>
                </p>
              </div>
            )}
            {activeTab === "Customer Feedback" && (
              <div className="w-auto md:grid-cols-2 gap-4">
                <ReviewPage className="p-4 shadow-md border hover:border-green-600" />
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/delivery_man.png"
                alt="Delivery"
                width={500}
                height={300}
                className="rounded-lg max-w-full"
              />
            </div>

            {/* Discount and Organic Small Banner */}
            <div className="flex bg-gray-100 space-x-6 mt-6 shadow-md border m-2 h-24">
              {/* Discount Banner */}
              <div className="p-4 mt-5 flex items-center rounded-lg w-60 h-12">
                <Image
                  src="/image/discount.png"
                  alt="Discount"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="ml-2">
                  <h3 className="font-normal">64% Discount</h3>
                  <p className="text-sm text-gray-600">
                    Save 64% on your purchase.
                  </p>
                </div>
              </div>

              {/* Organic Banner */}
              <div className="p-4 mt-5 flex items-center rounded-lg w-60 h-12">
                <Image
                  src="/image/organic.png"
                  alt="Organic"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="ml-2">
                  <h3 className="font-normal">100% Organic</h3>
                  <p className="text-sm text-gray-600">
                    Guaranteed fresh and organic vegetables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
