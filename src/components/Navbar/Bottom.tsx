import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";

const Bottom = () => {
  return (
    <div className="pt-4 pb-4 pl-[300px] pr-[300px] bg-black flex items-center justify-between">
      <div className="flex items-center text-[#999999] text-[14px] leading-[21px] gap-[32px]">
        <Link href="/" className="flex items-center hover:text-white">
          Home <IoIosArrowDown className="w-3" />
        </Link>

        <Link href="/popularproducts" className="flex items-center">
          Shop <IoIosArrowDown className="w-3" />
        </Link>
        <Link href="/" className="flex items-center">
          Pages <IoIosArrowDown className="w-3" />
        </Link>
        <Link href="/" className="flex items-center">
          Blog <IoIosArrowDown className="w-3" />
        </Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
      </div>
      {/* phone */}
      <div className="flex items-center gap-2">
        <BiPhoneCall className="w-5 h-5 text-white" />
        <p className=" text-white text-[14px] leading-[21px] font-medium font-poppins">
          (219) 555-0114
        </p>
      </div>
    </div>
  );
};

export default Bottom;
