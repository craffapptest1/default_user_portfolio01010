"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiDownload, FiMail } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/skills", label: "Skills" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              portfolio01010
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/resume"
              className="flex items-center text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
            >
              <FiDownload className="mr-2 w-4 h-4" />
              Resume
            </Link>
            <Link
              href="/contact"
              className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiMail className="mr-2 w-4 h-4" />
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-lg transition-all duration-300 hover:bg-indigo-50"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-indigo-600 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50 transform hover:translate-x-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <Link
                href="/resume"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-indigo-600 hover:text-indigo-700 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
              >
                <FiDownload className="mr-2 w-4 h-4" />
                Resume
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg"
              >
                <FiMail className="mr-2 w-4 h-4" />
                Hire Me
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;