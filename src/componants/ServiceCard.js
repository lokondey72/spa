"use client";

export default function ServiceCard({ icon, title, description }) {
    
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-emerald-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  );
}
