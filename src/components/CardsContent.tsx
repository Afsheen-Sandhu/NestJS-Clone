import React from "react";
import Card from "./Card";

const cardsData = [
  { image: "/img5.svg", title: "Modularity", description: "Streamline upkeep by organizing applications into self-contained modules." },
  { image: "/img6.svg", title: "Scalability", description: "Scale seamlessly with efficient, battle-tested components." },
  { image: "/img7.svg", title: "Dependency Injection", description: "Elevate testability with a sophisticated dependency injection system." },
  { image: "/img8.svg", title: "Type Safety", description: "Mitigate errors through the robust type safety features of TypeScript." },
  { image: "/img9.svg", title: "Rich Ecosystem", description: "Explore a rich ecosystem offering versatile tools to craft solutions tailored to your needs." },
  { image: "/img10.svg", title: "Enterprise-ready", description: "Trusted by thousands of leading companies and organizations worldwide." },
  { image: "/img11.svg", title: "Microservices", description: "Create loosely coupled, independently deployable services for increased agility and scalability." },
  { image: "/img12.svg", title: "Web Apps", description: "Build REST APIs, GraphQL APIs, Queues, and real-time & event-driven applications in no time." }
];

const CardsContent: React.FC = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-24 xl:px-40 2xl:px-60 py-16 bg-[#FAFAFA]">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
          Everything you need..
        </h3>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Build robust, powerful, and scalable server-side applications and stop reinventing the wheel.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContent;
