"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./Category/PopularCard";

export default function PopularCategories() {
  const [showAll, setShowAll] = useState(false);
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log("categories: ", categories);

  useEffect(() => {
    const categoriesDataFetch = async () => {
      try {
        setLoading(true);
        setError(""); // Reset error before fetching

        const response = await fetch(
          "https://ecobazar-backend-alpha.vercel.app/data/popular_categories"
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch popular categories: ${response.statusText}`
          );
        }
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data)) {
          setCategoriesData(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
        setCategoriesData([]); // Handle errors gracefully
      } finally {
        setLoading(false);
      }
    };
    categoriesDataFetch();
  }, []);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[100px] xl:pr-[100px] pt-10 pb-10 font-poppins">
      <div className="flex justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A] my-8">
          Popular Categories
        </h2>
        {categories.length > 12 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium py-8"
          >
            {showAll ? "Show Less ←" : "View All →"}
          </button>
        )}
      </div>

      {/* Loading & Error States */}
      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-600">
          Loading...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 text-lg font-semibold">
          {error}
        </div>
      ) : (
        <>
          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {(showAll ? categories : categories.slice(0, 12)).map(
              (category) => (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  image={category.image}
                  id={category.id}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
