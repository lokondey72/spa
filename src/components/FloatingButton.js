"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801911552077", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+8801911552077");
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:left-6">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="
          bg-green-600 hover:bg-green-700 
          text-white p-4 rounded-full shadow-xl 
          transition duration-300 ease-in-out 
          animate-bounce
        "
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Phone Call Button */}
      <button
        onClick={handlePhoneClick}
        className="
          bg-emerald-600 hover:bg-emerald-700 
          text-white p-4 rounded-full shadow-xl 
          transition duration-300 ease-in-out 
          animate-bounce
        "
        aria-label="Call Us"
      >
        <PhoneCall className="w-5 h-5" />
      </button>
    </div>
  );
}
