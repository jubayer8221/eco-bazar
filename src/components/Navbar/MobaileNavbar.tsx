"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iocnImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/innerpage/shop",
    children: [
      { label: "Featured Products", link: "/innerpage/featuredProducts" },
      { label: "Popular Products", link: "/innerpage/popularProducts" },
      { label: "Hot Deals", link: "/innerpage/hotDeals" },
    ],
  },

  {
    label: "Pages",
    link: "#",
    children: [
      { label: "Category", link: "/" },
      { label: "Wishlist", link: "/Wishlist" },
      { label: "Shopping Cart", link: "/shoppingCart" },
    ],
  },
  {
    label: "Blog",
    link: "#",
    children: [
      { label: "News", link: "/blog" },
      { label: "Latest News", link: "/innerpage/blog" },
    ],
  },

  {
    label: "About Us",
    link: "/aboutUs",
    children: [
      { label: "Privacy Policy", link: "/privacypolicy" },
      { label: "Contact Us", link: "/contactUs" },
    ],
  },
];

const MobaileNavbar = () => {
  const cart = useSelector((state: RootState) => state.cart.cart); // ✅ Redux cart state
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown2 = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };
  return (
    <>
      <div className="">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 relative">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown2("lang")}
                className="flex items-center"
              >
                ENG{" "}
                <IoIosArrowDown
                  className={`w-3 transition-transform duration-200 ${
                    activeDropdown === "lang" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "lang" && (
                <div className="rounded-md text-sm p-1 absolute top-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
                  <p>ENG</p>
                  <p>BNG</p>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown2("usd")}
                className="flex items-center"
              >
                USD{" "}
                <IoIosArrowDown
                  className={`w-3 transition-transform duration-200 ${
                    activeDropdown === "usd" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "usd" && (
                <div className="rounded-md text-sm p-1 absolute top-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
                  <p>USD</p>
                  <p>BDT</p>
                </div>
              )}
            </div>
          </div>
          <IoMdMenu
            className="text-[30px] cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        {open && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-0 z-10"
            onClick={() => setOpen(false)}
          >
            <div
              className="absolute p-8 w-[80%] md:w-[40%] top-0 left-0 bg-gray-100 bg-opacity-90 h-screen text-black ease-in duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="cursor-pointer flex justify-end"
                onClick={() => setOpen(false)}
              >
                <MdClose size={25} />
              </div>
              <div className="flex flex-col gap-4 transition-all">
                {navItems.map((d, i) => (
                  <div key={i} className="relative px-2 py-3">
                    <Link href={d.link ?? "#"}>
                      <p
                        className="flex cursor-pointer items-center text-[24px] font-bold gap-2 text-black hover:text-[#00B207]"
                        onClick={() => toggleDropdown(d.label)}
                      >
                        <span>{d.label}</span>
                        {
                          d.label === "Home" &&(
                            <GoHome className="text-[24px] font-bold ml-1"/>
                          )
                        }
                        {d.children && (
                          <IoIosArrowDown
                            className={`text-xs transition-all ${
                              openDropdown === d.label ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </p>
                    </Link>
                    {openDropdown === d.label && d.children && (
                      <div className="mt-2 flex flex-col gap-1 rounded-lg py-2">
                        {d.children.map((ch, idx) => (
                          <Link
                            key={idx}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center py-1 pl-6 pr-8 hover:text-[#00B207]"
                          >
                            <span>{ch.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="relative px-2 py-3">
                  <Link href="/shoppingCart">
                    <p className="flex cursor-pointer items-center gap-2 text-black hover:text-[#00B207]">
                      <span className="text-[24px] font-bold">Cart ({cart.length})</span>
                    </p>
                  </Link>
                </div>

                <div className="flex gap-1 mt-3 ml-3 ">
                  <Link href="/singin" className="text-[24px] font-bold">Sign in</Link>
                  <span className="text-[24px] font-bold">/</span>
                  <Link href="/login" className="text-[24px] font-bold">Login</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobaileNavbar;
