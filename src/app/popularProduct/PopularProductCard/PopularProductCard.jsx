"use client";
import React from "react";

const PopularCard = ({ name, image, price }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-all">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-contain mx-auto"
      />
      <p className="mt-2 font-semibold">{name}</p>
      <p className="mt-2 font-semibold">{price}</p>
    </div>
  );
};

export default React.memo(PopularCard);
