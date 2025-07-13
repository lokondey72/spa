"use client";

import ServiceCard from "@/src/components/ServiceCard";
import { Heart, Sparkles, Leaf, Hand, Flower2, Smile } from "lucide-react";

const services = [
  {
    title: "Dry Massage",
    slug: "Dry",
    description:
      "Relax your muscles and mind with a soothing massage tailored to your needs.",
    price: "Price: 3000 BDT",
    image: "/Dry-massage-1.jpg",
  },
  {
    title: "Oil Massage",
    slug: "hoodie",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 3500 BDT",
    image: "/Oil-massage-2.jpeg",
  },
  {
    title: "Aroma Therapy Massage",
    slug: "Aromatherapy",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 5500 BDT",
    image: "/Aroma-Therapy-Massage-1.jpg",
  },
  {
    title: "Sensual Massage",
    slug: "Sensual",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 6000 BDT",
    image: "/Sensual-massage-2.jpeg",
  },
  {
    title: "Nuru Massage",
    slug: "Nuru",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 8000 BDT",
    image: "/Nuru-massage-2.jpeg",
  },
  {
    title: "Body To Body Massage",
    slug: "BodyToBody",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 9500 BDT",
    image: "/Body-to-body-massage-2.jpeg",
  },
  {
    title: "Four Hand Massage",
    slug: "FourHand",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 16500 BDT",
    image: "/Four-hand-massage-2.jpeg",
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
  {
    title: "Shave",
    slug: "SHAVE",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 590 BDT",
    image: "/SHAVE-START-1.jpg",
  },
  {
    title: "Deluxe Manicure",
    slug: "MANICURE",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 2150 BDT",
    image: "/MANICURE-only.jpg",
  },
  {
    title: "Deluxe Pedicure",
    slug: "PEDICURE",
    description:
      "Essential oils and scents to calm the senses and rejuvenate your spirit.",
    price: "Price: 2150 BDT",
    image: "/PEDICURE-MANICURE-1.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-4">Services</h2>
        <p className="text-gray-500 mb-12">
          Experience relaxation and rejuvenation with our range of holistic
          therapies and treatments.
        </p>

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
