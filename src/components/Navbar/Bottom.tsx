import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iocnImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#",
    children: [
      {
        label: "Category",
        link: "#",
        iocnImage: "",
      },
      {
        label: "Wishlist",
        link: "#",
        iocnImage: "",
      },
      {
        label: "Shopping cart",
        link: "#",
        iocnImage: "",
      },
    ],
  },
  {
    label: "Shop",
    link: "#",
    children: [
      {
        label: "Category",
        link: "#",
      },
      {
        label: "Wishlist",
        link: "#",
      },
      {
        label: "Shopping cart",
        link: "#",
      },
    ],
  },
  {
    label: "Blog",
    link: "#",
    children: [
      {
        label: "Category",
        link: "#",
      },
      {
        label: "Wishlist",
        link: "#",
      },
      {
        label: "Shopping cart",
        link: "#",
      },
    ],
  },
  
  {
    label: "Pages",
    link: "#",
    children: [
      {
        label: "Category",
        link: "#",
      },
      {
        label: "Wishlist",
        link: "#",
      },
      {
        label: "Shopping cart",
        link: "#",
      },
    ],
  },
  {
    label: "About Us",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
];

const Bottom = () => {
  return (
    <div className="pl-[300px] pr-[300px] bg-black flex items-center justify-between">
      {/* menu  */}
      <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-[#00B207] ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-[#00B207]  "
                    >
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      {/* phone */}
      <div className="flex items-center gap-2">
        <BiPhoneCall className="w-5 h-5 text-white" />
        <p className=" text-white text-[14px] leading-[21px] font-medium font-poppins">
          (219) 555-0114
        </p>
      </div>
    </div>
  );
};

export default Bottom;
