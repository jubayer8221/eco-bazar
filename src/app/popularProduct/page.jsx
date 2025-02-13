"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./PopularProductCard/PopularProductCard";
import Image from "next/image";
import PopularProductOffer from "./PopularProductCard/PopularProductOffer";

const categoriesData = [
  {
    id: 1,
    price: 20,
    name: "Green Apple",
    image: "/image/apple.png",
  },
  {
    id: 2,
    price: 25,
    name: "Fresh Indian Malta",
    image: "/image/malta.png",
  },
  { id: 3, price: 15, name: "Chinese cabage", image: "/image/cabbage.png" },
  { id: 4, price: 18, name: "Green Lettuce", image: "/image/lettuce.png" },
  { id: 5, price: 22, name: "Eggplant", image: "/image/eggplant.png" },
  { id: 6, price: 30, name: "Big Potatoes", image: "/image/potatoes.png" },
  { id: 7, price: 12, name: "Corn", image: "/image/corn.png" },
  {
    id: 8,
    price: 28,
    name: "Fresh Cauliflower",
    image: "/image/cauliflower.png",
  },
  { id: 9, price: 20, name: "Green Capsicum", image: "/image/capsicum.png" },
  { id: 10, price: 10, name: "Green Chili", image: "/image/chili.png" },
  {
    id: 11,
    price: 35,
    name: "Dish Detergents",
    image: "/image/lettuce.png",
  },
  { id: 12, price: 50, name: "Oil", image: "/image/cabbage.png" },
  { id: 5, price: 22, name: "Eggplant", image: "/image/eggplant.png" },
  { id: 13, price: 40, name: "Dairy Products", image: "/image/corn.png" },
  { id: 14, price: 60, name: "Frozen Items", image: "/image/chili.png" },
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
    <div>
      <div className="container p-6 max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between mx-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
          </div>
          <div>
            {categoriesData.length > 10 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#00B207] text-[16px] leading-6 font-medium"
              >
                {showAll ? "Show Less ←" : "View All →"}
              </button>
            )}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-6">
          {(showAll ? categoriesData : categoriesData.slice(0, 10)).map(
            (category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
              />
            )
          )}
        </div>
      </div>
      <PopularProductOffer></PopularProductOffer>
    </div>
  );
}
