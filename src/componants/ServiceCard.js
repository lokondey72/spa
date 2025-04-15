"use client";

import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp, IoCallSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

export default function ServiceCard({ img, price, title, description }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={img || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{price}</p>

      <Link
        href="/choice"
        className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition mt-5"
      >
        Book a Session
      </Link>

      {/* Hover buttons container */}
      <div className="absolute top-4 right-4 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        {/* WhatsApp button */}
        <Link
          href="https://wa.me/+8801911552077"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600">
            <IoLogoWhatsapp />
          </div>
        </Link>

        {/* Messenger button */}
        <Link
          href="https://www.facebook.com/messages/t/430567486797012"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600">
            <FaFacebookMessenger />
          </div>
        </Link>

        {/* Phone call button */}
        <Link
          href="tel:+8801911552077"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600">
            <IoCallSharp />
          </div>
        </Link>
      </div>
    </div>
  );
}
