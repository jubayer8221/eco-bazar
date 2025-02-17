import React from 'react'
import LatestNews from './LatestNews';
import FeaturedProductCart from './FeaturedProductCart';

const FeaturedProduct = [
    {
      id: 1,
      name: "Chinese cabbage",
      price: "$12.00",
      oldPrice: "$24.00",
      image: "/images/hot1.png",
      sale: "50%",
      bestSale: true,
      rating: 5,
      reviews: 524,
      featured: true,
    },
    {
      id: 2,
      name: "Chinese cabbage",
      price: "$12.00",
      image: "/images/hot2.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Green Lettuce",
      price: "$9.00",
      image: "/images/hot3.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Eggplant",
      price: "$34.00",
      image: "/images/hot4.png",
      rating: 4,
      sale: "40%",
    },
    {
      id: 5,
      name: "Fresh Cauliflower",
      price: "$12.00",
      image: "/images/hot5.png",
  
      rating: 4,
    },
   
  ];

const FeaturedProducts = () => {
    return (
        <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 font-poppins">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
              Featured Products
            </h2>
            <button className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium">
              View all →
            </button>
          </div>
          {/* Featured Products list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
            {
                FeaturedProduct.map((product)=> (
                    <FeaturedProductCart key={product.id} title={product.name} img={product.image} sale={product.sale ?? "0%"} price={product.price} rating={product.rating} oldPrice={product.oldPrice ?? "0"} reviews={0} />
                ))
            }
          </div>
          {/* latest news  */}
          <div className='mt-12'>
          <LatestNews />
          </div>
        </div>
      );
}

export default FeaturedProducts
