"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./PopularProductCard/PopularProductCard";
import PopularProductOffer from "./PopularProductCard/PopularProductOffer";

const categoriesData = [
  {
    id: 1,
    price: "$20",
    name: "Green Apple",
    image: "/image/apple.png",
  },
  {
    id: 2,
    price: "$25",
    name: "Fresh Indian Malta",
    image: "/image/malta.png",
  },
  { id: 3, price: "$15", name: "Chinese cabage", image: "/image/cabbage.png" },
  { id: 4, price: "$18", name: "Green Lettuce", image: "/image/lettuce.png" },
  { id: 5, price: "$22", name: "Eggplant", image: "/image/eggplant.png" },
  { id: 6, price: "$30", name: "Big Potatoes", image: "/image/potatoes.png" },
  { id: 7, price: "$12", name: "Corn", image: "/image/corn.png" },
  {
    id: 8,
    price: "$28",
    name: "Fresh Cauliflower",
    image: "/image/cauliflower.png",
  },
  { id: 9, price: "$20", name: "Green Capsicum", image: "/image/capsicum.png" },
  { id: 10, price: "$10", name: "Green Chili", image: "/image/chili.png" },
  {
    id: 11,
    price: "$35",
    name: "Dish Detergents",
    image: "/image/lettuce.png",
  },
  { id: 12, price: "$50", name: "Oil", image: "/image/cabbage.png" },
  { id: 13, price: "$22", name: "Eggplant", image: "/image/eggplant.png" },
  { id: 14, price: "$40", name: "Dairy Products", image: "/image/corn.png" },
  { id: 15, price: "$60", name: "Frozen Items", image: "/image/chili.png" },
];

export default function PopularProductCard() {
  const [categories, setCategories] = useState(categoriesData);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    } else {
      localStorage.setItem("categories", JSON.stringify(categoriesData));
    }
  }, []);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] font-poppins">
      <div className="mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A] my-8">
              Popular Products
            </h2>
          </div>
          <div>
            {categoriesData.length > 10 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#00B207] text-[16px] leading-6 font-medium md:text-xm sm:text-xs my-8"
              >
                {showAll ? "Show Less ←" : "View All →"}
              </button>
            )}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {(showAll ? categoriesData : categoriesData.slice(0, 10)).map(
            (category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                price={category.price}
                className="sm:h-20"
              />
            )
          )}
        </div>
      </div>
      <PopularProductOffer />
    </div>
  );
}
