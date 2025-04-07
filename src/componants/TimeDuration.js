"use client";

import OpenStatus from "./OpenStatus";
import Link from "next/link";

const TimeDuration = () => {
  return (
    <div className="container">
      {/* Time Duration */}
      <div className="py-5">
        <h1 className="text-2xl md:text-5xl font-bold text-emerald-700 leading-tight">
          Time Duration.
        </h1>
        <OpenStatus />

        {/* <div className="mt-6">
          <Link
            href="/book"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
          >
            Book
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default TimeDuration;
