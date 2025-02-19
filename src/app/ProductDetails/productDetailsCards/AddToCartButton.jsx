"use client";

import { useState } from "react";

function AddToCartButton() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-12 m-2 mt-4 flex items-center justify-center bg-green-600 text-white text-center px-6 py-2 rounded-md"
        onClick={handleButtonClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md items-center text-center shadow-lg w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <p>Succesfully Added to Cart.</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;
