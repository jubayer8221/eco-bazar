import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterPage() {
  return (
    <footer className="bg-[#1a1a1a] max-w-full text-white py-5 px-4 sm:px-6 w-full justify-center">
      <div className="max-w-5xl w-full flex flex-wrap lg:mx-[300px] md:flex-nowrap gap-2">
        {/* First Section */}
        <div className="w-full md:w-1/3">
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
            dui, eget bibendum magna congue nec.Morbi cursus porttitor enim
            lobortis molestie. Duis gravida turpis dui, eget bibendum magna
            congue nec.
          </p>
          <div className="flex my-2 gap-5 justify-between mr-2">
            <p className="text-xs">
              <Link href="tel:+2195550114">+(219) 555-0114</Link>
            </p>
            <p className="hidden sm:block">or</p>
            <p className="text-xs">
              <Link href="mailto:proxy@gmail.com">proxy@gmail.com</Link>
            </p>
          </div>
        </div>

        {/* Links Sections */}
        <div className="w-full md:w-2/3 flex flex-wrap md:flex-nowrap justify-between text-xs">
          <div className="w-1/2 md:w-auto">
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
          <div className="w-1/2 md:w-auto">
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
                <Link href="/privacypolicy" className="hover:text-green-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto">
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
          <div className="w-1/2 md:w-auto">
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
      <div className="max-w-5xl w-full flex justify-between mt-6 flex-wrap gap-3 text-xs text-gray-300 lg:mx-[300px]">
        <div>
          <p className="text-center">© 2025 Ecobazar. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4 justify-between lg:mr-[140px]">
          <Image
            src="/icons/visa-logo.png"
            alt="Payment Method 4"
            width={50}
            height={20}
            className="cursor-pointer h-[35px] w-[40px]"
          />
          <Image
            src="/icons/Mastercard.png"
            alt="Payment Method 1"
            width={50}
            height={20}
            className="cursor-pointer h-[35px] w-[30px]"
          />
          <Image
            src="/icons/money_back.png"
            alt="Payment Method 2"
            width={50}
            height={20}
            className="cursor-pointer h-[35px] w-[30px]"
          />
          <Image
            src="/icons/secure-payment.png"
            alt="Payment Method 3"
            width={50}
            height={20}
            className="cursor-pointer h-[35px] w-[30px]"
          />
        </div>
      </div>
    </footer>
  );
}
