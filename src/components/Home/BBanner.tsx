import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import Image from "next/image";

const BBanner = () => {
  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[100px] xl:pr-[100px] font-poppins gap-4 mt-5">
      <div className="bg-white drop-shadow-[0_4px_6px_rgba(0,38,3,0.08)] p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-2">
        {/* free shipping  */}
        <div className="flex items-center gap-3">
          <LiaShippingFastSolid className="text-[#00B207] w-10 h-7" />
          <div>
            <h5 className="font-semibold text-[14px] leading-[20px] text-[#1A1A1A]">
              Free Shipping
            </h5>
            <p className="text-[14px] text-[#999999] leading-5 font-normal">
              Free shipping on all your order
            </p>
          </div>
        </div>
        {/* customer support  */}
        <div className="flex items-center gap-3">
          <BiSupport className="text-[#00B207] w-10 h-7" />
          <div>
            <h5 className="font-semibold text-[14px] leading-[20px] text-[#1A1A1A]">
              Customer Support 24/7
            </h5>
            <p className="text-[14px] text-[#999999] leading-5 font-normal">
              Instant access to Support
            </p>
          </div>
        </div>
        {/* secure payment  */}
        <div className="flex items-center gap-3">
          <RiSecurePaymentFill className="text-[#00B207] w-10 h-7" />
          <div>
            <h5 className="font-semibold text-[14px] leading-[20px] text-[#1A1A1A]">
              100% Secure Payment
            </h5>
            <p className="text-[14px] text-[#999999] leading-5 font-normal">
              We ensure your money is save
            </p>
          </div>
        </div>
        {/* many back  */}
        <div className="flex items-center gap-3">
          <Image src="/icons/monyback.svg" alt="" width={36} height={40} />
          <div>
            <h5 className="font-semibold text-[14px] leading-[20px] text-[#1A1A1A]">
              Money-Back Guarantee
            </h5>
            <p className="text-[14px] text-[#999999] leading-5 font-normal">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBanner;
