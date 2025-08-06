import React from "react";
import heroImg from "../assets/images/hero_2.png"

const Carousel = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen">
      <img
        src={heroImg}
        alt="Delicious bakery banner with cakes and pastries"
        className="absolute inset-0 w-full h-full object-fill overflow-hidden"
        loading="lazy"
      /> 
      {/* Optional overlay content */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg">Welcome to Maffi's Bakery</h2>
      </div> */}
    </section>
  );
};

export default Carousel;
