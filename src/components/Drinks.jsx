import React from "react";

const categories = [
  {
    title: "Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tea",
    image: "https://images.unsplash.com/photo-1584270354949-1e6fd9f0f463?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lemonade",
    image: "https://images.unsplash.com/photo-1580910051070-cf7c4c1a8b3a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smoothies",
    image: "https://images.unsplash.com/photo-1582719478173-999b6a6c0660?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Drinks() {
  return (
    <section className="relative h-72 sm:h-80 md:h-96 bg-black overflow-hidden">
      {/* Dimmed preview grid */}
      <div className="absolute inset-0 bg-black bg-opacity-80">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-12 px-8 mx-auto opacity-10 bg-secondary">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-primary-light rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <div
                className="h-48 md:h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="p-5 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl font-serif italic text-brown tracking-wide">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay message */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mb-2">
          Drinks
        </h2>
        <p className="text-sm sm:text-base md:text-lg italic text-gray-300">
          Coming Soon
        </p>
      </div>
    </section>
  );
}
