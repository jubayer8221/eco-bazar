import React from "react";
import Image from "next/image";
import styles from "@/styles/footer/footer.module.css";

export default function FooterPage() {
  return (
    <footer className={styles.footer}>
      {/* Apply footer class to footer element */}
      <div className={`${styles.footer_container} flex`}>
        <div className="footer_logo_desc">
          {/* You can add a class here if needed, or leave as is */}
          <img src="/logo.png" alt="Ecobazar Logo" />
          <h1>Ecobazar</h1>
          <p>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
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

      <div className={styles.footer_bottom}>
        <div>
          <p>Ecobazar eCommerce @2021. All Rights Reserved</p>
        </div>
        <div>
          <div>
            <Image
              src="/payment_icon.png"
              alt="Payment Methods"
              width={300}
              height={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
