"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";

const LatestNewsCart = () => {
  const [isHover, setIsHover] = useState([false, false]);

  const handleMouseEnter = (index: number) =>{
    const updateState = [...isHover];
    updateState[index] = true;
    setIsHover(updateState);
  }
  const handleMouseLeave = (index: number) =>{
    const updateState = [...isHover];
    updateState[index] = false;
    setIsHover(updateState);
  }

  return (
    <>
      <div className="flex gap-x-5 cursor-pointer">
        {/* cart  */}
        <div
          className="w-[290px] border border-[#E6E6E6] rounded-[8px]"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          {/* image */}
          <div className="">
            <Image src="/images/news1.png" width={424} height={325} alt="" />
          </div>
          {/* info */}
          <div className="p-2">
            {/* food, by admin, cooments */}
            <div className="flex items-center gap-2">
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
            {isHover[0] ? (
              <h3 className="mt-2 text-[18px] text-[#2C742F] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            ) : (
              <h3 className="mt-2 text-[18px] text-[#1A1A1A] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            )}
            <button className="text-[16px] text-[#00B207] font-semibold leading-5 mt-2">
              Read More →
            </button>
          </div>
        </div>
        <div
          className="w-[290px] border border-[#E6E6E6] rounded-[8px]"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          {/* image */}
          <div className="">
            <Image src="/images/news1.png" width={424} height={325} alt="" />
          </div>
          {/* info */}
          <div className="p-2">
            {/* food, by admin, cooments */}
            <div className="flex items-center gap-2">
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
            {isHover[1] ? (
              <h3 className="mt-2 text-[18px] text-[#2C742F] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            ) : (
              <h3 className="mt-2 text-[18px] text-[#1A1A1A] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            )}
            <button className="text-[16px] text-[#00B207] font-semibold leading-5 mt-2">
              Read More →
            </button>
          </div>
        </div>
        <div
          className="w-[290px] border border-[#E6E6E6] rounded-[8px]"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          {/* image */}
          <div className="">
            <Image src="/images/news1.png" width={424} height={325} alt="" />
          </div>
          {/* info */}
          <div className="p-2">
            {/* food, by admin, cooments */}
            <div className="flex items-center gap-2">
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
            {isHover[2] ? (
              <h3 className="mt-2 text-[18px] text-[#2C742F] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            ) : (
              <h3 className="mt-2 text-[18px] text-[#1A1A1A] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            )}
            <button className="text-[16px] text-[#00B207] font-semibold leading-5 mt-2">
              Read More →
            </button>
          </div>
        </div>
        <div
          className="w-[290px] border border-[#E6E6E6] rounded-[8px]"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          {/* image */}
          <div className="">
            <Image src="/images/news1.png" width={424} height={325} alt="" />
          </div>
          {/* info */}
          <div className="p-2">
            {/* food, by admin, cooments */}
            <div className="flex items-center gap-2">
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
            {isHover[3] ? (
              <h3 className="mt-2 text-[18px] text-[#2C742F] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            ) : (
              <h3 className="mt-2 text-[18px] text-[#1A1A1A] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            )}
            <button className="text-[16px] text-[#00B207] font-semibold leading-5 mt-2">
              Read More →
            </button>
          </div>
        </div>
        <div
          className="w-[290px] border border-[#E6E6E6] rounded-[8px]"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          {/* image */}
          <div className="">
            <Image src="/images/news1.png" width={424} height={325} alt="" />
          </div>
          {/* info */}
          <div className="p-2">
            {/* food, by admin, cooments */}
            <div className="flex items-center gap-2">
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
            {isHover[4] ? (
              <h3 className="mt-2 text-[18px] text-[#2C742F] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            ) : (
              <h3 className="mt-2 text-[18px] text-[#1A1A1A] font-medium leading-[25px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </h3>
            )}
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
