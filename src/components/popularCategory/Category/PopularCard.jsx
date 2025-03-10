"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ name, image, id }) => {
  return (
    <Link href={`/cartdetails/${id}`}>
      <div className="h-44 border rounded-lg shadow-md p-4 text-center hover:shadow-lg hover:border-green-600 hover:text-green-600 transition-all">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-24 object-contain mx-auto"
        />
        <p className="mt-1 font-normal md:text-sm sm:text-xs">{name}</p>
      </div>
    </Link>
  );
};

export default React.memo(PopularCard);
