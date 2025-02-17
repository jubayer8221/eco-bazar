"use client";
import React from "react";

const PopularCard = ({ name, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg hover:border-green-600 hover:text-green-600 transition-all">
      <img
        src={image}
        alt={name}
        className="w-full h-24 object-contain mx-auto"
      />
      <p className="mt-1 font-semibold">{name}</p>
    </div>
  );
};

export default React.memo(PopularCard);
