"use client";

import { useState } from "react";
import CategoryCard from "./Category/PopularCard";
import { useGetPopularCategoriesQuery } from "@/store/slices/apiSlice";

export default function PopularCategories() {
  const [showAll, setShowAll] = useState(false);

  // Fetch categories using RTK Query
  const {
    data: categoriesData = [],
    error,
    isLoading,
  } = useGetPopularCategoriesQuery();

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-5 w-full">
        <p className="text-center py-5 text-green-500 border border-green-500 w-[250px] h-16 rounded-md flex items-center justify-center">
          Loading...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center py-5 w-full">
        <p className="text-center py-5 text-red-500 border border-red-500 w-[250px] h-16 rounded-md flex items-center justify-center">
          Error fetching data
        </p>
      </div>
    );

  return (
    <>
      <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-10 pb-10 font-poppins">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A] my-8">
              Popular Categories
            </h2>
          </div>
          <div>
            {categoriesData.length > 12 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium py-8"
              >
                {showAll ? "Show Less ←" : "View All →"}
              </button>
            )}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {(showAll ? categoriesData : categoriesData.slice(0, 12)).map(
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
      </div>
    </>
  );
}
