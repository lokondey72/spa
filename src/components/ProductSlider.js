"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "Aroma Therapy", price: "₹1200" },
  { id: 2, name: "Swedish Massage", price: "₹1500" },
  { id: 3, name: "Hot Stone Therapy", price: "₹1800" },
  { id: 4, name: "Deep Tissue Massage", price: "₹1700" },
  { id: 5, name: "Body Scrub", price: "₹1400" },
  { id: 6, name: "Foot Massage", price: "₹1300" },
  { id: 7, name: "Facial Glow", price: "₹1100" },
  { id: 8, name: "Back Therapy", price: "₹1250" },
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
              className="p-2 rounded-full bg-white border shadow hover:bg-emerald-100 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white border shadow hover:bg-emerald-100 transition"
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
