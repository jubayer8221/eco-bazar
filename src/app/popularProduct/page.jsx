"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./PopularProductCard/PopularProductCard";
import Image from "next/image";

const categoriesData = [
  { id: 1, name: "Fresh Fruit", image: "/image/image_1.png" },
  { id: 2, name: "Fresh Vegetables", image: "/images/vegetables.png" },
  { id: 3, name: "Meat & Fish", image: "/images/meat.png" },
  { id: 4, name: "Snacks", image: "/images/snacks.png" },
  { id: 5, name: "Beverages", image: "/images/beverages.png" },
  { id: 6, name: "Beauty & Health", image: "/images/beauty.png" },
  { id: 7, name: "Bread & Bakery", image: "/images/bakery.png" },
  { id: 8, name: "Baking Needs", image: "/images/baking.png" },
  { id: 9, name: "Cooking", image: "/images/cooking.png" },
  { id: 10, name: "Diabetic Food", image: "/images/diabetic.png" },
  { id: 11, name: "Dish Detergents", image: "/images/detergents.png" },
  { id: 12, name: "Oil", image: "/images/oil.png" },
  { id: 13, name: "Dairy Products", image: "/images/dairy.png" },
  { id: 14, name: "Frozen Items", image: "/images/frozen.png" },
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
    <div className="container p-6 max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>

      {/* Category Grid */}
      <div className="grid grid-cols-5 gap-4 m-6">
        {categories
          .slice(0, showAll ? categories.length : 10)
          .map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
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
  );
}
