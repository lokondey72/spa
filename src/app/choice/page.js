"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";
import BookingForm from "./BookingForm";
import ChoiceContent from "./ChoiceContent";

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
    title: "Aroma Therapy Massage",
    slug: "Aromatherapy",
    price: "5500 BDT",
    image: "/Aroma-Therapy-Massage-1.jpg",
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

// app/choice/page.js
export const dynamic = "force-dynamic";

export default function ChoicePage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const slug = searchParams.get("slug");
    if (slug) {
      setSelectedProduct(slug);
    }
  }, [searchParams]);

  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedProduct || !name || !phone || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const product = products.find((p) => p.slug === selectedProduct);

    const templateParams = {
      user_name: name,
      user_phone: phone,
      product_title: product.title,
      product_price: product.price,
      booking_date: date,
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
        setDate("");
        setSelectedProduct("");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <main className="max-w-6xl mx-auto min-h-screen pt-20 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold mt-8 text-emerald-700">
        Select a Service
      </h1>
      <Suspense fallback={<div className="p-8 text-lg">Loading...</div>}>
        <BookingForm />
      </Suspense>

      <form onSubmit={handleSubmit} className="mb-5 space-y-4">
        <div>
          <label className="text-gray-500 mb-2 block font-medium">
            Choose a Service
          </label>
          <select
            value={selectedProduct}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-600"
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
              <p className="font-semibold text-2xl text-emerald-700">
                {products.find((p) => p.slug === selectedProduct).title}
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-500">
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
                <label className="block text-sm font-medium text-gray-500">
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
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Booking Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
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
