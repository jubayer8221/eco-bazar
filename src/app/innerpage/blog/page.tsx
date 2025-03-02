import LatestNews from "@/components/Home/LatestNews";
import React from "react";

export default function page() {
  return (
    <div className="bg-white relative overflow-hidden border pt-1 px-2 border-[#F2F2F2] max-w[400px] xl:max-w-[570px] transition-all duration-300">
      <LatestNews></LatestNews>
    </div>
  );
}
