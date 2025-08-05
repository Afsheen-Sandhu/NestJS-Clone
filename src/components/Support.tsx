import React from 'react';

const Support = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black px-6 sm:px-12 lg:px-16 py-12 sm:py-20 lg:py-24 space-y-12 sm:space-y-16">
      {/* Title and Description */}
      <div className="text-center max-w-2xl px-2">
        <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Support us</h5>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Nest is an MIT-licensed open-source project. Hence, it grows thanks to the sponsors and
          support by the amazing backers. Please, consider supporting us!
        </p>
      </div>

      {/* Principal Sponsors */}
      <div className="text-center w-full">
        <h6 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Principal Sponsors</h6>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
          {['/s1.png', '/s2.png', '/s3.png', '/s4.svg'].map((src, index) => (
            <li key={index} className="w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20">
              <a href="">
                <img
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-full object-contain filter grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Gold Sponsors */}
      <div className="text-center w-full">
        <h6 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Gold Sponsors</h6>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {[
            '/s5.svg', '/s6.png', '/s7.png', '/s8.png', '/s9.svg',
            '/s10.png', '/s11.svg', '/s12.svg', '/s13.svg', '/s14.png'
          ].map((src, index) => (
            <li key={index} className="w-20 h-14 sm:w-24 sm:h-16 lg:w-28 lg:h-16">
              <a href="">
                <img
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-full object-contain filter grayscale brightness-150 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
