"use client";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login/logout
  const [isOpen, setIsOpen] = useState(false);

  // Check if the user is logged in from localStorage when the component mounts
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // If logged in, log out and redirect to GlobalStartupCampus
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
      window.location.href = "/GlobalStartUpCampus"; // Redirect to GlobalStartUpCampus page
    } else {
      // If logged out, log in and redirect to Homepage
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      window.location.href = "/Homepage"; // Redirect to Homepage
    }
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center group transition-all ease-in-out duration-300"
            >
              <img
                src="/Logo.svg"
                alt="SC Startup Campus Logo"
                className="h-14 w-auto group-hover:scale-110 group-hover:shadow-lg transition-all ease-in-out duration-300"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { href: "#about", text: "About us" },
              { href: "#events", text: "Upcoming Events" },
              { href: "#gallery", text: "Gallery" },
              { href: "#founders", text: "Founders" },
              { href: "#team", text: "Team Members" },
              { href: "#contact", text: "Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-800 hover:text-[#103045] transition-all ease-in-out duration-200"
              >
                {item.text}
              </a>
            ))}
            <button
              onClick={handleAuthAction}
              className="bg-[#103045] text-white px-4 py-2 rounded-full hover:bg-[#0d2635] transition-all ease-in-out duration-200"
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#103045] focus:outline-none"
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
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all ease-in-out duration-300`}
      >
        <div className="space-y-1 px-2 pb-3">
          {[
            { href: "#about", text: "About us" },
            { href: "#events", text: "Upcoming Events" },
            { href: "#gallery", text: "Gallery" },
            { href: "#founders", text: "Founders" },
            { href: "#team", text: "Team Members" },
            { href: "#contact", text: "Contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block text-gray-800 hover:text-[#103045] transition-all ease-in-out duration-200"
            >
              {item.text}
            </a>
          ))}
          <button
            onClick={handleAuthAction}
            className="w-full bg-[#103045] text-white px-4 py-2 rounded-md hover:bg-[#0d2635] transition-all ease-in-out duration-200"
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>
    </nav>
  );
};
