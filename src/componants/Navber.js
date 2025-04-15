"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const Menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/">
          {/* <Image
            src="/Eurosespa-logo.png"
            alt="Eurosespa Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          /> */}
          <h4 className="text-3xl font-semibold text-gray-500 hover:text-emerald-600 transition-colors">
            Eurosespa
          </h4>
        </Link>

        {/* Desktop Nav Centered */}
        <div className="hidden md:flex items-center w-full relative">
          {/* Centered Nav */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-lg font-medium">
            {Menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className={`${
                  pathname === menu.href
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-500"
                } hover:text-emerald-600 transition-colors`}
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button on Right */}
          <div className="ml-auto">
            <Link
              href="/choice"
              className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Cart Icon */}
        {/* <Link
          href="/choice"
          className="text-2xl text-gray-700 hover:text-emerald-600 transition-colors md:ml-6"
        >
          <FaShoppingCart />
        </Link> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-500"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-lg font-semibold text-emerald-600">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-4">
          {Menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === menu.href
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-500"
              } hover:text-emerald-600 transition-colors text-lg`}
            >
              {menu.name}
            </Link>
          ))}
          <Link
            href="/choice"
            onClick={() => setIsOpen(false)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-emerald-700 transition mt-4"
          >
            Book Now
          </Link>
        </nav>
      </div>

      {/* Overlay behind mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  );
}
