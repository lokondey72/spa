"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ img, icon, title, description }) {
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
      <p className="mt-2 text-gray-600 text-sm">{description}</p>

      <Link
        href="/choice"
        className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition mt-5"
      >
        Book a Session
      </Link>

      {/* WhatsApp button appears on hover */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16.24 13.5c-.35-.17-2.07-1.02-2.39-1.13-.32-.11-.56-.17-.8.17-.23.35-.91 1.13-1.12 1.36-.2.23-.41.26-.76.09-.35-.17-1.47-.54-2.8-1.72-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.15-.15.35-.38.52-.58.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.08-.17-.76-1.83-1.05-2.5-.28-.67-.57-.58-.76-.59l-.64-.01c-.23 0-.6.08-.91.43-.3.35-1.18 1.15-1.18 2.8s1.21 3.25 1.38 3.48c.17.23 2.38 3.63 5.78 5.09.81.35 1.45.56 1.94.72.82.26 1.57.22 2.16.13.66-.1 2.07-.85 2.36-1.67.29-.83.29-1.54.2-1.67-.09-.13-.32-.21-.67-.38z"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
