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
    image: "/image/popularCards/image_1.png",
  },
  {
    id: 2,
    price: 25,
    name: "Fresh Indian Malta",
    image: "/images/vegetables.png",
  },
  { id: 3, price: 15, name: "Chinese cabage", image: "/images/meat.png" },
  { id: 4, price: 18, name: "Green Lettuce", image: "/images/snacks.png" },
  { id: 5, price: 22, name: "Eggplant", image: "/images/beverages.png" },
  { id: 6, price: 30, name: "Big Potatoes", image: "/images/beauty.png" },
  { id: 7, price: 12, name: "Corn", image: "/images/bakery.png" },
  { id: 8, price: 28, name: "Fresh Cauliflower", image: "/images/baking.png" },
  { id: 9, price: 20, name: "Green Capsicum", image: "/images/cooking.png" },
  { id: 10, price: 10, name: "Green Chili", image: "/images/diabetic.png" },
  {
    id: 11,
    price: 35,
    name: "Dish Detergents",
    image: "/images/detergents.png",
  },
  { id: 12, price: 50, name: "Oil", image: "/images/oil.png" },
  { id: 13, price: 40, name: "Dairy Products", image: "/images/dairy.png" },
  { id: 14, price: 60, name: "Frozen Items", image: "/images/frozen.png" },
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
        <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-6">
          {categories
            .slice(0, showAll ? categories.length : 10)
            .map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                price={category.price}
              />
            ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
          >
            View All
          </button>
        )}
      </div>
      <PopularProductOffer></PopularProductOffer>
    </div>
  );
}
