"use client";

import { useState } from "react";

function AddCartBtn() {
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
        className="text-white items-center font-medium py-1 px-3 md:py-2 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm bg-green-500 hover:bg-green-600"
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

export default AddCartBtn;
