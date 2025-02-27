"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiInstagram } from "react-icons/ci";

const instagramImage = [
  {
    img: "/images/Instagram Post 4.png",
  },
  {
    img: "/images/Instagram Post2.png",
  },
  {
    img: "/images/Instagram Post3.png",
  },
  {
    img: "/images/Instagram Post3.png",
  },
  {
    img: "/images/Instagram Post3.png",
  },
  {
    img: "/images/Instagram Post2.png",
  },
  {
    img: "/images/Instagram Post1.png",
  },
];

const FolowInstagram = () => {
  // State for tracking hover of individual images
  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[140px] md:pr[140px] xl:pl-[300px] xl:pr-[300px] pb-10">
      {/* Follow us on instagram  */}
      <div className="">
        <h2 className="text-[20px] xl:text-[32px] leading-10 font-semibold mb-3 text-center">
          Follow us on Instagram
        </h2>
        <div className="w-full overflow-x-auto scrollbar-hiden">
          <div className="flex items-center justify-between gap-5 w-max">
            {instagramImage.map((image, index) => (
              <div
                className="relative w-[200px] h-[200px]"
                key={index}
                onMouseEnter={() => setIsHoverIndex(index)}
                onMouseLeave={() => setIsHoverIndex(null)}
              >
                <Image src={image.img} alt="" layout="fill" objectFit="cover" />

                {isHoverIndex === index && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent rounded-lg"></div>
                    <CiInstagram className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolowInstagram;
