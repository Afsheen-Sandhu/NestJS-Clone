import React from 'react';

const Offerings = () => {
 return (
   <div className="relative w-full bg-[#ED1543] overflow-hidden min-h-screen md:min-h-auto">
     {/* Background Image stays original size */}
     <img
       src="/redcat.png"
       alt="Red Cat"
       className="object-contain w-full h-auto md:w-auto md:h-auto"
     />

     {/* Text Section (responsive positioning and sizing) */}
     <div className="absolute top-8 left-5 right-5 md:top-1/4 md:right-5 md:left-auto md:pr-70 w-[90%] md:w-[60%] text-white">
       <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
         The open source platform designed for the future.
      Build enterprise.
       </h4>
       <p className="mt-4 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
         A complete development kit for building scalable server-side apps. Contact us to
         find out more about expertise consulting, on-site enterprise support, trainings,
         and private sessions.
       </p>
       <button className="mt-6 md:mt-12 bg-white text-[#ED1543] px-6 py-3 md:px-10 md:py-5 rounded-4xl font-semibold border-2 border-transparent text-base md:text-l hover:bg-transparent hover:text-white hover:border-white transition-all">
         Learn more about support offerings
       </button>
     </div>
   </div>
 );
};

export default Offerings;