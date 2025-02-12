import React, { useState } from "react";
import Image from "next/image";

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState("Descriptions");

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
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-green-500 text-green-500"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Main Content */}
        <div className="flex justify-between gap-6 mt-6 max-w-6xl">
          {/* Left Section (50% width) */}
          <div className="w-1/2">
            {activeTab === "Descriptions" && (
              <div className="mt-8  pt-6">
                <h2 className="text-2xl font-bold">Description</h2>
                <p className="mt-4 text-gray-600 text-justify">
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
              <p className="text-gray-700">
                Here is some additional information about the product. It's
                fresh, organic, and delivered right to your doorstep.
              </p>
            )}
            {activeTab === "Customer Feedback" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Great product!", "Loved it!", "Highly recommended!"].map(
                  (feedback, index) => (
                    <div key={index} className="p-4 shadow-md">
                      <p className="text-gray-800">{feedback}</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Right Section (50% width) */}
          <div className="w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/delivery_man.png"
                alt="Delivery"
                width={500}
                height={300}
                className="rounded-lg max-w-full"
              />
            </div>
            <div className="flex bg-gray-100 space-x-6 mt-6 shadow-md border m-2 h-24">
              <div className="p-4 rounded-lg w-60 h-12">
                <h3 className="font-normal">💰 64% Discount</h3>
                <p className="text-sm text-gray-600">
                  Save 64% on your purchase.
                </p>
              </div>
              <div className="p-4 rounded-lg w-60 h-12">
                <h3 className="font-normal">🌱 100% Organic</h3>
                <p className="text-sm text-gray-600">
                  Guaranteed fresh and organic vegetables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
