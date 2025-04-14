"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w9knxc5", // Replace with your Service ID
        "template_4zvyqaz", // Replace with your Template ID
        form.current,
        "QERWsEvphT4m9EDd_" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <main className="min-h-screen py-26 px-4 sm:px-6 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-10">
          We’d love to hear from you! Whether you have a question about
          services, pricing, or anything else — our team is ready to help.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-center space-x-3">
            <FaPhoneAlt className="text-emerald-600 text-xl" />
            <span className="text-gray-700 text-lg">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-emerald-600 text-xl" />
            <span className="text-gray-700 text-lg">support@eurosespa.com</span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/+8801911552077" // change number here (no + or dashes)
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-full text-lg font-medium hover:bg-emerald-700 transition"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          Chat on WhatsApp
        </Link>
      </div>

      {/* Optional: Contact Form */}
      <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-600 mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </main>
  );
}
