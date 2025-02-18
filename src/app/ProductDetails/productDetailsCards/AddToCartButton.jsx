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
    <div>
      <button
        className="w-96 h-12 m-2 mt-4 flex items-center justify-center bg-green-600 text-white text-center px-6 py-2 rounded-md"
        onClick={handleButtonClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md items-center text-center shadow-lg">
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
