import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white px-6 sm:px-12 lg:px-24 py-8 gap-8 lg:gap-10">
      {/* Left Gradient Card */}
      <div
        className="w-full lg:w-1/2 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
        style={{
          background: "linear-gradient(180deg, #0E0E10 0%, #200E15 100%)",
        }}
      >
        {/* Top Section */}
        <div className="flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 py-8 h-[50%]">
          <h1 className="text-2xl sm:text-3xl font-semibold">Deploy, mau!</h1>
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            Provision and manage your infrastructure on AWS without the hassle and extra DevOps work.
          </p>
          <button className="mt-6 sm:mt-8 mb-4 sm:mb-6 bg-white text-black px-4 sm:px-6 py-2 rounded-3xl border-4 border-transparent hover:bg-black hover:text-white hover:border-white transition-all">
            Start now
          </button>
        </div>

        {/* Bottom Section */}
        <div className="relative h-40 sm:h-56 lg:h-[50%] flex justify-center items-end">
          <img
            src="/img13.png"
            alt="Decor"
            className="w-[90%] sm:w-[100%] lg:w-[120%] object-cover scale-100 lg:scale-110 lg:-translate-y-[20%] lg:translate-x-[40%] border-[6px] sm:border-[10px] lg:border-[12px] border-[#1C1C1E] rounded-tl-2xl lg:rounded-tl-3xl"
          />
        </div>
      </div>

      {/* Right Card */}
      <div className="w-full lg:w-1/2 rounded-3xl shadow-lg overflow-hidden flex flex-col bg-[#EE1744]">
        {/* Top Section */}
        <div className="flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 py-8 h-[50%] text-white">
          <h1 className="text-2xl sm:text-3xl font-semibold">Explore your graph</h1>
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            Identify dependencies and connections between modules, and dive deep into the inner workings of your classes.
          </p>
          <button className="mt-6 sm:mt-8 mb-4 sm:mb-6 bg-white text-black px-4 sm:px-6 py-2 rounded-3xl border-4 border-transparent hover:bg-black hover:text-white hover:border-white transition-all">
            Learn More
          </button>
        </div>

        {/* Bottom Section */}
        <div className="relative h-40 sm:h-56 lg:h-[50%] flex justify-center items-end">
          <img
            src="/img14.png"
            alt="Right"
            className="w-[90%] sm:w-[100%] lg:w-[120%] object-cover scale-100 lg:scale-110 lg:-translate-y-[20%] lg:translate-x-[40%] border-[6px] sm:border-[10px] lg:border-[12px] border-[#EF254F] rounded-tl-2xl lg:rounded-tl-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
