"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const products = [
  {
    title: "Dry Massage",
    slug: "Dry",
    price: "3000 BDT",
    image: "/Dry-massage-1.jpg",
  },
  {
    title: "Oil Massage",
    slug: "hoodie",
    price: "3500 BDT",
    image: "/Oil-massage-1.jpg",
  },
  {
    title: "Aromatherapy",
    slug: "Aromatherapy",
    price: "5500 BDT",
    image: "/Aromatherapy-1.jpg",
  },
  {
    title: "Sensual Massage",
    slug: "Sensual",
    price: "6000 BDT",
    image: "/Sensual-massage-1.jpg",
  },
  {
    title: "Nuru Massage",
    slug: "Nuru",
    price: "8000 BDT",
    image: "/Nuru-massage-1.jpg",
  },
  {
    title: "Body To Body Massage",
    slug: "BodyToBody",
    price: "9500 BDT",
    image: "/Body-to-body-massage-1.jpg",
  },
  {
    title: "Four Hand Massage",
    slug: "FourHand",
    price: "16500 BDT",
    image: "/Four-hand-massage-1.jpg",
  },
  {
    title: "Six Hand Massage",
    slug: "SixHand",
    price: "26000 BDT",
    image: "/Six-hand-massage-1.jpg",
  },
  {
    title: "Haircut",
    slug: "Haircut",
    price: "990 BDT",
    image: "/Haircut-Start.jpg",
  },
  {
    title: "SHAVE",
    slug: "SHAVE",
    price: "9900 BDT",
    image: "/SHAVE-START-1.jpg",
  },
  {
    title: "PEDICURE MANICURE",
    slug: "PEDICURE",
    price: "5000 BDT",
    image: "/PEDICURE-MANICURE-1.jpg",
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedProduct || !name || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const product = products.find((p) => p.slug === selectedProduct);

    const templateParams = {
      user_name: name,
      user_phone: phone,
      product_title: product.title,
      product_price: product.price,
    };

    emailjs
      .send(
        "service_w9knxc5", // ✅ your service ID
        "template_jdqw4hc", // ✅ your template ID
        templateParams,
        "QERWsEvphT4m9EDd_" // ✅ your public key
      )
      .then(() => {
        alert("Booking info sent successfully!");
        setName("");
        setPhone("");
        setSelectedProduct("");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <main className="max-w-6xl mx-auto min-h-screen pt-20 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold mt-8 text-gray-800">
        Select a Service
      </h1>

      <form onSubmit={handleSubmit} className="mb-5 space-y-4">
        <div>
          <label className="text-gray-700 mb-2 block font-medium">
            Choose a Service
          </label>
          <select
            value={selectedProduct}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-600"
          >
            <option value="">-- Select a Service --</option>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.title}
              </option>
            ))}
          </select>
        </div>

        {selectedProduct && (
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-[400px] relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={products.find((p) => p.slug === selectedProduct).image}
                alt={products.find((p) => p.slug === selectedProduct).title}
                fill
                className="w-full mx-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <p className="font-semibold text-gray-700">
                {products.find((p) => p.slug === selectedProduct).title}
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <p className="text-gray-500">
                {products.find((p) => p.slug === selectedProduct).price}
              </p>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </form>
    </main>
  );
}
