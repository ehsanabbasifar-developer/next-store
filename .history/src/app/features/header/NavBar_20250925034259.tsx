"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">MyStore</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-lg">
        <Link
          href="/products"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Products
        </Link>
        <a
          href="/about"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Contact
        </a>
        <a
          href="/cart"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Cart
        </a>
        <a
          href="/signin"
          className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Sign In
        </a>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed inset-0 bg-white z-20 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-800">MyStore</div>
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-2xl mt-8">
          <li>
            <a
              onClick={toggleMenu}
              href="/products"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </a>
          </li>
          <li>
            <a
              onClick={toggleMenu}
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={toggleMenu}
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              onClick={toggleMenu}
              href="/cart"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Cart
            </a>
          </li>
          <li>
            <a
              onClick={toggleMenu}
              href="/signin"
              className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
