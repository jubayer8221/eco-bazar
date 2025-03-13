"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./PopularProductCard/PopularProductCard";
import PopularProductOffer from "./PopularProductCard/PopularProductOffer";
import { FaStar } from "react-icons/fa";
import { useGetPopularCategoriesQuery } from "@/store/slices/apiSlice";

export default function PopularProductCard() {
  ///const [categories, setCategories] = useState(categoriesData);
  const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   const savedCategories = localStorage.getItem("categories");
  //   if (savedCategories) {
  //     setCategories(JSON.parse(savedCategories));
  //   } else {
  //     localStorage.setItem("categories", JSON.stringify(categoriesData));
  //   }
  // }, []);

  const [categoriesData, setCategoriesData] = useState([]);
  // console.log("categoriesData", categoriesData);
  useEffect(() => {
    const categoriesDataFetch = async () => {
      try {
        const response = await fetch(
          "https://ecobazar-backend-alpha.vercel.app/"
        );
        const data = await response.json();
        //console.log("API Response:", data.popular_product); // Check the full response
        if (Array.isArray(data.popular_product)) {
          setCategoriesData(data.popular_product);
        } else {
          console.error(
            "popular_product is not an array:",
            data.popular_product
          );
          setCategoriesData([]); // Ensure it's always an array
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCategoriesData([]); // Handle errors gracefully
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

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {(Array.isArray(categoriesData) ? categoriesData : []).map(
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
      </div>
      <PopularProductOffer />
    </div>
  );
}
