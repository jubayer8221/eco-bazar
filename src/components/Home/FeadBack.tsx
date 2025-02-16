'use client'
import React, { useRef } from "react"; 
import FeadBackCart from "./FeadBackCart";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

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
    image: "/images/hot2.png",
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
    name: "Dianne Russell",
    role: "Customer",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    image: "/images/hot4.png",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    role: "Customer",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    image: "/images/hot3.png",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    role: "Customer",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    image: "/images/hot1.png",
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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Amount to scroll when button is clicked
      const currentScroll = scrollContainerRef.current.scrollLeft;
      if (direction === "right") {
        scrollContainerRef.current.scrollLeft = currentScroll + scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft = currentScroll - scrollAmount;
      }
    }
  };

  return (
    <div className="pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[300px] xl:pr-[300px] pt-24 pb-24 bg-[#F7F7F7] font-poppins">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] xl:text-[32px] font-semibold leading-9 text-[#1A1A1A]">
          Client Testimonials
        </h2>
        <div className="text-[30px] xl:text-[40px] leading-6 font-medium flex gap-4">
          <button onClick={() => scrollTo("left")}>
            <BsArrowLeftCircleFill className="text-[#E6E6E6] hover:text-[#00B207] transition-all duration-300" />
          </button>
          <button onClick={() => scrollTo("right")}>
            <BsArrowRightCircleFill className="text-[#E6E6E6] hover:text-[#00B207] transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Section */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto flex space-x-4 py-4 scrollbar-hiden"
      >
        {testimonials.map((client, index) => (
          <FeadBackCart
            key={index}
            img={client.image}
            name={client.name}
            review={client.review}
            role={client.role}
            rating={client.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default FeadBack;
