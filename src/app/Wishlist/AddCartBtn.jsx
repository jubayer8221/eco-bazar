"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/components/context/CartContext";

function AddCartBtn({ id, image, price }) {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  // Use useEffect to automatically close the popup
  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }

    // Clean up timer when component unmounts or showPopup changes
    return () => {
      clearTimeout(timer);
    };
  }, [showPopup]);

  const handleButtonClick = () => {
    addToCart({ id, image, price });
    setShowPopup(true);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="text-white items-center font-medium py-1 px-3 md:py-2 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm bg-green-500 hover:bg-green-600"
        onClick={handleButtonClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 md:p-6 rounded-md items-center text-center shadow-lg w-11/12 md:w-auto">
            <p className="text-sm md:text-base">Successfully Added to Cart.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCartBtn;
