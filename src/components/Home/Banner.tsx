import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="pl-[300px] pr-[300px] h-[500px] font-poppins flex justify-between bg-white gap-4 mt-5">
      <div className="w-2/3 h-full px-8 relative rounded-md bg-gradient-to-r from-green-900 to-green-500  flex items-center overflow-hidden ">
        <div className=" text-white">
          <h1 className="font-semibold text-[48px] leading-[58px]">
            Fresh & Healthy Organic Food
          </h1>
          <div className="border-l-[2px] border-[#84D187] px-2">
            <p className="mt-4 text-[20px] leading-[30px]">
              Sale up to{" "}
              <span className="bg-yellow-400 text-[20px] leading-7 font-semibold text-black px-2 py-1 rounded">
                30% OFF
              </span>
            </p>
            <p className="mt-2 text-[14px] leading-[14px]">
              Free shipping on all your orders.
            </p>
          </div>

          <button className="mt-4 text-[16px] leading-5 font-semibold bg-white text-green-700 px-6 py-3 rounded-full hover:bg-gray-900 hover:border hover:border-white hover:text-white cursor-pointer ">
            Shop now →
          </button>
        </div>
        <div className="">
          <Image
            src="/images/bimage.png"
            alt=""
            width={450}
            height={400}
            className="absolute bottom-0 -right-32"
          />
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-[24px]">
        <div className="flex ">
        <div className="">
            <Image
              src="/images/banner3.png"
              alt=""
              width={423}
              height={200}
              className="w-full h-[238px] relative"
            />
          </div>
          <div className="absolute pl-4 pt-7">
            <p className="text-[14px] leading-[14px] tracking-[0.03em] text-[#1A1A1A] font-medium">SUMMER SALE</p>
            <h3 className="text-[32px] leading-[38px] font-semibold">75% OFF</h3>
            <p className="text[14px] mt-1 leading-5 text-[#666666] font-normal">Only Fruit & vegetable</p>
            <button className="text-[16px] mt-4 leading-5 font-medium text-[#00B207]">Shop now →</button>
          </div>
          
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="">
            <Image
              src="/images/banner2.png"
              alt=""
              width={423}
              height={200}
              className="w-full h-[238px] relative"
            />
          </div>
          <div className="absolute p-[300px]">
            <p className="text-white text-[14px] leading-4 tracking-[0.03em] font-medium">BEST DEAL</p>
            <h2 className="text-white text-[28px] leading-9 font-semibold">Special Products Deal of the Month</h2>
            <button className="text-[16px] mt-4 leading-5 font-medium text-[#00B207]">Shop now →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
