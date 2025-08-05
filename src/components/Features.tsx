import React from "react";

const Features = () => {
  return (
    <div className="mt-12 px-6 sm:px-12 lg:px-24 xl:px-40 py-12 min-h-[70vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F8F8F8] text-[#000000]">
      {/* Feature 1 */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-6 sm:space-y-8">
        <img className="h-16 sm:h-20" src="/image1.svg" alt="Extensible" />
        <h3 className="text-xl sm:text-2xl font-bold text-[#EA2862]">Extensible</h3>
        <p className="text-sm sm:text-base md:text-[1.15rem] text-center max-w-xs">
          Provides unparalleled flexibility through its meticulously crafted modular architecture.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-6 sm:space-y-8">
        <img className="h-16 sm:h-20" src="/image2.svg" alt="Versatile" />
        <h3 className="text-xl sm:text-2xl font-bold text-[#EA2862]">Versatile</h3>
        <p className="text-sm sm:text-base md:text-[1.15rem] text-center max-w-xs">
          Serves as a robust, elegant, and well-structured foundation for all kinds of server-side applications.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-6 sm:space-y-8">
        <img className="h-16 sm:h-20" src="/image3.svg" alt="Progressive" />
        <h3 className="text-xl sm:text-2xl font-bold text-[#EA2862]">Progressive</h3>
        <p className="text-sm sm:text-base md:text-[1.15rem] text-center max-w-xs">
          Introduces design patterns and well-established solutions to the Node.js landscape.
        </p>
      </div>
    </div>
  );
};

export default Features;
