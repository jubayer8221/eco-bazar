"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./Category/PopularCard";

// const categoriesData = [
//   { id: 6, name: "Fresh Fruit", image: "/image/image1.png" },
//   { id: 7, name: "Vegetables", image: "/image/image_1.png" },
//   { id: 8, name: "Meat & Fish", image: "/image/image_2.png" },
//   { id: 9, name: "Snacks", image: "/image/image_3.png" },
//   { id: 10, name: "Beverages", image: "/image/image_4.png" },
//   { id: 11, name: "Beauty", image: "/image/image_5.png" },
//   { id: 12, name: "Bakery", image: "/image/image_6.png" },
//   { id: 13, name: "Baking Needs", image: "/image/image_7.png" },
//   { id: 14, name: "Cooking", image: "/image/image_8.png" },
//   { id: 15, name: "Diabetic Food", image: "/image/image_9.png" },
//   { id: 16, name: "Detergents", image: "/image/image_10.png" },
//   { id: 17, name: "Oil", image: "/image/image_11.png" },
//   { id: 18, name: "Dairy Products", image: "/image/image_1.png" },
//   { id: 19, name: "Frozen Items", image: "/image/image_1.png" },
// ];

export default function PopularCategories() {
  const [showAll, setShowAll] = useState(false);

  // data load 
  const [categoriesData, setCategoriesData] = useState([]);
  console.log(categoriesData)
  useEffect (()=>{
    const categoriesDataFetch = async() =>{
      try {
        const api = await fetch("http://localhost:4000/popularCategories");
        const data = await api.json();
        setCategoriesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    categoriesDataFetch();
  }, [])

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
