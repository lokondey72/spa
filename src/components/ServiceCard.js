"use client";

import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp, IoCallSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

export default function ServiceCard({ img, price, title, slug }) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
      {/* Image */}
      <div className="relative w-full h-72">
        <Image
          src={img || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover contact icons (always visible on mobile) */}
        <div className="absolute top-4 right-2 opacity-100 sm:opacity-0 group-hover:sm:opacity-100 transition-opacity duration-300 space-y-2 z-20">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/+8801911552077"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <div className="bg-green-500 text-white p-4 m-5 rounded-full shadow-md hover:bg-green-600">
              <IoLogoWhatsapp className="w-5 h-5" />
            </div>
          </Link>

          {/* Messenger */}
          <Link
            href="https://m.me/www.facebook.com/messages/t/430567486797012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send message on Facebook Messenger"
          >
            <div className="bg-blue-500 text-white p-4 m-5 rounded-full shadow-md hover:bg-blue-600">
              <FaFacebookMessenger className="w-5 h-5" />
            </div>
          </Link>

          {/* Phone Call */}
          <Link
            href="tel:+8801911552077"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Call phone number"
          >
            <div className="bg-emerald-500 text-white p-4 m-5 rounded-full shadow-md hover:bg-emerald-600">
              <IoCallSharp className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Info content outside image */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-400">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{price}</p>
        {/* <Link
          href="/choice"
          className="inline-block mt-3 bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-600 transition"
        >
          Book a Session
        </Link> */}
        <Link
          href={`/choice?slug=${slug}`}
          className="inline-block mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Book a Session
        </Link>
      </div>
    </div>
  );
}
