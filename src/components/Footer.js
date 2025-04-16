// components/Footer.js

import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Link href="/">
            <h4 className="text-2xl font-bold text-emerald-600 whitespace-nowrap">
              EuRose Spa
            </h4>
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            We provide the best wellness services to help you relax and
            rejuvenate. Our team is dedicated to offering a soothing experience
            tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <Link href="/services" className="hover:text-emerald-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-emerald-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              Email:{" "}
              <Link
                href="mailto:eurosespabd@gmail.com"
                className="hover:text-emerald-400"
              >
                eurosespabd@gmail.com
              </Link>
            </li>
            <li>
              Phone:{" "}
              <Link
                href="tel:+8801911552077"
                className="hover:text-emerald-400"
              >
                +880 1911-552077
              </Link>
            </li>
            <li>
              Location: Gulshan 2, Road 41, House 7/a, Dhaka 1212, Bangladesh.
            </li>
          </ul>
        </div>

        {/* Social Media */}
        {/* Social Media */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/share/16A3MYTHnv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={24}
                className="text-gray-400 hover:text-emerald-400"
              />
            </Link>
            <Link
              href="https://wa.me/+8801911552077"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp
                size={24}
                className="text-gray-400 hover:text-emerald-400"
              />
            </Link>
            <Link
              href="https://www.facebook.com/messages/t/430567486797012"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Messenger"
            >
              <FaFacebookMessenger
                size={24}
                className="text-gray-400 hover:text-emerald-400"
              />
            </Link>
            <Link
              href="tel:+8801911552077"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Call"
            >
              <IoCallSharp
                size={24}
                className="text-gray-400 hover:text-emerald-400"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center md:text-left md:flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} EuRose Spa. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Developed by{" "}
          <Link
            href="https://tahzglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400"
          >
            Tahzglobal
          </Link>
        </p>
      </div>
    </footer>
  );
}
