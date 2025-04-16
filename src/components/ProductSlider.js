"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "Dry Massage", price: "3000 BDT" },
  { id: 2, name: "Oil Massage", price: "3500 BDT" },
  { id: 3, name: "Aromatherapy", price: "5500 BDT" },
  { id: 4, name: "Sensual Massage", price: "6000 BDT" },
  { id: 5, name: "Nuru Massage", price: "8000 BDT" },
  { id: 6, name: "Body To Body Massage", price: "9500 BDT" },
  { id: 7, name: "Four Hand Massage", price: "16500 BDT" },
  { id: 8, name: "Six Hand Massage", price: "26000 BDT" },
  { id: 9, name: "Haircut", price: "990 BDT" },
  { id: 10, name: "SHAVE", price: "9900 BDT" },
  { id: 11, name: "PEDICURE MANICURE", price: "5000 BDT" },
];

export default function ProductSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll logic with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          // When reached the end, reset to start
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          // Scroll normally
          scroll("right");
        }
      }
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          {/* <h2 className="text-2xl font-bold text-emerald-600">Our Services</h2> */}
          <div className="space-x-2 hidden sm:block">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full text-emerald-700 bg-white border shadow hover:bg-emerald-100 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full text-emerald-700 bg-white border shadow hover:bg-emerald-100 transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth custom-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] bg-white rounded-xl shadow p-4 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-emerald-600 font-medium mt-2">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
