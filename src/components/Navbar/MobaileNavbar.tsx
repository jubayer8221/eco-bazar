"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";

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
      { label: "Category", link: "/pupularproducts" },
      { label: "Wishlist", link: "/Wishlist" },
      { label: "Shopping cart", link: "/shoppingCart" },
    ],
  },
  {
    label: "Shop",
    link: "#",
    children: [
      { label: "Category", link: "#" },
      { label: "Wishlist", link: "#" },
      { label: "Shopping cart", link: "#" },
    ],
  },
  {
    label: "Blog",
    link: "#",
    children: [
      { label: "Category", link: "#" },
      { label: "Wishlist", link: "#" },
      { label: "Shopping cart", link: "#" },
    ],
  },
  {
    label: "Pages",
    link: "#",
    children: [
      { label: "Category", link: "#" },
      { label: "Wishlist", link: "#" },
      { label: "Shopping cart", link: "#" },
    ],
  },
  { label: "Cart (2)", link: "/shoppingCart" },
  { label: "Contact Us", link: "#" },
];

const MobaileNavbar = () => {
  const [langues, setLangues] = useState(false);
  const [usd, setUsd] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <div className="">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center relative text-[12px]"
              onClick={() => setLangues((prev) => !prev)}
            >
              Eng <IoIosArrowDown className="w-3" />
            </Link>
            <Link
              href="/"
              className="flex items-center text-[12px] relative"
              onClick={() => setUsd((prev) => !prev)}
            >
              USD <IoIosArrowDown className="w-3" />
            </Link>
            {langues && (
              <div className="rounded-sm text-sm p-1 absolute top-11 shadow-lg z-20 text-white bg-black">
                <p>Eng</p>
                <p>Bng</p>
              </div>
            )}
            {usd && (
              <div className="rounded-sm text-sm p-1 absolute top-11 shadow-lg text-white bg-black z-20">
                <p>USD</p>
                <p>BDT</p>
              </div>
            )}
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
              className="absolute p-8 w-[65%] md:w-[40%] top-0 left-0 bg-gray-100 bg-opacity-90 h-screen text-black ease-in duration-500"
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
                        className="flex cursor-pointer items-center gap-2 text-black hover:text-[#00B207]"
                        onClick={() => toggleDropdown(d.label)}
                      >
                        <span>{d.label}</span>
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
                <div className="flex gap-1 mt-3">
                  <Link href="/singin">Sign in</Link>
                  <span>/</span>
                  <Link href="/login">Login</Link>
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
