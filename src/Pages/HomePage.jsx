import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import Products from '../Components/ProductsHome';
import Category from '../Components/CategoryHome';
import { motion } from 'framer-motion';
import Sopwithus from '../Components/Contact';
import Dividerhalf from '../Components/Dividerhalf';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerExtremeOpp from '../Components/DividerExtremeOpp';
import DividerSlowWavesopp from '../Components/DividerslowWavesopp';
import About from '../Components/About';
import LogoImg from "../assets/images/logo.png"
import flowerImg from "../assets/images/flowers.png"
import creationsImg from "../assets/images/creations.png"
import DividerSlowWavesP1 from '../Components/DividerSlowWavesP1';
import DividerSlowWavesP4 from '../Components/DividerSlowWavesP4';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='relative'>

 <Carousel />
      <DividerSlowWavesP4 />
      <Category />
      <DividerSlowWaves />
      <Products />

      {/* Animated Logos */}
      <section className="bg-[#D68AA8] py-12 sm:py-16 md:py-20 flex flex-wrap justify-center items-center gap-30 sm:gap-30">
       
         <motion.img
            key={1}
            src={LogoImg}
            alt={`Logo ${ 2}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 2 * 0.2, duration: 0.6 }}
            className="w-32 sm:w-42 md:w-54 lg:w-60 xl:w-68 object-contain"
          /> <motion.img
            key={2}
            src={LogoImg}
            alt={`Logo ${ 3}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 3 * 0.2, duration: 0.6 }}
            className="w-32 sm:w-42 md:w-54 lg:w-60 xl:w-68 object-contain"
          /> 
        
      </section>

      {/* Our Creations */}
      <section className="bg-[#FEFEFE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <img
              src={creationsImg}
              alt="Our Creations"
              className="rounded-xl w-full max-w-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#C48500]">Our Creations</h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#C48500] mb-6">
              What should we know about the product? <br />
              How is it made, how much does it cost, <br />
              what color and size is it? <br />
              Better descriptions result in more sales.
            </p>
           
          </div>
        </div>
      </section>

      <DividerExtremeWaves />
      <Sopwithus />
      <DividerExtremeOpp />

      <DividerSlowWavesopp />
      <Footer />
    </div>
      </div>
     
  );
};

export default HomePage;
