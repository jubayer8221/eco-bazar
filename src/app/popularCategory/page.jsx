"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./Category/PopularCard";
import Image from "next/image";

const categoriesData = [
  { id: 1, name: "Fresh Fruit", image: "/image/image1.png" },
  { id: 2, name: "Fresh Vegetables", image: "/image/image_1.png" },
  { id: 3, name: "Meat & Fish", image: "/image/image_2.png" },
  { id: 4, name: "Snacks", image: "/image/image_3.png" },
  { id: 5, name: "Beverages", image: "/image/image_4.png" },
  { id: 6, name: "Beauty & Health", image: "/image/image_5.png" },
  { id: 7, name: "Bread & Bakery", image: "/image/image_6.png" },
  { id: 8, name: "Baking Needs", image: "/image/image_7.png" },
  { id: 9, name: "Cooking", image: "/image/image_8.png" },
  { id: 10, name: "Diabetic Food", image: "/image/image_9.png" },
  { id: 11, name: "Dish Detergents", image: "/image/image_10.png" },
  { id: 12, name: "Oil", image: "/image/image_11.png" },
  { id: 13, name: "Dairy Products", image: "/image/image_1.png" },
  { id: 14, name: "Frozen Items", image: "/image/image_1.png" },
];

export default function PopularCategories() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-6">
        {categories
          .slice(0, showAll ? categories.length : 12)
          .map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
      </div>

      {/* View All Button */}
      {!showAll && categories.length > 12 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          View All
        </button>
      )}
    </div>
  );
}
