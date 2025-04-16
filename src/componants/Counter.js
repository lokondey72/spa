"use client";
import { useEffect, useState } from "react";

export default function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total animation time (ms)
    const stepTime = 20; // interval between increments
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow">
      <h3 className="text-4xl font-bold text-emerald-600">{count}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}
