"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const OpenStatus = () => {
  // Set opening and closing time (24-hour format)
  const openingHour = 9; // 9 AM
  const closingHour = 21; // 9 PM

  // Set days open (0 = Sunday, 6 = Saturday)
  const openDays = [1, 2, 3, 4, 5, 6, 7]; // Monday to Friday

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDay = now.getDay();

      const openNow =
        openDays.includes(currentDay) &&
        currentHour >= openingHour &&
        currentHour < closingHour;

      setIsOpen(openNow);
    };

    checkOpenStatus();

    // Optional: update every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-center p-4 rounded-xl shadow-md text-black ${
        isOpen ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h2 className="text-xl font-semibold">
        {isOpen ? "🟢 We are Open now!" : "🔴 Sorry, We are Closed."}
      </h2>
      <p className="text-sm mt-1">Service hours: 9:00 AM – 9:00 PM </p>
      <h3 className="pt-5">
        {isOpen ? (
          <Link
            href="/choice"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
          >
            Book a Session
          </Link>
        ) : (
          <p className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition">
            Try Tomorrow
          </p>
        )}
      </h3>
    </div>
  );
};

export default OpenStatus;
