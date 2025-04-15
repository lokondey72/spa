"use client";

import Head from "next/head";
import Image from "next/image";
import { useDataStore } from '@/store/useDataStore'

export default function ProductPage() {
  const data = useDataStore(state => state.data)

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta
          name="description"
          content="Premium wireless headphones with noise-cancellation and 30-hour battery life."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Product Image */}
          <div className="w-full relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/product.jpg"
              alt="Wireless Headphones"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Wireless Noise-Cancelling Headphones
            </h1>
            <p className="text-gray-600 mb-6">
              Elevate your audio experience with immersive sound, all-day
              comfort, and long-lasting battery life.
            </p>
            <div className="text-2xl font-bold text-rose-600 mb-6">$149.99</div>
            <button className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition">
              Add to Cart
            </button>

            {/* Specs */}
            <ul className="mt-8 text-gray-700 text-sm space-y-2 list-disc list-inside">
              <li>Bluetooth 5.2</li>
              <li>Active Noise Cancellation</li>
              <li>Up to 30 Hours Battery</li>
              <li>USB-C Fast Charging</li>
              <li>Touch Controls</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
