"use client";

import React from "react";
import Link from "next/link";

export default function VipLounge() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-emerald-400 font-bold mb-6 text-center">
          VIP Lounge
        </h1>
        <p className="text-lg text-gray-200 text-center mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-emerald-300">EuRose Spa</span>, where relaxation meets elegance.
          <br />
          Our exclusive VIP Lounge package is specially designed for <span className="italic">film actresses, TV stars, TikTok models</span>, and rising new models
          seeking a delightful and memorable experience.
          <br /><br />
          Enjoy premium body massage services in a luxurious spa setting — perfect for spending quality time in comfort, beauty, and style.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition shadow-lg"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
