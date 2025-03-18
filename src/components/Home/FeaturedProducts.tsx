"use client";
import React, { useEffect, useState } from "react";
import LatestNews from "./LatestNews";
import FeaturedProductCart from "./FeaturedProductCart";

// Define the TypeScript interface for a product
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

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("FeaturedProducts: ", featuredProducts)

  useEffect(() => {
    const featuredProductsDataFetch = async () => {
      try {
        setLoading(true);
        setError(""); // Reset error before fetching

        const response = await fetch(
          "https://ecobazar-backend-steel.vercel.app/data/featured_products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch featured products");
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          setFeaturedProductsData(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
        setFeaturedProductsData([]);
      } finally {
        setLoading(false);
      }
    };

    featuredProductsDataFetch();
  }, []);

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[140px] md:pr[140px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Featured Products
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
          {/* Featured Products list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {featuredProducts.map((product) => (
              <FeaturedProductCart
                key={product.id}
                id={product.id}
                title={product.name}
                img={product.image}
                sale={product.sale ?? ""}
                price={product.price}
                rating={product.rating ?? 0}
                oldPrice={product.oldPrice ?? "0"}
                quantity={1}
              />
            ))}
          </div>

          {/* Latest News */}
          <div className="mt-12">
            <LatestNews />
          </div>
        </>
      )}
    </div>
  );
}
