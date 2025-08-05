import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen text-white px-6 pt-24 md:px-[10%] md:pt-[10%] flex flex-col justify-center">
      {/* Text Section */}
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Hello, nest!
        </h1>
        <p className="text-base sm:text-lg md:text-[1.3rem] max-w-xl mx-auto md:mx-0 font-medium">
          A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-12 text-center sm:text-left">
        <button className="bg-[#EA2862] px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium
          hover:bg-black hover:text-[#EA2862] hover:border-[#EA2862] border-4 border-transparent transition-all">
          Documentation
        </button>

        <button className="border-4 border-transparent px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium
          hover:text-[#EA2862] hover:border-[#EA2862] transition-all">
          <i className="fa-brands fa-github pr-3"></i>
          Source Code
        </button>
      </div>
    </div>
  );
};

export default Hero;
