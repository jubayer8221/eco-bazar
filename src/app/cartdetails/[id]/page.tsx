"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import Link from "next/link";
// import { useCart } from "@/components/context/CartContext";

// import Review from "../../ProductDetails/productDetailsCards/review/Review";

const FeaturedProduct = [
  {
    id: 1,
    name: "Chinese cabbage",
    price: 17.28,
    oldPrice: 48.0,
    quantity: 1,
    image: "/images/hot1.png",
    thumbnails: [
      "/images/thumnail1.png",
      "/images/thumnail2.png",
      "/images/thumnail3.png",
      "/images/thumnail1.png",
      "/images/thumnail1.png",
      "/images/thumnail1.png",
    ],
    sale: "64%",
    rating: 5,
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 2,
    name: "Chinese cabbage",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    image: "/images/hot2.png",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    rating: 4,
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: 9.0,
    quantity: 1,
    oldPrice: null,
    image: "/images/hot3.png",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    rating: 4,
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 4,
    name: "Eggplant",
    price: 34.0,
    quantity: 1,
    oldPrice: null,
    image: "/images/hot4.png",
    rating: 3,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 5,
    name: "Fresh Cauliflower",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    image: "/images/hot5.png",
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },

  // popular catagoriy
  {
    id: 6,
    name: "Fresh Fruit",
    image: "/image/image1.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 7,
    name: "Fresh Vegetables",
    image: "/image/image_1.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 8,
    name: "Meat & Fish",
    image: "/image/image_2.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 9,
    name: "Snacks",
    image: "/image/image_3.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 10,
    name: "Beverages",
    image: "/image/image_4.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 11,
    name: "Beauty & Health",
    image: "/image/image_5.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 12,
    name: "Bread & Bakery",
    image: "/image/image_6.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 13,
    name: "Baking Needs",
    image: "/image/image_7.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 14,
    name: "Cooking",
    image: "/image/image_8.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 15,
    name: "Diabetic Food",
    image: "/image/image_9.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 16,
    name: "Dish Detergents",
    image: "/image/image_10.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 17,
    name: "Oil",
    image: "/image/image_11.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 18,
    name: "Dairy Products",
    image: "/image/image_1.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 19,
    name: "Frozen Items",
    image: "/image/image_1.png",
    price: 12.0,
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },

  // proplar product

  {
    id: 20,
    price: 20.0,
    quantity: 1,
    name: "Green Apple",
    image: "/image/apple.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 21,
    price: 25.0,
    name: "Fresh Indian Malta",
    image: "/image/malta.png",
    quantity: 1,
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 22,
    price: 15.0,
    name: "Chinese cabage",
    image: "/image/cabbage.png",
    oldPrice: null,
    rating: 4,
    quantity: 1,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 23,
    price: 18.0,
    name: "Green Lettuce",
    image: "/image/lettuce.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    quantity: 1,
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 24,
    price: 22.0,
    name: "Eggplant",
    image: "/image/eggplant.png",
    oldPrice: null,
    quantity: 1,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 25,
    price: 30.0,
    quantity: 1,
    name: "Big Potatoes",
    image: "/image/potatoes.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 26,
    price: 12.0,
    quantity: 1,
    name: "Corn",
    image: "/image/corn.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 27,
    price: 28.0,
    name: "Fresh Cauliflower",
    image: "/image/cauliflower.png",
    oldPrice: null,
    quantity: 1,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 28,
    price: 20.0,
    name: "Green Capsicum",
    image: "/image/capsicum.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    quantity: 1,
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 29,
    price: 10.0,
    name: "Green Chili",
    image: "/image/chili.png",
    oldPrice: null,
    quantity: 1,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 30,
    price: 35.0,
    name: "Dish Detergents",
    image: "/image/lettuce.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    quantity: 1,
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 31,
    price: 50.0,
    name: "Oil",
    quantity: 1,
    image: "/image/cabbage.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 32,
    price: 22.0,
    name: "Eggplant",
    image: "/image/eggplant.png",
    oldPrice: null,
    rating: 4,
    quantity: 1,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 33,
    price: 40.0,
    name: "Dairy Products",
    image: "/image/corn.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    quantity: 1,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
  {
    id: 34,
    price: 60.0,
    quantity: 1,
    name: "Frozen Items",
    image: "/image/chili.png",
    oldPrice: null,
    rating: 4,
    sale: "40%",
    thumbnails: [
      "/images/hot1.png",
      "/images/hot2.png",
      "/images/hot3.png",
      "/images/hot4.png",
    ],
    stock: "In Stock",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    brand: "Farmunity",
    sku: "2,51,594",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  },
];

const CartDetails = () => {
  const params = useParams();
  const [data, setData] = useState<(typeof FeaturedProduct)[0] | null>(null);
  // add cart
  // const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // scrollthumbnails
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (direction: string) => {
    if (thumbnailRef.current) {
      const scrollAmount = 90;
      thumbnailRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  //   console.log("product Details", data);

  const fatchFeaturedProduct = () => {
    const productCartId = Number(params.id);
    const productCart = FeaturedProduct.find(
      (cart) => cart.id === productCartId
    );
    if (productCart) {
      setData(productCart);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fatchFeaturedProduct();
    }
  }, [params]);

  // default image setup
  useEffect(() => {
    if (data) {
      setSelectedImage(data.image);
    }
  }, [data]);

  //   rating generation
  const ratinggeneration = (rating: number) => {
    const maxStart = 5;
    return (
      <div className="flex items-center gap-1">
        {[...Array(maxStart)].map((_, index) =>
          index < rating ? (
            <IoStar key={index} className="text-[14px] text-[#FF8A00]" />
          ) : (
            <CiStar key={index} className="text-[14px] text-[#FF8A00]" />
          )
        )}
      </div>
    );
  };

  // product discription
  const [activeTab, setActiveTab] = useState("Descriptions");
  const [isTabVisible, setIsTabVisible] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsTabVisible(false);
  };

  return data ? (
    <>
      {/* product details  */}
      <div className="mt-16 md:mt-12 xl:mt-48 pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] font-poppins">
        <div className="flex flex-col md:flex-col xl:flex-row items-center gap-y-3 xl:gap-1">
          {/* left side image show  */}
          <div className="w-full sm:w-fullmd:w-full xl:w-1/2 flex md:justify-between md:items-center xl:flex-row space-x-1">
            {/* thumbnail images */}
            <div className="flex flex-col items-center space-y-2">
              <div>
                <MdKeyboardArrowUp
                  onClick={() => scrollThumbnails("up")}
                  className="cursor-pointer text-[24px] text-[#5e5e5e]"
                />
              </div>
              <div
                ref={thumbnailRef}
                className=" h-[250px] overflow-y-auto scrollbar-hiden "
              >
                {data.thumbnails.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt="image"
                    width={60}
                    height={60}
                    className={` md:w-[100px] md:h-[100px] xl:w-[60px] xl:h-[60px] cursor-pointer hover:border hover:border-[#00B207]`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
              <div>
                <MdKeyboardArrowDown
                  onClick={() => scrollThumbnails("down")}
                  className="cursor-pointer text-[24px] text-[#5e5e5e]"
                />
              </div>
            </div>
            {/* main image  */}
            <div>
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="image"
                  width={300}
                  height={300}
                  className="md:w-[400px] md:h-[400px] xl:w-[300px] xl:h-[300px]"
                />
              ) : null}
            </div>
          </div>

          {/* right side cart info */}
          <div className="w-full sm:w-fullmd:w-full xl:w-1/2">
            <div className="flex items-center gap-1">
              <h2 className="text-[30px] font-semibold text-[#1A1A1A]">
                {data.name}
              </h2>
              <span className="bg-[#20B52633] px-[8px] py-[4px] text-[12px] text-[#2C742F] rounded-sm">
                {data.stock}
              </span>
            </div>
            {/* review and sku */}
            <div className="flex items-center gap-2 mt-2">
              <p className="flex text-[10px] font-normal text-[#666666] gap-1">
                {ratinggeneration(data.rating)} {data.rating} Review
              </p>
              <span className="bg-[#666666] w-1 h-1 rounded-full"></span>
              <span className="text-[10px] font-medium">
                sku: <span className="text-[#666666]">{data.sku}</span>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <p className="text-4 text-[#2C742F] leading-6 font-medium">
                ${data.price}{" "}
                <del className="text-[#808080] text-4">{data.oldPrice}</del>
              </p>
              <p className="">
                {data.sale && (
                  <p className="text-[12 px] bg-[#EA4B481A] px-3 py-1 rounded-full text-[#EA4B48]">
                    {data.sale} off
                  </p>
                )}
              </p>
            </div>
            <hr className="text-[#E6E6E6] w-full mt-2 mb-4" />
            {/* brand share item  */}
            <div className="flex items-center justify-between">
              <p className="text-[12px]">Brand: {data.brand}</p>
              <div className="flex items-center gap-1">
                <p className="text-[12px]">Share item:</p>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-white text-[#4D4D4D] hover:bg-[#00B207] hover:text-white transition duration-300">
                    <BiLogoFacebook className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-full bg-white text-[#4D4D4D] hover:bg-[#00B207] hover:text-white transition duration-300">
                    <FaInstagram className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-full bg-white text-[#4D4D4D] hover:bg-[#00B207] hover:text-white transition duration-300">
                    <FaTwitter className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-full bg-white text-[#4D4D4D] hover:bg-[#00B207] hover:text-white transition duration-300">
                    <FaGooglePlusG className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[12px] mt-1 font-normal text-[#808080]">
              {data.description}
            </p>
            <hr className="text-[#E6E6E6] w-full mt-5 mb-3" />
            {/* Add to cart button  */}
            <div className="w-full flex items-center justify-between gap-3">
              <div className="flex items-center border rounded-full border-[#E6E6E6] p-2 gap-2">
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 bg-[#20B5261A] rounded-full hover:bg-[#00B207] hover:text-white text-[#2C742F]"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="p-1 bg-[#20B5261A] rounded-full hover:bg-[#00B207] hover:text-white text-[#2C742F]"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: data.id,
                    image: data.image,
                    name: data.name,
                    quantity: data.quantity,
                    price: data.price,
                  })
                }
                className="px-[60px] py-[12px] bg-[#00B207] text-white text-[14px] font-semibold flex items-center gap-1 rounded-full"
              >
                Add to Cart <HiOutlineShoppingBag />
              </button>
              <div className="p-2 bg-[#20B5261A] rounded-full text-[#2C742F] hover:bg-[#00B207] hover:text-white transition duration-300">
                <CiSaveUp1 className="w-6 h-6" />
              </div>
            </div>
            <hr className="text-[#E6E6E6] w-full mt-3 mb-4" />
            <p className="text-[12px] font-medium">
              Category: <span className="text-[#808080]">{data.category}</span>
            </p>
            <p className="text-[12px] font-medium mt-2">
              Tags:{" "}
              {data.tags.map((tag, index) => (
                <span key={index} className="text-[#808080]">
                  {tag}
                  {index < data.tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] font-poppins">
        {/* Tab Navigation */}
        <div className="flex flex-col xl:flex-row border-b">
          {["Descriptions", "Additional Information", "Customer Feedback"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-green-500 text-green-500"
                    : "text-gray-500"
                } ${isTabVisible ? "block" : "hidden"} sm:block`}
              >
                {tab}
              </button>
            )
          )}
          <button
            onClick={() => setIsTabVisible(!isTabVisible)}
            className="sm:hidden px-6 py-2 text-gray-500"
          >
            {activeTab}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6 max-w-6xl">
          {/* Left Section */}
          <div className="w-full sm:w-1/2">
            {activeTab === "Descriptions" && (
              <div>
                <p className="text-gray-600 text-justify">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit. <br /> <br /> Nulla
                  mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
                  iaculis, metus faucibus elementum tincidunt, turpis mi viverra
                  velit, pellentesque tristique neque mi eget nulla. Proin
                  luctus elementum neque et pharetra.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>✔️ 100g of fresh leaves provided.</li>
                  <li>✔️ Great for soups, salads, and stir-fries.</li>
                  <li>✔️ Nutritious and delicious.</li>
                </ul>
              </div>
            )}
            {activeTab === "Additional Information" && (
              <div className="text-gray-600">
                <p>
                  <span className="font-normal text-black">Weight: </span>03
                </p>
                <p>
                  <span className="font-normal text-black">Color: </span>Green
                </p>
                <p>
                  <span className="font-normal text-black">Type:</span> Organic
                </p>
                <p>
                  <span className="font-normal text-black">Category:</span>{" "}
                  Vegetables
                </p>
                <p>
                  <span className="font-normal text-black">Stock Status:</span>{" "}
                  Available <span className="text-gray-400">(5,413)</span>
                </p>
                <p>
                  <span className="font-normal text-black">Tags:</span>
                  <span className="ml-2 space-x-2">
                    <Link href="#" className="text-black hover:underline">
                      Vegetables
                    </Link>
                    ,
                    <Link href="#" className="text-black hover:underline">
                      Healthy
                    </Link>
                    ,
                    <Link href="#" className="text-black underline">
                      Chinese Cabbage
                    </Link>
                    ,
                    <Link href="#" className="text-black hover:underline">
                      Green Cabbage
                    </Link>
                  </span>
                </p>
              </div>
            )}
            {/* {activeTab === "Customer Feedback" && (
              <div className="w-auto md:grid-cols-2 gap-4">
                <Review className ="p-4 shadow-md border hover:border-green-600" />
                
              </div>
            )} */}
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/delivery_man.png"
                alt="Delivery"
                width={500}
                height={300}
                className="rounded-lg max-w-full"
              />
            </div>

            {/* Discount and Organic Small Banner */}
            <div className="flex flex-col md:flex-col xl:flex-row gap-2 mt-4">
              {/* Discount Banner */}
              <div className="w-full md:w-full bg-gray-100 p-4 flex items-center gap-2 rounded-lg">
                <Image
                  src="/image/discount.png"
                  alt="Discount"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="">
                  <h3 className="font-normal">64% Discount</h3>
                  <p className="text-sm text-gray-600">
                    Save 64% on your purchase.
                  </p>
                </div>
              </div>

              {/* Organic Banner */}
              <div className="w-full md:w-full p-4 bg-gray-100 flex items-center gap-2 rounded-lg ">
                <Image
                  src="/image/organic.png"
                  alt="Organic"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="">
                  <h3 className="font-normal">100% Organic</h3>
                  <p className="text-sm text-gray-600">
                    Guaranteed fresh and organic vegetables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* relative product  */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-10 pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[100px] md:pr-[100px] xl:pl-[300px] xl:pr-[300px] font-poppins">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Related Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FeaturedProduct.map((product) => (
            <div key={product.id} className="relative border p-4 rounded-lg">
              {product.sale && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                  Sale 50%
                </span>
              )}
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-poppins mb-2">{product.name}</h3>
                <div className="flex justify-center items-center space-x-2 mb-4">
                  {/* <span className="text-md font-semibold text-green-600">
                    ${product.oldPrice.toFixed(2)}
                  </span> */}
                  {product.price && (
                    <span className="text-sm text-gray-500">
                      {product.price} <del>{product.oldPrice}</del>
                    </span>
                  )}
                </div>
                <div className="flex justify-between mx-5 space-x-4">
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600">
                    <AiOutlineHeart size={20} />
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-green-600">
                    <BsCartPlusFill size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default CartDetails;
