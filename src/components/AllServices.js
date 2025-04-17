"use client";

import ServiceCard from "@/src/components/ServiceCard";
import { Heart, Sparkles, Leaf, Hand, Flower2, Smile } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    title: "Dry Massage",
    slug: "Dry", // Add slug
    description:
      "Relax your muscles and mind with a soothing massage tailored to your needs.",
    price: "Price: 3000 BDT",
    image: "/Dry-massage-1.jpg",
  },
  {
    title: "Oil Massage",
    slug: "hoodie", // Add slug
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 3500 BDT",
    image: "/Oil-massage-1.jpg",
  },
  {
    title: "Aroma Therapy Massage",
    slug: "Aromatherapy", // Add slug
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 5500 BDT",
    image: "/Aroma-Therapy-Massage-1.jpg",
  },
  {
    title: "Sensual Massage",
    slug: "Sensual", // Add slug
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 6000 BDT",
    image: "/Sensual-massage-1.jpg",
  },
  {
    title: "Nuru Massage",
    slug: "Nuru", // Add slug
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 8000 BDT",
    image: "/Nuru-massage-1.jpg",
  },
  {
    title: "Body To Body Massage",
    slug: "BodyToBody",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 9500 BDT",
    image: "/Body-to-body-massage-1.jpg",
  },
  {
    title: "Four Hand Massage",
    slug: "FourHand",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 16500 BDT",
    image: "/Four-hand-massage-1.jpg",
  },
  {
    title: "Six Hand Massage",
    slug: "SixHand",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 26000 BDT",
    image: "/Six-hand-massage-1.jpg",
  },
  {
    title: "Haircut",
    slug: "Haircut",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 990 BDT",
    image: "/Haircut-Start.jpg",
  },
];

export default function AllServices() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-4">
          Our Services
        </h2>
        <p className="text-gray-500 mb-12">
          Experience relaxation and rejuvenation with our range of holistic
          therapies and treatments.
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 text-lg font-medium hover:text-emerald-600 transition-colors flex items-center gap-1 pb-5"
        >
          {isOpen ? (
            <>
              <X size={22} />
              Close
            </>
          ) : (
            <>
              <Menu size={22} />
              <Link
                href="/services"
              >
                 More
              </Link>
            </>
          )}
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              img={service.image}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
