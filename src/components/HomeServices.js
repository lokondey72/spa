"use client";

import Slider from "react-slick";
import Image from "next/image";

const services = [
  {
    title: "Swedish Massage",
    description: "Relax your body and mind with classic Swedish techniques.",
    image: "/Six-hand-massage-1.jpg",
  },
  {
    title: "Haircut Start",
    description: "Target deeper layers of muscle and connective tissue.",
    image: "/Haircut-Start.jpg",
  },
  {
    title: "Oil massage",
    description: "Warm stones to ease muscle tension and boost circulation.",
    image: "/Oil-massage-2.jpeg",
  },
  {
    title: "Aromatherapy",
    description: "Essential oils to calm, uplift, or energize your mood.",
    image: "/Aromatherapy-1.jpg",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function HomeServices() {
  return (
    <main className="py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold mb-10 text-center text-emerald-700">
        Our Services
      </h1>

      <Slider {...sliderSettings}>
        {services.map((service, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden md:flex items-center">
              <div className="relative w-full md:w-1/2 h-64 md:h-96">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-2xl font-semibold text-rose-600 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-base">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}
