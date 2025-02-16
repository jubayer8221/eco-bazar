"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/footer/footer.module.css";

export default function FooterPage() {
  return (
    <footer className={`${styles.footer}`}>
      {/* Apply footer class to footer element */}
      <div className={`${styles.footer_container} flex`}>
        <div className="footer_logo_desc">
          {/* You can add a class here if needed, or leave as is */}
          <div className="flex gap-2">
            <img src="/image/logo.png" alt="Ecobazar Logo" />
            <h1>Ecobazar</h1>
          </div>
          <p className="text-justify">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex my-5">
            <p className="font-semibold">
              <a href="tel:+[(219) 555-0114]">+(219) 555-0114</a>
            </p>
            <p className=" text-gray-300 mx-5">or</p>
            <p>
              <a href="mailto:[proxy@gmail.com]">proxy@gmail.com</a>
            </p>
          </div>
        </div>
        <div className={`${styles.footer_links_col}`}>
          {/* You can add classes to these divs for better targeting if needed */}
          <ul>
            <li>My Account</li>
            <li>My Account</li>
            <li>Order History</li>
            <li>Shoping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className={`${styles.footer_links_col}`}>
          <ul>
            <li>Helps</li>
            <li>Contact</li>
            <li>Faqs</li>
            <li>Terms & Condition</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className={`${styles.footer_links_col}`}>
          <ul>
            <li>Proxy</li>
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className={`${styles.footer_links_col}`}>
          <ul>
            <li>Categories</li>
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>
      {/* Footer_bottom class */}

      <div className="flex justify-between">
        <div>
          <p>
            Ecobazar eCommerce @{new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <div className=" mb-5">
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
