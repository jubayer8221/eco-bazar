// components/RelatedProducts.jsx
import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import styles from "@/styles/ProductDetails.module.css";

const products = [
  {
    id: 1,
    name: "Green Apple",
    image: "/apple.png",
    price: 14.99,
    originalPrice: 20.99,
    sale: true,
  },
  {
    id: 2,
    name: "Chanise Cabbage",
    image: "/cauliflower.png",
    price: 14.99,
    originalPrice: null,
    sale: false,
  },
  {
    id: 3,
    name: "Green Capsicum",
    image: "/capsicum.png",
    price: 14.99,
    originalPrice: null,
    sale: false,
  },
  {
    id: 4,
    name: "Ladies Finger",
    image: "/ladyfingers.png",
    price: 14.99,
    originalPrice: null,
    sale: false,
  },
];

const RelatedProducts = () => {
  return (
    <div
      className={`${styles.related_products_container} bg_white p_4 rounded_lg shadow_md`}
    >
      <div className={`${styles.related_products_title_container} center`}>
        <h2 className={`${styles.related_products_title}`}>Related Products</h2>
      </div>

      <div className={`${styles.related_products_grid}`}>
        {products.map((product) => (
          <div key={product.id} className={styles.product_card}>
            {product.sale && <div className={styles.sale_badge}>Sale 50%</div>}
            <div className={styles.product_image_container}>
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className={styles.product_image}
              />
            </div>
            <div className={styles.product_details}>
              <h3 className={styles.product_name}>{product.name}</h3>
              <div className={styles.product_price_container}>
                <span className={styles.sale_price}>
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className={styles.original_price}>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className={styles.product_actions}>
                <button
                  className={`${styles.icon_button} ${styles.wishlist_button}`}
                >
                  <AiOutlineHeart size={20} />
                </button>
                <button
                  className={`${styles.icon_button} ${styles.cart_button}`}
                >
                  <BsCartPlusFill size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
