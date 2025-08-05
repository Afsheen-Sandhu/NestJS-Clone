"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-20 flex items-center justify-between px-6 md:px-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img className="h-12 md:h-16" src="/logo.svg" alt="Logo" />
      </div>

      {/* Hamburger for Mobile */}
      <button 
        className="md:hidden text-3xl focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Nav Links */}
      <div className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-10 text-lg font-semibold uppercase tracking-wide p-4 md:p-0">
          <li className="hover:text-[#EA2862]">Documentation</li>
          <li className="hover:text-[#EA2862]">Enterprise</li>
          <li className="flex items-center space-x-2 hover:text-[#EA2862]">
            <div className="bg-red-800 text-white px-2 py-1 text-xs rounded">NEW</div>
            <span>Resource</span>
          </li>
          <li className="hover:text-[#EA2862] text-2xl">
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li className="hover:text-[#EA2862] text-2xl">
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li className="hover:text-[#EA2862] text-2xl">
            <i className="fa-brands fa-github"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
