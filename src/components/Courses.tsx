import React from "react";

const Courses = () => {
  return (
    <div className="bg-white px-6 sm:px-12 lg:px-24 xl:px-40 py-16 text-black">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#E7E7E7] rounded-3xl shadow-lg p-6 sm:p-10 lg:p-15 overflow-hidden">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 sm:px-6 lg:px-10">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Official NestJS Courses
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed lg:pr-12">
            Learn everything you need to master NestJS and tackle modern backend applications at any scale.
          </p>
          <button className="mt-6 sm:mt-8 mx-auto lg:mx-0 w-fit bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-3xl text-sm font-semibold tracking-wide border-2 border-transparent hover:bg-black hover:text-white hover:border-black transition-all">
            See courses
          </button>
        </div>

        {/* Images Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center h-64 sm:h-80 lg:h-[400px] mt-8 lg:mt-0">
          {/* Main Image */}
          <img
            src="/main.png"
            alt="main"
            className="w-[90%] sm:w-[100%] lg:w-[120%] object-cover scale-100 lg:scale-110 lg:translate-x-[25%] lg:translate-y-[10%] border-[6px] sm:border-[10px] lg:border-[12px] border-[#474747] rounded-tl-2xl rounded-bl-2xl lg:rounded-tl-3xl lg:rounded-bl-3xl z-50"
          />

          {/* Mini Image 1 */}
          <img
            src="/mini1.png"
            alt="mini1"
            className="absolute left-4 sm:left-0 bottom-4 sm:bottom-[4%] w-[20%] sm:w-[22%] lg:w-[25%] rounded-2xl z-10"
          />

          {/* Mini Image 2 */}
          <img
            src="/mini2.png"
            alt="mini2"
            className="absolute left-6 sm:left-0 bottom-24 sm:bottom-[47%] w-[18%] sm:w-[20%] lg:w-[22%] rounded-2xl z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
