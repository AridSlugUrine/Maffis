import React from "react";

const products = [
  {
    title: "Chocolate Chip Cookies",
    price: "$12.00",
    image:
      "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNha2VzfGVufDB8fDB8fHww",
  },
  {
    title: "Strawberry Cake",
    price: "$28.00",
    image:
      "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNha2VzfGVufDB8fDB8fHww",
  },
  {
    title: "Croissants",
    price: "$15.00",
    image:
      "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNha2VzfGVufDB8fDB8fHww",
  },
  {
    title: "Macarons Box",
    price: "$20.00",
    image:
      "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNha2VzfGVufDB8fDB8fHww",
  },
];

export default function Products() {
  return (
    <section className="bg-accent-light py-12 px-6 sm:px-12 md:px-16">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            <div className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div
                className="h-48 sm:h-56 md:h-64 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg sm:text-xl font-serif italic text-primary mb-1">
                {product.title}
              </h3>
              <p className="text-sm sm:text-base text-primary font-medium">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
          <h2 className="text-center text-3xl sm:text-4xl font-serif mb-10 text-brown-dark">
        <button className="mt-6 bg-secondary text-primary item-centre border-primary outline-solid outline-primary px-10 py-3 rounded-full font-medium hover:bg-primary/90 transition animate-fade-in-up delay-500 shadow">
                      View All Products
                    </button>
      </h2>
    </section>
  );
}
