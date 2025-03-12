from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict


app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TransactionBase(BaseModel):
    id: int
    name: str 
    oldPrice: float | None = None
    quantity: int
    image: str
    thumbnails: List[str]
    sale: str | None = None
    rating: int
    stock: str
    description: str
    brand: str
    sku: str 
    category: str
    tags: List[str]

fake_products_db = {
  "featured_products": [
    {
      "id": 101,
      "name": "Chinese Vegetables",
      "price": 20.28,
      "oldPrice": 48.0,
      "quantity": 1,
      "image": "/images/hot1.png",
      "thumbnails": [
        "/images/thumnail1.png",
        "/images/thumnail2.png",
        "/images/thumnail3.png",
        "/images/thumnail1.png",
        "/images/thumnail1.png",
        "/images/thumnail1.png"
      ],
      "sale": "54%",
      "rating": 5,
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 102,
      "name": "Chinese cabbage",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "image": "/images/hot2.png",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "rating": 4,
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 103,
      "name": "Green Lettuce",
      "price": 9.0,
      "quantity": 1,
      "oldPrice": None,
      "image": "/images/hot3.png",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "rating": 104,
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id":104,
      "name": "Eggplant",
      "price": 34.0,
      "quantity": 1,
      "oldPrice": None,
      "image": "/images/hot4.png",
      "rating": 3,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 105,
      "name": "Fresh Cauliflower",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "image": "/images/hot5.png",
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    }
  ],
  "popular_categories": [
    {
      "id": 201,
      "name": "Fresh Fruit",
      "image": "/image/image1.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 202,
      "name": "Fresh Vegetables",
      "image": "/image/image_1.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 203,
      "name": "Meat & Fish",
      "image": "/image/image_2.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 204,
      "name": "Snacks",
      "image": "/image/image_3.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 205,
      "name": "Beverages",
      "image": "/image/image_4.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 206,
      "name": "Beauty & Health",
      "image": "/image/image_5.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 207,
      "name": "Bread & Bakery",
      "image": "/image/image_6.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 208,
      "name": "Baking Needs",
      "image": "/image/image_7.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 209,
      "name": "Cooking",
      "image": "/image/image_8.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 210,
      "name": "Diabetic Food",
      "image": "/image/image_9.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 211,
      "name": "Dish Detergents",
      "image": "/image/image_10.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 212,
      "name": "Oil",
      "image": "/image/image_11.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 213,
      "name": "Dairy Products",
      "image": "/image/image_1.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 214,
      "name": "Frozen Items",
      "image": "/image/image_1.png",
      "price": 12.0,
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    }
  ],
  "popular_product": [
    {
      "id": 301,
      "price": 20.0,
      "quantity": 1,
      "name": "Green Apple",
      "image": "/image/apple.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 302,
      "price": 25.0,
      "name": "Fresh Indian Malta",
      "image": "/image/malta.png",
      "quantity": 1,
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 303,
      "price": 15.0,
      "name": "Chinese cabage",
      "image": "/image/cabbage.png",
      "oldPrice": None,
      "rating": 4,
      "quantity": 1,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 304,
      "price": 18.0,
      "name": "Green Lettuce",
      "image": "/image/lettuce.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "quantity": 1,
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 305,
      "price": 22.0,
      "name": "Eggplant",
      "image": "/image/eggplant.png",
      "oldPrice": None,
      "quantity": 1,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 306,
      "price": 30.0,
      "quantity": 1,
      "name": "Big Potatoes",
      "image": "/image/potatoes.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 307,
      "price": 12.0,
      "quantity": 1,
      "name": "Corn",
      "image": "/image/corn.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 308,
      "price": 28.0,
      "name": "Fresh Cauliflower",
      "image": "/image/cauliflower.png",
      "oldPrice": None,
      "quantity": 1,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 309,
      "price": 20.0,
      "name": "Green Capsicum",
      "image": "/image/capsicum.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "quantity": 1,
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 310,
      "price": 10.0,
      "name": "Green Chili",
      "image": "/image/chili.png",
      "oldPrice": None,
      "quantity": 1,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 311,
      "price": 35.0,
      "name": "Dish Detergents",
      "image": "/image/lettuce.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "quantity": 1,
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 312,
      "price": 50.0,
      "name": "Oil",
      "quantity": 1,
      "image": "/image/cabbage.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 313,
      "price": 22.0,
      "name": "Eggplant",
      "image": "/image/eggplant.png",
      "oldPrice": None,
      "rating": 4,
      "quantity": 1,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 314,
      "price": 40.0,
      "name": "Dairy Products",
      "image": "/image/corn.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "quantity": 1,
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    },
    {
      "id": 315,
      "price": 60.0,
      "quantity": 1,
      "name": "Frozen Items",
      "image": "/image/chili.png",
      "oldPrice": None,
      "rating": 4,
      "sale": "40%",
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
      "brand": "Farmunity",
      "sku": "2,51,594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
    }
  ],
  "hotDeals_product": [
    {
      "id": 401,
      "name": "Chinese cabbage",
      "price": 12.0,
      "oldPrice": 24.0,
      "image": "/images/hot1.png",
      "sale": "50%",
      "bestSale": True,
      "rating": 5,
      "reviews": 524,
      "featured": True,
      "quantity": 1,
      "thumbnails": [
        "/images/hot1.png",
        "/images/hot2.png",
        "/images/hot3.png",
        "/images/hot4.png"
      ],
      "stock": "In Stock",
      "description": "Fresh and organic Chinese cabbage, perfect for salads and stir-fry.",
      "brand": "Farmunity",
      "sku": "251594",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Cabbage", "Green"]
    },
    {
      "id": 402,
      "name": "Chinese cabbage",
      "price": 12.0,
      "image": "/images/hot2.png",
      "rating": 4,
      "quantity": 1,
      "thumbnails": ["/images/hot2.png"],
      "stock": "In Stock",
      "description": "A high-quality Chinese cabbage full of nutrition.",
      "brand": "Farmunity",
      "sku": "251595",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Cabbage"]
    },
    {
      "id": 403,
      "name": "Green Lettuce",
      "price": 9.0,
      "image": "/images/hot3.png",
      "rating": 4,
      "quantity": 1,
      "thumbnails": ["/images/hot3.png"],
      "stock": "In Stock",
      "description": "Crisp and fresh green lettuce for salads and sandwiches.",
      "brand": "Farmunity",
      "sku": "251596",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Lettuce"]
    },
    {
      "id": 404,
      "name": "Eggplant",
      "price": 34.0,
      "image": "/images/hot4.png",
      "rating": 4,
      "sale": "40%",
      "quantity": 1,
      "thumbnails": ["/images/hot4.png"],
      "stock": "In Stock",
      "description": "Premium quality eggplants for delicious meals.",
      "brand": "Farmunity",
      "sku": "251597",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Eggplant"]
    },
    {
      "id": 405,
      "name": "Fresh Cauliflower",
      "price": 12.0,
      "image": "/images/hot5.png",
      "rating": 4,
      "quantity": 1,
      "thumbnails": ["/images/hot5.png"],
      "stock": "In Stock",
      "description": "Fresh cauliflower for a nutritious diet.",
      "brand": "Farmunity",
      "sku": "251598",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Cauliflower"]
    },
    {
      "id": 406,
      "name": "Green Capsicum",
      "price": 9.0,
      "oldPrice": 20.99,
      "sale": "50%",
      "image": "/images/hot6.png",
      "rating": 4,
      "quantity": 1,
      "thumbnails": ["/images/hot6.png"],
      "stock": "In Stock",
      "description": "Crisp and fresh green capsicum, ideal for cooking and salads.",
      "brand": "Farmunity",
      "sku": "251599",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Capsicum"]
    },
    {
      "id": 407,
      "name": "Green Chili",
      "price": 34.0,
      "image": "/images/hot7.png",
      "rating": 3,
      "sale": "40%",
      "quantity": 1,
      "thumbnails": ["/images/hot7.png"],
      "stock": "In Stock",
      "description": "Spicy and fresh green chilies for adding heat to your dishes.",
      "brand": "Farmunity",
      "sku": "251600",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chili"]
    },
    {
      "id": 408,
      "name": "Big Potatoes",
      "price": 12.0,
      "image": "/images/hot8.png",
      "rating": 2,
      "quantity": 1,
      "thumbnails": ["/images/hot8.png"],
      "stock": "In Stock",
      "description": "Large and fresh potatoes, perfect for a variety of dishes.",
      "brand": "Farmunity",
      "sku": "251601",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Potatoes"]
    },
    {
      "id": 409,
      "name": "Corn",
      "price": 12.0,
      "image": "/images/hot9.png",
      "rating": 5,
      "reviews": 524,
      "sale": "40%",
      "quantity": 1,
      "thumbnails": ["/images/hot9.png"],
      "stock": "In Stock",
      "description": "Sweet and juicy corn, perfect for grilling or boiling.",
      "brand": "Farmunity",
      "sku": "251602",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Corn"]
    },
    {
      "id": 410,
      "name": "Red Chili",
      "price": 12.0,
      "image": "/images/hot1.png",
      "rating": 4,
      "quantity": 1,
      "thumbnails": ["/images/hot1.png"],
      "stock": "In Stock",
      "description": "Fresh red chilies to spice up your meals.",
      "brand": "Farmunity",
      "sku": "251603",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Chili"]
    },
    {
      "id": 411,
      "name": "Red Tomatoes",
      "price": 9.0,
      "oldPrice": 20.99,
      "sale": "50%",
      "image": "/images/hot5.png",
      "rating": 5,
      "quantity": 1,
      "thumbnails": ["/images/hot5.png"],
      "stock": "In Stock",
      "description": "Juicy and fresh red tomatoes for cooking and salads.",
      "brand": "Farmunity",
      "sku": "251604",
      "category": "Vegetables",
      "tags": ["Vegetables", "Healthy", "Tomatoes"]
    },
    {
      "id": 412,
      "name": "Surjipur Mango",
      "price": 34.0,
      "reviews": 524,
      "image": "/images/hot6.png",
      "rating": 4,
      "quantity": 1,
      "thumbnails": ["/images/hot6.png"],
      "stock": "In Stock",
      "description": "Sweet and delicious Surjipur mangoes, perfect for summer treats.",
      "brand": "Farmunity",
      "sku": "251605",
      "category": "Fruits",
      "tags": ["Fruits", "Healthy", "Mango"]
    }
  ],

  "testimonial": [
    {
      "name": "Robert Fox",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/client1.png",
      "rating": 5
    },
    {
      "name": "Dianne Russell",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/hot2.png",
      "rating": 5
    },
    {
      "name": "Dianne Russell",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/client2.png",
      "rating": 5
    },
    {
      "name": "Dianne Russell",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/hot4.png",
      "rating": 5
    },
    {
      "name": "Dianne Russell",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/hot3.png",
      "rating": 5
    },
    {
      "name": "Dianne Russell",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/hot1.png",
      "rating": 5
    },
    {
      "name": "Eleanor Pena",
      "role": "Customer",
      "review": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      "image": "/images/client3.png",
      "rating": 5
    }
  ],
  "all_product":[
    
      {
        "id": 101,
        "name": "Chinese Vegetables",
        "price": 20.28,
        "oldPrice": 48.0,
        "quantity": 1,
        "image": "/images/hot1.png",
        "thumbnails": [
          "/images/thumnail1.png",
          "/images/thumnail2.png",
          "/images/thumnail3.png",
          "/images/thumnail1.png",
          "/images/thumnail1.png",
          "/images/thumnail1.png"
        ],
        "sale": "54%",
        "rating": 5,
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 102,
        "name": "Chinese cabbage",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "image": "/images/hot2.png",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "rating": 4,
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 103,
        "name": "Green Lettuce",
        "price": 9.0,
        "quantity": 1,
        "oldPrice": None,
        "image": "/images/hot3.png",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "rating": 104,
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 104,
        "name": "Eggplant",
        "price": 34.0,
        "quantity": 1,
        "oldPrice": None,
        "image": "/images/hot4.png",
        "rating": 3,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 105,
        "name": "Fresh Cauliflower",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "image": "/images/hot5.png",
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },

    

    {
        "id": 301,
        "price": 20.0,
        "quantity": 1,
        "name": "Green Apple",
        "image": "/image/apple.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 302,
        "price": 25.0,
        "name": "Fresh Indian Malta",
        "image": "/image/malta.png",
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 303,
        "price": 15.0,
        "name": "Chinese cabage",
        "image": "/image/cabbage.png",
        "oldPrice": None,
        "rating": 4,
        "quantity": 1,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 304,
        "price": 18.0,
        "name": "Green Lettuce",
        "image": "/image/lettuce.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "quantity": 1,
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 305,
        "price": 22.0,
        "name": "Eggplant",
        "image": "/image/eggplant.png",
        "oldPrice": None,
        "quantity": 1,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 306,
        "price": 30.0,
        "quantity": 1,
        "name": "Big Potatoes",
        "image": "/image/potatoes.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 307,
        "price": 12.0,
        "quantity": 1,
        "name": "Corn",
        "image": "/image/corn.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 308,
        "price": 28.0,
        "name": "Fresh Cauliflower",
        "image": "/image/cauliflower.png",
        "oldPrice": None,
        "quantity": 1,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 309,
        "price": 20.0,
        "name": "Green Capsicum",
        "image": "/image/capsicum.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "quantity": 1,
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 310,
        "price": 10.0,
        "name": "Green Chili",
        "image": "/image/chili.png",
        "oldPrice": None,
        "quantity": 1,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 311,
        "price": 35.0,
        "name": "Dish Detergents",
        "image": "/image/lettuce.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "quantity": 1,
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 312,
        "price": 50.0,
        "name": "Oil",
        "quantity": 1,
        "image": "/image/cabbage.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 313,
        "price": 22.0,
        "name": "Eggplant",
        "image": "/image/eggplant.png",
        "oldPrice": None,
        "rating": 4,
        "quantity": 1,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 314,
        "price": 40.0,
        "name": "Dairy Products",
        "image": "/image/corn.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "quantity": 1,
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 315,
        "price": 60.0,
        "quantity": 1,
        "name": "Frozen Items",
        "image": "/image/chili.png",
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
    

      {
        "id": 201,
        "name": "Fresh Fruit",
        "image": "/image/image1.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 202,
        "name": "Fresh Vegetables",
        "image": "/image/image_1.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 203,
        "name": "Meat & Fish",
        "image": "/image/image_2.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 204,
        "name": "Snacks",
        "image": "/image/image_3.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 205,
        "name": "Beverages",
        "image": "/image/image_4.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 206,
        "name": "Beauty & Health",
        "image": "/image/image_5.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 207,
        "name": "Bread & Bakery",
        "image": "/image/image_6.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 208,
        "name": "Baking Needs",
        "image": "/image/image_7.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 209,
        "name": "Cooking",
        "image": "/image/image_8.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 210,
        "name": "Diabetic Food",
        "image": "/image/image_9.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 211,
        "name": "Dish Detergents",
        "image": "/image/image_10.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 212,
        "name": "Oil",
        "image": "/image/image_11.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 213,
        "name": "Dairy Products",
        "image": "/image/image_1.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
      {
        "id": 214,
        "name": "Frozen Items",
        "image": "/image/image_1.png",
        "price": 12.0,
        "quantity": 1,
        "oldPrice": None,
        "rating": 4,
        "sale": "40%",
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
        "brand": "Farmunity",
        "sku": "2,51,594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"]
      },
    

    
    {
        "id": 401,
        "name": "Chinese cabbage",
        "price": 12.0,
        "oldPrice": 24.0,
        "image": "/images/hot1.png",
        "sale": "50%",
        "bestSale": True,
        "rating": 5,
        "reviews": 524,
        "featured": True,
        "quantity": 1,
        "thumbnails": [
          "/images/hot1.png",
          "/images/hot2.png",
          "/images/hot3.png",
          "/images/hot4.png"
        ],
        "stock": "In Stock",
        "description": "Fresh and organic Chinese cabbage, perfect for salads and stir-fry.",
        "brand": "Farmunity",
        "sku": "251594",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Cabbage", "Green"]
      },
      {
        "id": 402,
        "name": "Chinese cabbage",
        "price": 12.0,
        "image": "/images/hot2.png",
        "rating": 4,
        "quantity": 1,
        "thumbnails": ["/images/hot2.png"],
        "stock": "In Stock",
        "description": "A high-quality Chinese cabbage full of nutrition.",
        "brand": "Farmunity",
        "sku": "251595",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Cabbage"]
      },
      {
        "id": 403,
        "name": "Green Lettuce",
        "price": 9.0,
        "image": "/images/hot3.png",
        "rating": 4,
        "quantity": 1,
        "thumbnails": ["/images/hot3.png"],
        "stock": "In Stock",
        "description": "Crisp and fresh green lettuce for salads and sandwiches.",
        "brand": "Farmunity",
        "sku": "251596",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Lettuce"]
      },
      {
        "id": 404,
        "name": "Eggplant",
        "price": 34.0,
        "image": "/images/hot4.png",
        "rating": 4,
        "sale": "40%",
        "quantity": 1,
        "thumbnails": ["/images/hot4.png"],
        "stock": "In Stock",
        "description": "Premium quality eggplants for delicious meals.",
        "brand": "Farmunity",
        "sku": "251597",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Eggplant"]
      },
      {
        "id": 405,
        "name": "Fresh Cauliflower",
        "price": 12.0,
        "image": "/images/hot5.png",
        "rating": 4,
        "quantity": 1,
        "thumbnails": ["/images/hot5.png"],
        "stock": "In Stock",
        "description": "Fresh cauliflower for a nutritious diet.",
        "brand": "Farmunity",
        "sku": "251598",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Cauliflower"]
      },
      {
        "id": 406,
        "name": "Green Capsicum",
        "price": 9.0,
        "oldPrice": 20.99,
        "sale": "50%",
        "image": "/images/hot6.png",
        "rating": 4,
        "quantity": 1,
        "thumbnails": ["/images/hot6.png"],
        "stock": "In Stock",
        "description": "Crisp and fresh green capsicum, ideal for cooking and salads.",
        "brand": "Farmunity",
        "sku": "251599",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Capsicum"]
      },
      {
        "id": 407,
        "name": "Green Chili",
        "price": 34.0,
        "image": "/images/hot7.png",
        "rating": 3,
        "sale": "40%",
        "quantity": 1,
        "thumbnails": ["/images/hot7.png"],
        "stock": "In Stock",
        "description": "Spicy and fresh green chilies for adding heat to your dishes.",
        "brand": "Farmunity",
        "sku": "251600",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chili"]
      },
      {
        "id": 408,
        "name": "Big Potatoes",
        "price": 12.0,
        "image": "/images/hot8.png",
        "rating": 2,
        "quantity": 1,
        "thumbnails": ["/images/hot8.png"],
        "stock": "In Stock",
        "description": "Large and fresh potatoes, perfect for a variety of dishes.",
        "brand": "Farmunity",
        "sku": "251601",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Potatoes"]
      },
      {
        "id": 409,
        "name": "Corn",
        "price": 12.0,
        "image": "/images/hot9.png",
        "rating": 5,
        "reviews": 524,
        "sale": "40%",
        "quantity": 1,
        "thumbnails": ["/images/hot9.png"],
        "stock": "In Stock",
        "description": "Sweet and juicy corn, perfect for grilling or boiling.",
        "brand": "Farmunity",
        "sku": "251602",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Corn"]
      },
      {
        "id": 410,
        "name": "Red Chili",
        "price": 12.0,
        "image": "/images/hot1.png",
        "rating": 4,
        "quantity": 1,
        "thumbnails": ["/images/hot1.png"],
        "stock": "In Stock",
        "description": "Fresh red chilies to spice up your meals.",
        "brand": "Farmunity",
        "sku": "251603",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Chili"]
      },
      {
        "id": 411,
        "name": "Red Tomatoes",
        "price": 9.0,
        "oldPrice": 20.99,
        "sale": "50%",
        "image": "/images/hot5.png",
        "rating": 5,
        "quantity": 1,
        "thumbnails": ["/images/hot5.png"],
        "stock": "In Stock",
        "description": "Juicy and fresh red tomatoes for cooking and salads.",
        "brand": "Farmunity",
        "sku": "251604",
        "category": "Vegetables",
        "tags": ["Vegetables", "Healthy", "Tomatoes"]
      },
      {
        "id": 412,
        "name": "Surjipur Mango",
        "price": 34.0,
        "reviews": 524,
        "image": "/images/hot6.png",
        "rating": 4,
        "quantity": 1,
        "thumbnails": ["/images/hot6.png"],
        "stock": "In Stock",
        "description": "Sweet and delicious Surjipur mangoes, perfect for summer treats.",
        "brand": "Farmunity",
        "sku": "251605",
        "category": "Fruits",
        "tags": ["Fruits", "Healthy", "Mango"]
      }
    
  ]
}


@app.get("/products/featuredProducts",response_model=List[TransactionBase])
async def get_featuredProducts():
    return fake_products_db["featured_products"]

@app.get("/products/popularCategories",response_model=List[TransactionBase])
async def get_popularCategories():
    return fake_products_db["poppular_categories"]

@app.get("/products/popular_product",response_model=List[TransactionBase])
async def get_popular_product():
    return fake_products_db["popular_product"]

@app.get("/products/hotDeals_product",response_model=List[TransactionBase])
async def get_hotDeals_product():
    return fake_products_db["hotDeals_product"]


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)