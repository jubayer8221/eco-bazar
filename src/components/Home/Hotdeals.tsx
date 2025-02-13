"use client";

import React, { useState } from "react";
import HotdealsCart from "./HotdealsCart";

const hotDealsProduct = [
  {
    id: 1,
    name: "Chinese cabbage",
    price: "$12.00",
    oldPrice: "$24.00",
    image: "/images/hot1.png",
    sale: "50%",
    bestSale: true,
    rating: 5,
    reviews: 524,
    featured: true,
  },
  {
    id: 2,
    name: "Chinese cabbage",
    price: "$12.00",
    image: "/images/hot2.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: "$9.00",
    image: "/images/hot3.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Eggplant",
    price: "$34.00",
    image: "/images/hot4.png",
    rating: 4,
    sale: "40%",
  },
  {
    id: 5,
    name: "Fresh Cauliflower",
    price: "$12.00",
    image: "/images/hot5.png",

    rating: 4,
  },
  {
    id: 6,
    name: "Green Capsicum",
    price: "$9.00",
    oldPrice: "$20.99",
    sale: "50%",
    image: "/images/hot6.png",
    rating: 4,
  },
  {
    id: 7,
    name: "Green Chili",
    price: "$34.00",
    image: "/images/hot7.png",
    rating: 3,
    sale: "40%",
  },
  {
    id: 8,
    name: "Big Potatoes",
    price: "$12.00",
    image: "/images/hot8.png",
    rating: 2,
  },
  {
    id: 9,
    name: "Corn",
    price: "$12.00",
    image: "/images/hot9.png",
    rating: 5,
    reviews: 524,
    sale: "40%",
  },
  {
    id: 10,
    name: "Red Chili",
    price: "$12.00",
    image: "/images/hot1.png",
    rating: 4,
  },
  {
    id: 11,
    name: "Red Tomatoes",
    price: "$9.00",
    oldPrice: "$20.99",
    sale: "50%",
    image: "/images/hot5.png",
    rating: 5,
  },
  {
    id: 12,
    name: "Surjipur Mango",
    price: "$34.00",
    reviews: 524,
    image: "/images/hot6.png",
    rating: 4,
  },
];

const Hotdeals = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 mt-14 bg-[#F7F7F7] font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Hot Deals
        </h2>
        <button className="text-[#00B207] text-[16px] leading-6 font-medium">
          View all →
        </button>
      </div>
      {/* hot list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
        {hotDealsProduct.map((product) => (
          <HotdealsCart
            key={product.id}
            img={product.image}
            title={product.name}
            price={product.price}
            rating={product.rating}
            sale={product.sale ?? ""}
            oldPrice={product.oldPrice ?? ""}
            bestSale={product.bestSale ?? "false"}
            reviews={product.reviews ?? 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Hotdeals;
