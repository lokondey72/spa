"use client";

import { MessageCircle } from "lucide-react"; // or any icon you like

export default function FloatingButton() {
  const handleClick = () => {
    // Replace with your desired action, e.g., scroll to top, open modal, WhatsApp link
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <button
        onClick={handleClick}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition duration-300 ease-in-out"
        aria-label="Chat with us"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
