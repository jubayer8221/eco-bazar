import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterPage() {
  return (
    <footer className="mb-[60px] md:[60px] xl:mb-0 pt-4 pb-4 px-3 sm:px-[100px] md:px-[100px] xl:px-[100px] bg-[#1a1a1a] text-white">
      <div className="w-full flex flex-col md:flex-row xl:flex-row justify-between gap-4">
        {/* First Section */}
        <div className="w-full md:w-[70%] xl:w-[60%]">
          <div className="flex gap-2 items-center">
            <Image
              className="w-10 h-8"
              src="/icons/logo.png"
              alt="Ecobazar Logo"
              width={30}
              height={20}
            />
            <h1 className="text-lg font-bold">Ecobazar</h1>
          </div>
          <p className="text-xs mt-2">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex flex-row md:flex-col xl:flex-row mt-2 gap-4 md:gap-y-1 xl:gap-4 items-center md:items-start xl:items-center">
            <p className="text-xs">
              <Link href="tel:+2195550114">+(219) 555-0114</Link>
            </p>
            <p className="">or</p>
            <p className="text-xs">
              <Link href="mailto:proxy@gmail.com">proxy@gmail.com</Link>
            </p>
          </div>
        </div>

        {/* Links Sections */}
        <div className="w-full flex flex-row gap-6 justify-between text-xs">
          <div className="md:w-auto">
            <ul>
              <li className="font-bold pt-2">
                <Link href="/" className="hover:text-green-500 ">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orderhistory" className="hover:text-green-500">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/shoppingCart" className="hover:text-green-500">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/Wishlist" className="hover:text-green-500">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-auto">
            <ul>
              <li className="font-bold pt-2">
                <Link href="/helps" className="hover:text-green-500">
                  Helps
                </Link>
              </li>
              <li>
                <Link href="/contactUs" className="hover:text-green-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:text-green-500">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-green-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-auto">
            <ul>
              <li className="font-bold pt-2">
                <Link href="/aboutUs" className="hover:text-green-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-green-500">
                  Proxy
                </Link>
              </li>

              <li>
                <Link href="/popularproducts" className="hover:text-green-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/popularproducts" className="hover:text-green-500">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-green-500">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden xl:block">
            <ul>
              <li className="font-bold pt-2">
                <Link href="/popularproducts" className="hover:text-green-500">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/popularproducts" className="hover:text-green-500">
                  Meat & Fish
                </Link>
              </li>
              <li>
                <Link href="/popularproducts" className="hover:text-green-500">
                  Bread & Bakery
                </Link>
              </li>
              <li>
                <Link href="/popularproducts" className="hover:text-green-500">
                  Beauty & Health
                </Link>
              </li>
              <li>
                <Link href="/popularproducts" className="hover:text-green-500">
                  Fruit & Vegetables
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <hr />

      {/* Footer Bottom Section */}
      <div className="w-full flex items-center justify-between mt-6 text-xs text-gray-300">
        <div>
          <p className="">© 2025 Ecobazar. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4 justify-between">
          <Image
            src="/icons/visa-logo.png"
            alt="Payment Method 4"
            width={40}
            height={20}
            className="cursor-pointer h-[30px] w-[40px] xl:h-[35px] xl:w-[45px] sm:w-[25px] sm:h-[25px] p-2 bg-black border border-gray-300 rounded-md"
          />
          <Image
            src="/icons/Mastercard.png"
            alt="Payment Method 1"
            width={40}
            height={20}
            className="cursor-pointer h-[30px] w-[40px] xl:h-[35px] xl:w-[45px] p-2 bg-black border border-gray-300 rounded-md sm:w-[25px] sm:h-[25px]"
          />
          {/* <Image
            src="/icons/money_back.png"
            alt="Payment Method 2"
            width={50}
            height={20}
            className="cursor-pointer h-[30px] w-[40px] xl:h-[35px] xl:w-[45px] p-2 bg-black border border-gray-300 rounded-md sm:w-[25px] sm:h-[25px]"
          /> */}
          <Image
            src="/icons/secure-payment.png"
            alt="Payment Method 3"
            width={50}
            height={20}
            className="cursor-pointer h-[30px] w-[40px] xl:h-[35px] xl:w-[45px] p-2 bg-black border border-gray-300 rounded-md sm:w-[25px] sm:h-[25px]"
          />
        </div>
      </div>
    </footer>
  );
}
