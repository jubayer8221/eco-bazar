import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[200px] md:pr-[200px] xl:pl-[300px] xl:pr-[300px] xl:h-[500px] font-poppins flex flex-col md:flex-row justify-between bg-white gap-4 mt-5">
      {/* Left Main Banner */}
      <div className="md:w-2/3 w-full h-full px-8 relative rounded-md bg-gradient-to-r from-green-900 to-green-500 flex items-center overflow-hidden">
        <div className="text-white">
          <h1 className="font-semibold text-[32px] md:text-[48px] leading-[38px] md:leading-[58px]">
            Fresh & Healthy Organic Food
          </h1>
          <div className="border-l-[2px] border-[#84D187] px-2">
            <p className="mt-4 text-[18px] md:text-[20px] leading-[28px] md:leading-[30px]">
              Sale up to{" "}
              <span className="bg-yellow-400 text-[18px] md:text-[20px] leading-7 font-semibold text-black px-2 py-1 rounded">
                30% OFF
              </span>
            </p>
            <p className="mt-2 text-[12px] md:text-[14px] leading-[14px]">
              Free shipping on all your orders.
            </p>
          </div>

          <button className="mt-4 text-[14px] md:text-[16px] leading-5 font-semibold bg-white text-green-700 px-6 py-3 rounded-full hover:bg-gray-900 hover:border hover:border-white hover:text-white cursor-pointer">
            Shop now →
          </button>
        </div>
        <div className="absolute bottom-0 right-[-10%] md:right-[-5%]">
          <Image
            src="/images/bimage.png"
            alt="Organic Food"
            width={350}
            height={350}
            className="w-[250px] md:w-[350px] h-auto"
          />
        </div>
      </div>

      {/* Right Small Banners */}
      <div className="md:w-1/3 w-full flex flex-col gap-4">
        {/* First Small Banner */}
        <div className="relative">
          <Image
            src="/images/banner3.png"
            alt="Summer Sale"
            width={423}
            height={200}
            className="w-full h-[200px] md:h-[238px] object-cover rounded-md"
          />
          <div className="absolute top-6 left-6 text-black">
            <p className="text-[12px] md:text-[14px] font-medium">
              SUMMER SALE
            </p>
            <h3 className="text-[24px] md:text-[32px] font-semibold">
              75% OFF
            </h3>
            <p className="text-[12px] md:text-[14px] mt-1 text-[#666666]">
              Only Fruit & Vegetable
            </p>
            <button className="text-[14px] md:text-[16px] mt-2 font-medium text-[#00B207]">
              Shop now →
            </button>
          </div>
        </div>

        {/* Second Small Banner */}
        <div className="relative">
          <Image
            src="/images/banner2.png"
            alt="Best Deal"
            width={423}
            height={200}
            className="w-full h-[200px] md:h-[238px] object-cover rounded-md"
          />
          <div className="absolute top-6 left-6 text-white">
            <p className="text-[12px] md:text-[14px] font-medium">BEST DEAL</p>
            <h2 className="text-[20px] md:text-[28px] font-semibold">
              Special Products Deal of the Month
            </h2>
            <button className="text-[14px] md:text-[16px] mt-2 font-medium text-[#00B207]">
              Shop now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
