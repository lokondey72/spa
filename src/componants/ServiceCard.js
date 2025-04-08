"use client";
import Link from "next/link";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-emerald-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
      <Link
        href="/choice"
        className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition mt-5"
      >
        Book a Session
      </Link>
    </div>
  );
}
