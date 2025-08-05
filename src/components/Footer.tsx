import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F1F3F3] py-8 sm:py-10 flex flex-col items-center text-center px-4 sm:px-8">
      {/* Social Links */}
      <ul className="flex gap-4 sm:gap-6 mb-6">
        <li className="text-xl sm:text-2xl text-gray-700 hover:text-[#EA2862] transition-colors duration-300 cursor-pointer">
          <i className="fa-brands fa-linkedin"></i>
        </li>
        <li className="text-xl sm:text-2xl text-gray-700 hover:text-[#EA2862] transition-colors duration-300 cursor-pointer">
          <i className="fa-brands fa-x-twitter"></i>
        </li>
        <li className="text-xl sm:text-2xl text-gray-700 hover:text-[#EA2862] transition-colors duration-300 cursor-pointer">
          <i className="fa-brands fa-github"></i>
        </li>
      </ul>

      {/* Footer Text */}
      <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8 max-w-2xl">
        Released under the MIT License <br />
        Official NestJS Consulting{" "}
        <a
          href="#"
          className="text-[#EA2862] hover:text-black font-semibold transition-colors duration-300"
        >
          Trilon.io
        </a>{" "}
        <br />
        Copyright © 2017-2025{" "}
        <a
          href="#"
          className="text-[#EA2862] hover:text-black font-semibold transition-colors duration-300"
        >
          Kamil Mysliwiec
        </a>{" "}
        <br />
        Designed by{" "}
        <a
          href="#"
          className="text-[#EA2862] hover:text-black font-semibold transition-colors duration-300"
        >
          Jakub Staron
        </a>
        , hosted by{" "}
        <a
          href="#"
          className="text-[#EA2862] hover:text-black font-semibold transition-colors duration-300"
        >
          Netlify
        </a>{" "}
        <br />
        <a
          href="#"
          className="text-[#EA2862] hover:text-black font-semibold transition-colors duration-300"
        >
          中文说明
        </a>
      </p>
    </div>
  );
};

export default Footer;
