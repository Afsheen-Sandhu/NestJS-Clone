import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 bg-white text-black rounded-lg shadow-md w-full max-w-sm">
      <img
        className="h-12 sm:h-14 md:h-16 mb-4 object-contain"
        src={image}
        alt={title}
      />
      <h3 className="text-base sm:text-lg md:text-xl uppercase font-semibold text-black mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-[1rem] text-center leading-6 sm:leading-7">
        {description}
      </p>
    </div>
  );
};

export default Card;
