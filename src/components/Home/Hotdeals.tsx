"use client";

import React, { useEffect, useState } from "react";
import HotdealsCart from "@/components/Home/HotdealsCart";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  rating?: number;
  sale?: string;
  oldPrice?: string;
  bestSale?: boolean;
  reviews?: number;
}

const Hotdeals = () => {
  const [hotDealsProduct, setHotDealsProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("HotDeals Product: ", hotDealsProduct);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(""); // Reset error before fetching

        const response = await fetch(
          "https://ecobazar-backend-alpha.vercel.app/data/hotDeals_product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch hot deals");
        }
        const data = await response.json();
        // console.log("HotDeals: ", data);

        if (Array.isArray(data)) {
          setHotDealsProduct(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
        setHotDealsProduct([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 mt-14 bg-[#F7F7F7] font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Hot Deals
        </h2>
        <button className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium">
          View all →
        </button>
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
          {/* Hot Deals Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {hotDealsProduct.map((product) => (
              <HotdealsCart
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.name}
                price={product.price}
                rating={product.rating}
                sale={product.sale ?? "0%"}
                oldPrice={product.oldPrice?.toString() ?? ""}
                bestSale={product.bestSale}
                reviews={product.reviews ?? 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Hotdeals;
