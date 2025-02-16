import React from "react";
import LatestNewsCart from "./LatestNewsCart";

const LatestNews = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-center">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Latest News
        </h2>
      </div>
      {/* cart  */}
      <div>
        <LatestNewsCart />
      </div>
    </div>
  );
};

export default LatestNews;
