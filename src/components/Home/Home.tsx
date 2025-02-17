import React from 'react'
import Banner from './Banner'
import BBanner from './BBanner'
import Hotdeals from './Hotdeals'
import FeaturedProducts from './FeaturedProducts'
import FeadBack from './FeadBack'
import Blog from './Blog'
import PopularCategories from '../popularCategory/page'
import PopularProductCard from '../popularProduct/page'
import SalesBanner from './SalesBanner'

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <BBanner />
      <PopularCategories />
      <PopularProductCard />
      <Hotdeals />
      <SalesBanner />
      <FeaturedProducts />
      <FeadBack />
      <Blog />
    </div>
  );
};

export default Home;
