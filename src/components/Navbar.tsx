"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <a href="/" className="flex items-center space-x-2">
            <span>TrekPack</span>
          </a>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/bag"
            className="hover:text-gray-200 transition duration-300"
          >
            Mon sac
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-gray-300 transition duration-300"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white px-4 pt-4 pb-4 space-y-2 transition-all duration-300">
          <a
            href="/bag"
            className="block hover:text-gray-200 px-3 py-2 rounded-md"
          >
            Mon sac
          </a>
        </div>
      )}
    </nav>
  );
}
