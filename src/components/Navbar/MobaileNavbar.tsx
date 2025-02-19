"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const MobaileNavbar = () => {
  const [langues, setLangues] = useState(false);
  // const [languesChange, setLanguesChange] = useState('');
  const [usd, setUsd] = useState(false);
  const [open, setOpent] = useState(false);
  return (
    <>
  <div className="">
      <div className="flex items-center gap-8">
        {/* eng, usd  */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center relative text-[12px]"
            onClick={() => setLangues((prev) => !prev)}
          >
            Eng <IoIosArrowDown className="w-3" />
          </Link>
          <Link
            href="/"
            className="flex items-center text-[12px] relative"
            onClick={() => setUsd((prev) => !prev)}
          >
            USD <IoIosArrowDown className="w-3" />
          </Link>
          {langues && (
            <div className=" rounded-sm text-sm p-1 absolute top-11 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 text-white bg-black">
              <p>Eng</p>
              <p>Bng</p>
              {/* <form action="" onSubmit={handleLanguesChange} className="flex flex-col gap-y-1">
                    <select name="language" id="language">
                        <option value="English">Eng</option>
                        <option value="Bangla">Bng</option>
                    </select>
                    </form> */}
            </div>
          )}
          {/* USD */}
          {usd && (
            <div className=" rounded-sm text-sm p-1 absolute top-11 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white bg-black z-20">
              <p>USD</p>
              <p>BDT</p>
              {/* <form action="" onSubmit={handleLanguesChange} className="flex flex-col gap-y-1">
                    <select name="language" id="language">
                        <option value="English">Eng</option>
                        <option value="Bangla">Bng</option>
                    </select>
                    </form> */}
            </div>
          )}
        </div>
        {/* icon  */}
        <IoMdMenu
          className="text-[30px]"
          onClick={() => setOpent((prev) => !prev)}
        />
        {/* menu  */}
      </div>
      {open && (
        <div className="absolute p-3 md:px-[140px] bg-gradient-to-br from-black to-transparent w-full top-8 left-0 text-white h-screen flex justify-center ">
          {/* location
          <div className="w-1/3 flex items-center">
            <Image src="/icons/location.png" alt="" width={15} height={18} />
            <span className=" font-poppins text-[12px] ml-1">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div> */}
         <div className="">
           {/* menu  */}
           <div className="flex flex-col items-center justify-center gap-4 font-poppins text-white">
            <Link href="/" className="text-[16px] flex items-center hover:font-bold hover:text-[#00B207]">
              Home <IoIosArrowDown className="w-3" />
            </Link>
            <Link href="/" className="text-[16px] flex items-center hover:font-bold hover:text-[#00B207]">
              Shop <IoIosArrowDown className="w-3" />
            </Link>
            <Link href="/" className="text-[16px] flex items-center hover:font-bold hover:text-[#00B207]">
              Pages <IoIosArrowDown className="w-3" />
            </Link>
            <Link href="/" className="text-[16px] flex items-center hover:font-bold hover:text-[#00B207]">
              Blog <IoIosArrowDown className="w-3" />
            </Link>
            <Link href="/" className="text-[16px] hover:text-[#00B207] hover:font-bold">About Us</Link>
            <Link href="/" className="text-[16px] hover:text-[#00B207] hover:font-bold">Contact Us</Link>
            <Link href="/innerpage/billinginfo" className="text-[16px] hover:text-[#00B207] hover:font-bold">Cart(2)</Link>
            <Link href="/" className="text-[16px] hover:text-[#00B207] hover:font-bold">(219) 555-0114</Link>
          </div>
          {/* singin login */}
          <div className="flex gap-1 mt-3">
            <Link href="/singin" className="">
              Sing in
            </Link>
            <span>/</span>
            <Link href="/login" className="">
              Login
            </Link>
          </div>
         </div>
        </div>
      )}
    </div>
    </>
  );
};

export default MobaileNavbar;




