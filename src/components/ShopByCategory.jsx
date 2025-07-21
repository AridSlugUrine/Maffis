import React from "react";

const categories = [
  {
    title: "Cookies",
    image:
      "https://images.unsplash.com/photo-1611486212292-02b55dbbfb7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cakes",
    image:
      "https://images.unsplash.com/photo-1589308078055-0067d71aa6f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pastries",
    image:
      "https://images.unsplash.com/photo-1613145996964-15c2b65f09cc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pastries",
    image:
      "https://images.unsplash.com/photo-1613145996964-15c2b65f09cc?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ShopByCategory() {
  return (
    
    <section className="bg-secondary py-12 px-4">
 
      <h2 className="text-center text-3xl sm:text-4xl font-serif mb-10 text-primary">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-primary-light rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          >
            <div
              className="h-48 md:h-56 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>
            <div className="p-5 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-serif italic text-primary tracking-wide">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
