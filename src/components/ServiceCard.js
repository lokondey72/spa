"use client";

import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp, IoCallSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

export default function ServiceCard({ img, price, title }) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
      {/* Image Full */}
      <div className="relative w-full h-72">
        <Image
          src={img || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm mt-1">{price}</p>
          <Link
            href="/choice"
            className="inline-block mt-3 bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-600 transition"
          >
            Book a Session
          </Link>
        </div>
      </div>

      {/* Hover contact icons */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 z-20">
        {/* WhatsApp */}
        <Link
          href="https://wa.me/+8801911552077"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <div className="bg-green-500 text-white p-2 m-2 rounded-full shadow-md hover:bg-green-600">
            <IoLogoWhatsapp className="w-5 h-5" />
          </div>
        </Link>

        {/* Messenger */}
        <Link
          href="https://www.facebook.com/messages/t/430567486797012"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send message on Facebook Messenger"
        >
          <div className="bg-blue-500 text-white p-2 m-2 rounded-full shadow-md hover:bg-blue-600">
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
          <div className="bg-emerald-500 text-white p-2 m-2 rounded-full shadow-md hover:bg-emerald-600">
            <IoCallSharp className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
