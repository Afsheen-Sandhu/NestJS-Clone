import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#EBEBEB] px-6 sm:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Left Section (Text) */}
      <div className="max-w-2xl text-center lg:text-left">
        <h6 className="text-lg sm:text-xl font-semibold text-black mb-2">
          Subscribe to our newsletter
        </h6>
        <p className="text-sm sm:text-base text-gray-600">
          Subscribe to stay up to date with the latest Nest updates, features, and videos!
        </p>
      </div>

      {/* Right Section (Input & Button) */}
      <div className="flex w-full sm:w-auto max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-black placeholder-gray-400"
        />
        <button className="bg-[#ED1543] text-white px-6 py-3 rounded-r-lg hover:bg-white hover:text-[#ED1543] transition-all">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
