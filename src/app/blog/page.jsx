import React from "react";
import LatestNews from "@/components/Home/LatestNews";

export default function page() {
  return (
    <div>
      <LatestNews />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img
              src="image1.jpg"
              alt="Post 1"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">Post 1</h2>
            <p>Content for post 1</p>
            <p>Details for post 1</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              See More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="image2.jpg"
              alt="Post 2"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">Post 2</h2>
            <p>Content for post 2</p>
            <p>Details for post 2</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              See More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="image3.jpg"
              alt="Post 3"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">Post 3</h2>
            <p>Content for post 3</p>
            <p>Details for post 3</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              See More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="image4.jpg"
              alt="Post 4"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">Post 4</h2>
            <p>Content for post 4</p>
            <p>Details for post 4</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              See More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="image5.jpg"
              alt="Post 5"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">Post 5</h2>
            <p>Content for post 5</p>
            <p>Details for post 5</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              See More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="image6.jpg"
              alt="Post 6"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">Post 6</h2>
            <p>Content for post 6</p>
            <p>Details for post 6</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
