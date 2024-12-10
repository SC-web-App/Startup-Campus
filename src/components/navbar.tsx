"use client";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 p-2 rounded-sm"
            >
              <div className="bg-blue-900 text-white font-bold text-xl px-2 py-1 rounded-sm transition-all duration-300 ease-in-out hover:scale-105">
                SC
              </div>
              <span className="ml-2 font-semibold text-gray-800 text-lg transition-all duration-300 ease-in-out transform hover:text-blue-900">
                STARTUP CAMPUS
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              About us
            </a>
            <a
              href="#events"
              className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Upcoming Events
            </a>
            <a
              href="#gallery"
              className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Gallery
            </a>
            <a
              href="#startups"
              className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Startups
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Team Members
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </a>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
              Log out
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="space-y-1 px-2 pb-3">
          <a
            href="#about"
            className=" px-3 block text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About us
          </a>
          <a
            href="#events"
            className="px-3 block text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Upcoming Events
          </a>
          <a
            href="#gallery"
            className="px-3  block text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Gallery
          </a>
          <a
            href="#startups"
            className="px-3  block text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Startups
          </a>
          <a
            href="#team"
            className="px-3  block text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Team Members
          </a>
          <a
            href="#contact"
            className="px-3  block text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
          <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out transform ">
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};
