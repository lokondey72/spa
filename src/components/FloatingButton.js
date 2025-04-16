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
    <>
      {/* WhatsApp Button - Right */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition duration-300 ease-in-out"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Phone Call Button - Left */}
      <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6">
        <button
          onClick={handlePhoneClick}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-xl transition duration-300 ease-in-out"
          aria-label="Call Us"
        >
          <PhoneCall className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
