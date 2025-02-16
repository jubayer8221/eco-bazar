"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";

const LatestNewsCart = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="flex gap-4 md:gap-8">
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/3 border border-[#E6E6E6] rounded-[8px]" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          {/* image */}
          <div className="">
            <Image src="/images/news1.png" width={424} height={325} alt="" />
          </div>
          {/* info */}
          <div className="p-2">
            {/* food, by admin, cooments */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Image src="/icons/Vector.svg" alt="" width={13} height={12} />{" "}
                <h6 className="text-[14px] text-[#666666] leading-5 font-normal">
                  Food
                </h6>
              </div>
              <div className="flex items-center gap-1 text-[#666666]">
                <CiUser className="w-[14px] h-[15px]" />{" "}
                <h6 className="text-[14px] leading-5 font-normal">By Admin</h6>
              </div>
              <div className="flex items-center gap-1 text-[#666666]">
                <VscComment className="w-[13px] h-[12px]" />{" "}
                <h6 className="text-[14px] leading-5 font-normal">
                  65 Comments
                </h6>
              </div>
            </div>
            {
                isHover ? (<h3 className="mt-2 text-[18px] text-[#2C742F] font-medium leading-[25px]">
                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                    fermentum.
                  </h3>) : (
                    <h3 className="mt-2 text-[18px] text-[#1A1A1A] font-medium leading-[25px]">
                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                    fermentum.
                  </h3>
                  )
            }
            <button className="text-[16px] text-[#00B207] font-semibold leading-5 mt-2">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNewsCart;
