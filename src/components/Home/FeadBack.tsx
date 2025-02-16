import React from 'react'
import FeadBackCart from './FeadBackCart';

const testimonials = [
    {
      name: "Robert Fox",
      role: "Customer",
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      image: "/images/client1.png",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      role: "Customer",
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      image: "/images/client2.png",
      rating: 5,
    },
    {
      name: "Eleanor Pena",
      role: "Customer",
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      image: "/images/client3.png",
      rating: 5,
    },
  ];

const FeadBack = () => {
  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 bg-[#F7F7F7] font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Client Testimonials
        </h2>
        <button className="text-[#00B207] text-[14px] xl:text-[16px] leading-6 font-medium">
          View all →
        </button>
      </div>
      {/* hot list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
        {
            testimonials.map((client, index) => (
                <FeadBackCart key={index} img={client.image} name={client.name} review={client.review} role={client.role} rating={client.rating} />
            ))
        }
      </div>
    </div>
  )
}

export default FeadBack
