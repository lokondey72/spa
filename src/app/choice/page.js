"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const products = [
  {
    title: "Massage Therapy",
    slug: "massage",
    price: "$29.99",
    image: "/tshirt.jpg",
  },
  {
    title: "Body Scrubs",
    slug: "hoodie",
    price: "$49.99",
    image: "/hoodie.jpg", // replace with actual image URL
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedProduct) {
      router.push(`/product/${selectedProduct}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Select a Product</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="product" className="text-gray-700 mb-2 block font-medium">
          Choose a product
        </label>
        <select
          id="product"
          value={selectedProduct}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-600"
        >
          <option value="">-- Select a Product --</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.title}
            </option>
          ))}
        </select>
        
        <button
          type="submit"
          className="mt-4 bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition"
        >
          View Product
        </button>
      </form>

      {/* Display the selected product's image (optional) */}
      {selectedProduct && (
        <div className="w-full relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          
        </div>
      )}
    </main>
  );
}
