import React from 'react';
import { Link } from 'react-router-dom';

// Import your local images
import newCreationsImg from '../assets/images/page3Home.jpg';
import bestSellersImg from '../assets/images/page2Home.png';
import sweetTreatsImg from '../assets/images/page3Home.png';
import discountsImg from '../assets/images/page4Home.png';

const categories = [
  {
    label: 'NEW CREATIONS',
    image: newCreationsImg,
    route: '/new-creations'
  },
  {
    label: 'BEST SELLERS',
    image: bestSellersImg,
    route: '/best-sellers'
  },
  {
    label: 'SWEET TREATS',
    image: sweetTreatsImg,
    route: '/sweets'
  },
  {
    label: 'DISCOUNTS',
    image: discountsImg,
    route: '/discounts'
  },
];
const Category = () => {
  return (
    <section className="bg-[#FFF5E1] pt-8 pb-16 px-24 sm:px-12 lg:px-8">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10 tracking-widest text-[#C6B05D]">
        SHOP BY CATEGORY
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1300px] mx-auto ">
        {categories.map(({ label, image, route }, index) => (
          <Link
            key={index}
            to={route}
            className="bg-[#F6E9BB] rounded-2xl overflow-hidden flex flex-col items-center text-center aspect-square w-full group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer block"
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <img
                src={image}
                alt={label}
                className="w-full h-full object-fill transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="py-4 text-base sm:text-lg font-medium tracking-wide text-[#C6B05D] group-hover:text-white group-hover:bg-[#C6B05D] transition-all duration-200 w-full">
              {label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;