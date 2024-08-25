import React, { useState } from 'react';

export default function Nav() {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="py-4 bg-white fixed top-0 w-full z-50">
        <div className="container mx-auto flex md:flex-col justify-between md:justify-center gap-4 items-center px-4 md:px-10 py-2">
          <a
            href="#"
            className="logo text-white md:text-2xl tracking-widest flex justify-center items-center uppercase font-bold"
          >
            <img
              src="/img/images/fulllogo_transparent_nobuffer.png"
              className="w-10 lg:w-20"
              alt="VME Logo"
            />
          </a>
          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden text-[#210335] focus:outline-none"
            onClick={toggleMenu}
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
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Main Navigation Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-[#210335] hover:text-pink-400 hover:border-b-2 border-pink-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product-plan"
                className="text-[#210335] hover:text-pink-400 hover:border-b-2 border-pink-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-[#210335] hover:text-pink-400 hover:border-b-2 border-pink-400"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-[#210335] hover:text-pink-400 hover:border-b-2 border-pink-400"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#210335] hover:text-pink-400 hover:border-b-2 border-pink-400"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile Menu */}
          <ul
            className={`md:hidden absolute top-full left-0 w-full bg-gray-900 py-2 space-y-2 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <a
                href="#home"
                className="block text-white px-10 hover:text-pink-400"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product-plan"
                className="block text-white px-10 hover:text-pink-400"
                onClick={toggleMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block text-white px-10 hover:text-pink-400"
                onClick={toggleMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block text-white px-10 hover:text-pink-400"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white px-10 hover:text-pink-400"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}