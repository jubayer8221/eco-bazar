"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./Category/PopularCard";



export default function PopularCategories() {
  const [showAll, setShowAll] = useState(false);

  // data load 
  const [categoriesData, setCategoriesData] = useState([]);
  // console.log(categoriesData)

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const api = await fetch("https://ecobazar-backend-alpha.vercel.app/");
        const data = await api.json(); // Await the JSON parsing
        setCategoriesData(data.popular_categories)// Now it should work
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    dataFetch();
  }, []);

  // useEffect (()=>{
  //   const categoriesDataFetch = async() =>{
  //     try {
  //       const api = await fetch("http://localhost:4000/popularCategories");
  //       const data = await api.json();
  //       setCategoriesData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   categoriesDataFetch();
  // }, [])

  useEffect(() => {
    if (!localStorage.getItem("categories")) {
      localStorage.setItem("categories", JSON.stringify(categoriesData));
    }
  }, []);

  return (
    <>
      <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-10 pb-10  font-poppins">
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
