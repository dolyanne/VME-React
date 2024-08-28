import React, { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
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
          <ul className="hidden md:flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#42066b] hover:text-[#42066b] hover:border-b-2 border-[#42066b]"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('product-plan')}
                className="text-[#210335] hover:text-[#42066b] hover:border-b-2 border-[#42066b]"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-[#210335] hover:text-[#42066b] hover:border-b-2 border-[#42066b]"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-[#210335] hover:text-[#42066b] hover:border-b-2 border-[#42066b]"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#210335] hover:text-[#42066b] hover:border-b-2 border-[#42066b]"
              >
                Contact
              </button>
            </li>
          </ul>
          <ul
            className={`md:hidden absolute top-full left-0 w-full bg-gray-900 py-2 space-y-2 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <button
                onClick={() => {
                  scrollToSection('home');
                  toggleMenu();
                }}
                className="block text-white px-10 hover:text-[#42066b]"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('product-plan');
                  toggleMenu();
                }}
                className="block text-white px-10 hover:text-[#42066b]"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('pricing');
                  toggleMenu();
                }}
                className="block text-white px-10 hover:text-[#42066b]"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('testimonials');
                  toggleMenu();
                }}
                className="block text-white px-10 hover:text-[#42066b]"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  toggleMenu();
                }}
                className="block text-white px-10 hover:text-[#42066b]"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
