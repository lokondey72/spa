"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VipLounge() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/vip-lounge.jpeg"
            alt="VIP Lounge"
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl text-emerald-400 font-bold mb-4 text-center md:text-left">
            VIP Lounge
          </h1>

          <p className="text-base sm:text-lg text-gray-200 text-center md:text-left mb-8 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-emerald-300">EuRose Spa</span>,
            where relaxation meets elegance.
            <br />
            Our exclusive VIP Lounge package is specially designed for{" "}
            <span className="italic">
              film actresses, TV stars, TikTok models
            </span>
            , and rising new models seeking a delightful and memorable
            experience.
            <br />
            <br />
            Enjoy premium body massage services in a luxurious spa setting —
            perfect for spending quality time in comfort, beauty, and style.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/services"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition shadow-lg"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
}
