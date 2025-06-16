"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and CTA Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              portfolio01010
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting exceptional digital experiences through innovative design and development. 
              Let's bring your vision to life together.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Ready to collaborate?</p>
              <a
                href="mailto:hello@portfolio01010.com"
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-300 underline decoration-2 underline-offset-2"
              >
                Get in touch today
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <nav className="space-y-3">
              <Link
                href="/resume"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Resume
              </Link>
              <Link
                href="/testimonials"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Testimonials
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media and Contact */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-3 text-white">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="sr-only">GitHub</span>
                  <FiGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-pink-500 transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="sr-only">Dribbble</span>
                  <FaDribbble className="h-5 w-5" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="sr-only">Behance</span>
                  <FaBehance className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="sr-only">Twitter</span>
                  <FiTwitter className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@portfolio01010.com"
                  className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-red-500 transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="sr-only">Email</span>
                  <FiMail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                &copy; {currentYear} portfolio01010. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Designed & Built with passion
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to get notified about new projects and insights
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;