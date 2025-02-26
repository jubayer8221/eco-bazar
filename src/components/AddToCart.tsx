"use client";
import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Product() {
  const [quantity, setQuantity] = useState(0); // Better state name and initial value
  const [cartItems, setCartItems] = useState(0); // To track actual cart items

  const productDetails = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is product 1",
      category: "Electronics",
      stock: 50,
      rating: 4.5,
      reviews: [
        { user: "Alice", comment: "Great product!", rating: 5 },
        { user: "Bob", comment: "Good value for money.", rating: 4 },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      description: "This is product 2",
      category: "Books",
      stock: 30,
      rating: 4.0,
      reviews: [
        { user: "Charlie", comment: "Interesting read.", rating: 4 },
        { user: "Dave", comment: "Could be better.", rating: 3 },
      ],
    },
  ];

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
    setCartItems((prev) => prev + 1);
  };

  const handleRemove = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    setCartItems((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const productStyle = {
    border: "1px solid",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={productStyle}>
      {productDetails.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}

      <div className="flex justify-center">
        <p>Cart Items: {cartItems}</p>
        <button
          onClick={handleRemove}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          disabled={quantity === 0}
        >
          -
        </button>
        <p>{quantity}</p>

        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <button
          onClick={handleAdd}
          className="text-white bg-[#00B207] pt-3 pb-3 px-8 py-8 rounded-full flex items-center justify-center gap-2 text-[14px] font-medium"
        >
          Add to Cart <HiOutlineShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
