import React from "react";
import Banner from "./Banner";
import BBanner from "./BBanner";
import Hotdeals from "./Hotdeals";
import FeaturedProducts from "./FeaturedProducts";
import FeadBack from "./FeadBack";
import Blog from "./Blog";
import PopularCategories from "@/components/popularCategory/page";
import PopularProductCard from "@/components/popularProduct/page";
import SalesBanner from "@/components/Home/SalesBanner";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <BBanner />
      <PopularCategories></PopularCategories>
      <PopularProductCard></PopularProductCard>
      <SalesBanner />
      <Hotdeals />
      <FeaturedProducts />
      <FeadBack />
      <Blog />
    </div>
  );
};

export default Home;
