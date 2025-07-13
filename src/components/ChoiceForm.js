// components/ChoiceForm.js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import Image from "next/image";

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
    image: "/Oil-massage-2.jpeg",
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
    image: "/Sensual-massage-2.jpeg",
  },
  {
    title: "Nuru Massage",
    slug: "Nuru",
    price: "8000 BDT",
    image: "/Nuru-massage-2.jpeg",
  },
  {
    title: "Body To Body Massage",
    slug: "BodyToBody",
    price: "9500 BDT",
    image: "/Body-to-body-massage-2.jpeg",
  },
  {
    title: "Four Hand Massage",
    slug: "FourHand",
    price: "16500 BDT",
    image: "/Four-hand-massage-2.jpeg",
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
    title: "Shave",
    slug: "SHAVE",
    price: "590 BDT",
    image: "/SHAVE-START-1.jpg",
  },
  {
    title: "Deluxe Manicure",
    slug: "MANICURE",
    price: "1200 BDT",
    image: "/MANICURE-only.jpg",
  },
  {
    title: "Deluxe Pedicure",
    slug: "PEDICURE",
    price: "1200 BDT",
    image: "/PEDICURE-MANICURE-1.jpg",
  },
];

export default function ChoiceForm() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const slug = searchParams.get("slug");
    if (slug) setSelectedProduct(slug);
  }, [searchParams]);

  const isValidPhone = /^01[3-9]\d{8}$/.test(phone);
  const selected = products.find((p) => p.slug === selectedProduct);

  const handleChange = (e) => setSelectedProduct(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!selectedProduct || !name || !phone || !date) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!isValidPhone) {
      setErrorMessage("Enter a valid Bangladeshi phone number.");
      return;
    }

    const templateParams = {
      user_name: name,
      user_phone: phone,
      product_title: selected.title,
      product_price: selected.price,
      booking_date: date,
    };

    setLoading(true);
    try {
      await emailjs.send(
        "service_w9knxc5",
        "template_jdqw4hc",
        templateParams,
        "QERWsEvphT4m9EDd_"
      );
      alert("Booking info sent successfully!");
      setName("");
      setPhone("");
      setDate("");
      setSelectedProduct("");
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
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

      {selected && (
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-[400px] relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="w-full mx-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <p className="font-semibold text-2xl text-emerald-700">
              {selected.title}
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
                placeholder="01XXXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Booking Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]} // sets today as minimum date
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <p className="text-gray-500">{selected.price}</p>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              {loading ? "Sending..." : "Confirm Booking"}
            </button>
          </div>
        </div>
      )}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}
