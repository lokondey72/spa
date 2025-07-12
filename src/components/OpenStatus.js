"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const OpenStatus = () => {
  // Updated service hours: 9 AM to 11 PM
  const openingHour = 9;
  const closingHour = 23;

  // Days open: 0 (Sunday) to 6 (Saturday)
  const openDays = [0, 1, 2, 3, 4, 5, 6];

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

    const interval = setInterval(checkOpenStatus, 60000); // check every minute
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
      <p className="text-sm mt-1">Service hours: 9:00 AM – 11:00 PM</p>
      <h3 className="pt-5">
        {isOpen ? (
          <Link
            href="/choice"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
          >
            Book a Session
          </Link>
        ) : (
          <span className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md opacity-50 cursor-not-allowed">
            Try Tomorrow
          </span>
        )}
      </h3>
    </div>
  );
};

export default OpenStatus;
