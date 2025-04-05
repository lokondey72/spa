"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-emerald-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 leading-tight">
            Relax. Refresh. Rejuvenate.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the ultimate relaxation experience with our professional
            body massage therapy. Escape the stress and treat yourself today.
          </p>

          <div className="mt-6">
            <Link
              href="/book"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src="/spa-massage_img.jpg"
            alt="Massage therapy"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
