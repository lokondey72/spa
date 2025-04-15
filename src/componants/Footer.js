// components/Footer.js

import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa"; // Optional social icons
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <Link href="/">
            {/* <Image
            src="/Eurosespa-logo.png"
            alt="Eurosespa Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          /> */}
            <h4 className="text-3xl font-semibold hover:text-gray-500 text-emerald-600 mb-4">Eurosespa</h4>
          </Link>
          <p className="text-gray-400 text-sm">
            We provide the best wellness services to help you relax and
            rejuvenate. Our team is dedicated to offering a soothing experience
            tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm">
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

        {/* Contact Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact</h4>
          <ul className="text-gray-400 text-sm">
            <li>
              Email:{" "}
              <Link
                href="mailto:info@example.com"
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
              Location: 101, Gulshan Avenue, Road 37, House 101, Gulshan 2,
              Dhaka 1212, Bangladesh.
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col justify-center">
          <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/share/16A3MYTHnv"
              target="_blank"
              rel="noopener noreferrer"
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
              aria-label="Send message on Facebook Messenger"
            >
                <FaFacebookMessenger 
                size={24}
                className="text-gray-400 hover:text-emerald-400" 
                />
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex items-center justify-between mt-8 border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Eurosespa. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Developed By The &copy; {new Date().getFullYear()} Tahzglobal
          {/* <Link href="https://tahzglobal.com/" target="_blank" rel="noopener noreferrer">
          <Link/> */}
        </p>
      </div>
    </footer>
  );
}
