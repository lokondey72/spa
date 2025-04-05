// components/Footer.js

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Optional social icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Company</h4>
          <p className="text-gray-400 text-sm">
            We provide the best wellness services to help you relax and rejuvenate.
            Our team is dedicated to offering a soothing experience tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm">
            <li><a href="/services" className="hover:text-emerald-400">Services</a></li>
            <li><a href="/about" className="hover:text-emerald-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-emerald-400">Contact</a></li>
            <li><a href="/faq" className="hover:text-emerald-400">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact</h4>
          <ul className="text-gray-400 text-sm">
            <li>Email: <a href="mailto:info@example.com" className="hover:text-emerald-400">info@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-emerald-400">+1 (234) 567-890</a></li>
            <li>Location: 123 Wellness St, Relax City</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col justify-center">
          <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-gray-400 hover:text-emerald-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-gray-400 hover:text-emerald-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-400 hover:text-emerald-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-400 hover:text-emerald-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
