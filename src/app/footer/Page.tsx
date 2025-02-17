import React from "react";
import Image from "next/image";
import styles from "@/styles/footer/footer.module.css";

export default function FooterPage() {
  return (
    <footer className={`${styles.footer}`}>
      {/* Apply footer class to footer element */}
      <div className={`${styles.footer_container} flex flex-wrap gap-4`}>
        {/* First Section (2/3 of container width) */}
        <div className="font-poppins w-full sm:w-2/3">
          {" "}
          {/* Update here for 2/3 width */}
          <div className="flex gap-2">
            <Image
              className="w-10 h-8"
              src="/icons/logo.png"
              alt="Payment Methods"
              width={30}
              height={20}
            />
            <h1>Ecobazar</h1>
          </div>
          <p className="text-justify font-poppins text-xs">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex my-5">
            <p className="font-poppins text-xs">
              <a href="tel:+[(219) 555-0114]">+(219)555-0114</a>
            </p>
            <p className=" text-gray-300 mx-1">or</p>
            <p>
              <a href="mailto:[proxy@gmail.com]">proxy@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Second Section (1/3 of container width) */}
        <div
          className={`${styles.footer_links_col} font-poppins text-xs w-full sm:w-1/3`}
        >
          <ul>
            <li>My Account</li>
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* Third Section (1/3 of container width) */}
        <div
          className={`${styles.footer_links_col} font-poppins text-xs w-full sm:w-1/3`}
        >
          <ul>
            <li>Helps</li>
            <li>Contact</li>
            <li>Faqs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div
          className={`${styles.footer_links_col} font-poppins text-xs w-full sm:w-1/3`}
        >
          <ul>
            <li>Proxy</li>
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Fifth Section */}
        <div
          className={`${styles.footer_links_col} font-poppins text-xs w-full sm:w-1/3`}
        >
          <ul>
            <li>Categories</li>
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <p>
            Ecobazar eCommerce @{new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <div className="mb-5">
          <Image
            className="w-10 h-8"
            src="/icons/Mastercard.png"
            alt="Payment Methods"
            width={300}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
