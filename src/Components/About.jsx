import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerExtremeOpp from '../Components/DividerExtremeOpp';
import DividerSlowWavesopp from '../Components/DividerslowWavesopp';

const About = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-900 via-pink-800 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif"
          >
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-rose-200 font-light italic max-w-4xl mx-auto leading-relaxed"
          >
            Where Art Meets Indulgence: Bespoke Cakes for the Moments That Matter
          </motion.h2>
        </div>
      </div>

      <DividerExtremeOpp />
      {/* Main Content Section */}
      <div className="py-20 px-2">
        <div className="w-full mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Content - 70% width */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-rose-100 mr-4">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
                  Welcome to <span className="text-rose-600">Maffi's</span> in collaboration with <span className="text-pink-600">Maria's cake</span>
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Toronto's luxurious yet affordable cakes atelier born from the passion and creativity. Every piece we create is more than dessert, it's our poetic expression, crafted with refined artistry, intricate florals, and captivating flavor profiles that linger on the senses.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Rooted in heritage and elevated with imagination, each creation is lovingly made using <span className="font-bold text-rose-700">only the finest halal ingredients</span>, ensuring purity, elegance, and exceptional taste for every occasion.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Celebrate love, beauty, and the sweetest moments with a masterpiece that feels as personal as it does unforgettable.
                </p>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🌹</span>
                    <h4 className="text-2xl font-bold text-gray-800">Now booking for all events</h4>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    Let us create something extraordinary for you.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📧</span>
                      <a 
                        href="mailto:maffiscafe@gmail.com" 
                        className="text-lg text-rose-600 hover:text-rose-800 transition-colors underline font-semibold"
                      >
                        maffiscafe@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <a 
                        href="https://wa.me/14373830286" 
                        className="text-lg text-rose-600 hover:text-rose-800 transition-colors font-semibold"
                      >
                        WhatsApp 437-383-0286
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Section - 25% width */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/4 w-full"
            >
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-rose-100">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Cake Creation Process"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
               
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

  

    </div>
      <DividerSlowWavesopp />
    <Footer/>
    </div>
  );
};

export default About;