import React from "react";
import { Link } from 'react-router-dom'; // Add this import for routing

import weddingImg from '../assets/images/page5Home.png';
import birthdayImg from '../assets/images/page6Home.png';
import specialsImg from '../assets/images/page7Home.png';
import beveragesImg from '../assets/images/page5Home.png';
import cmImg from '../assets/images/comingSoon.png';

const products = [
  {
    name: "WEDDING CAKES",
    image:weddingImg,
    route: '/wedding'
  },
  {
    name: "BIRTHDAY CAKES",
    image:birthdayImg,
    route: '/birthday'
  },
  {
    name: "CUSTOMIZED / SPECIAL CAKES",
    image:specialsImg,
    route: '/specials'
  },
  {
    name: "BEVERAGES",
    image:cmImg,
    route: '/beverages'
  },
];

export default function Products() {
  return (
    <section className="py-16 px-24 sm:px-6 lg:px-8 bg-[#F9EAF6]">
      <div className="max-w-[1300px] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[#C48500]">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          > <Link 
              to={product.route}
              className="py-4 text-base sm:text-lg font-medium tracking-wide text-[#C6B05D] hover:text-white  transition-all duration-200 w-full block text-center"
            >
                   <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
                
              />
            </div> 
             <div className="mt-4">
              <h3 className="text-base sm:text-lg font-semibold leading-tight">
                {product.name}
              </h3>
            </div>
            </Link>
       
          
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-12">
        <button className="bg-white text-[#C48500] border border-[#C48500] px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full hover:bg-[#C48500] hover:text-white transition-all duration-300">
          View All Products
        </button>
      </div>
    </section>
  );
}
