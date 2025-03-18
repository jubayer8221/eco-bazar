"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./PopularProductCard/PopularProductCard";
import PopularProductOffer from "./PopularProductCard/PopularProductOffer";

export default function PopularProductCard() {
  const [showAll, setShowAll] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const categoriesDataFetch = async () => {
      try {
        setLoading(true);
        setError(""); // Reset error before fetching

        const response = await fetch(
          "https://ecobazar-backend-alpha.vercel.app/data/popular_product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch popular products");
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          setCategoriesData(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
        setCategoriesData([]);
      } finally {
        setLoading(false);
      }
    };
    categoriesDataFetch();
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
                className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium my-8"
              >
                {showAll ? "Show Less ←" : "View All →"}
              </button>
            )}
          </div>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {(showAll ? categoriesData : categoriesData.slice(0, 10)).map(
                (category) => (
                  <CategoryCard
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    image={category.image}
                    price={category.price}
                  />
                )
              )}
            </div>
          </>
        )}
      </div>
      <PopularProductOffer />
    </div>
  );
}
