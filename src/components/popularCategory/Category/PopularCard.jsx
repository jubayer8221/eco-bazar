"use client";
import React from "react";
import Image from "next/image";

const PopularCard = ({ name, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg hover:border-green-600 hover:text-green-600 transition-all">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-full h-24 object-contain mx-auto"
      />
      <p className="mt-1 font-normal md:text-sm sm:text-xs">{name}</p>
    </div>
  );
};

export default React.memo(PopularCard);
