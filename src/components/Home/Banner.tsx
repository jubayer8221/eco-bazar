import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="pl-3 pr-3 mt-16 md:mt-16 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[100px] xl:pr-[100px] xl:h-[500px] font-poppins flex flex-col md:flex-col xl:flex-row justify-between bg-white gap-4 xl:mt-56">
      {/* Left Main Banner */}
      <div className="py-8  px-8 w-full h-full md:w-full xl:w-full md:h-[300px] xl:h-full relative rounded-md bg-gradient-to-r from-green-900 to-green-500 flex items-center overflow-hidden">
        <div className="text-white pr-10 sm:pr-12">
          <h1 className="font-semibold text-[25px] sm:text[35px] md:text-[25px] xl:text-[48px] leading-[38px] md:leading-[25px] xl:leading-[57px]">
            Fresh & Healthy Organic Food
          </h1>
          <div className="border-l-[2px] border-[#84D187] px-2">
            <p className="mt-4 text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] xl:text[30px]">
              Sale up to{" "}
              <span className="bg-yellow-400 text-[16px] md:text-[18px] xl:text-[18px] leading-7 font-semibold text-black px-2 py-1 rounded">
                30% OFF
              </span>
            </p>
            <p className="mt-2 text-[10px] md:text-[12px] leading-[14px]">
              Free shipping on all your orders.
            </p>
          </div>

          <Link href="/innerpage/shop">
          <button className="mt-4 text-[14px] xl:text-[16px] leading-5 font-semibold bg-white text-green-700 px-4 py-2 xl:px-6 xl:py-3 rounded-full hover:bg-gray-900 hover:border hover:border-white hover:text-white cursor-pointer">
            Shop now →
          </button>
          </Link>
        </div>
        <div className="absolute bottom-0 right-[-18%] md:right-[-8%] xl:right-[-15%]">
          <Image
            src="/images/bimage.png"
            alt="Organic Food"
            width={350}
            height={350}
            className="w-[250px] sm:w-[250px] md:w-[320px] xl:w-[480px] h-auto"
          />
        </div>
      </div>

      {/* Right Small Banners */}
      <div className="w-full md:w-full xl:w-1/3 xl:h-full flex flex-col md:flex-row xl:flex-col gap-4">
        {/* First Small Banner */}
        <div className="relative xl:w-full md:w-1/2 xl:h-1/2">
          <Image
            src="/images/banner3.png"
            alt="Summer Sale"
            width={423}
            height={200}
            className="w-full h-[200px] md:h-[238px] xl:h-full object-cover rounded-md"
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
        <div className="relative md:w-1/2 xl:w-full xl:h-1/2 flex items-center justify-center text-center">
          <Image
            src="/images/banner2.png"
            alt="Best Deal"
            width={423}
            height={200}
            className="w-full h-[200px] md:h-[238px] xl:h-full object-cover rounded-md"
          />
          <div className="absolute text-white p-2">
            <p className="text-[12px] md:text-[14px] xl:text-[12px] font-medium">BEST DEAL</p>
            <h2 className="text-[20px] md:text-[28px] xl:text-[25px] font-semibold">
              Special Products Deal of the Month
            </h2>
            <Link href="/innerpage/hotDeals">
            <button className="text-[14px] md:text-[16px] mt-2 font-medium text-[#00B207]">
              Shop now →
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
