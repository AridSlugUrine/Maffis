import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerSlowWavesP1 from '../Components/DividerSlowWavesP1';

const NewCreationsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  const newCreations = [
    {
      id: 1,
      name: "Lavender Honey Cake",
      price: "$32.99",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "floral",
      description: "A delicate cake infused with lavender and drizzled with local honey",
      isNew: true,
      featured: true
    },
    {
      id: 2,
      name: "Matcha White Chocolate Tart",
      price: "$28.99",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "matcha",
      description: "Japanese-inspired tart with premium matcha and white chocolate ganache",
      isNew: true
    },
    {
      id: 3,
      name: "Salted Caramel Cronut",
      price: "$8.99",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "pastry",
      description: "Our signature croissant-donut hybrid with salted caramel filling",
      isNew: true
    },
    {
      id: 4,
      name: "Rose Gold Macarons",
      price: "$24.99",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "macarons",
      description: "Elegant rose-flavored macarons with edible gold dust (set of 12)",
      isNew: true,
      featured: true
    },
    {
      id: 5,
      name: "Ube Cheesecake Slice",
      price: "$12.99",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "cheesecake",
      description: "Purple yam cheesecake with graham crust and coconut whip",
      isNew: true
    },
    {
      id: 6,
      name: "Pistachio Rose Eclair",
      price: "$9.99",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "pastry",
      description: "Choux pastry filled with pistachio cream and rose water glaze",
      isNew: true
    }
  ];

  const filters = ['all', 'floral', 'matcha', 'pastry', 'macarons', 'cheesecake'];

  const filteredProducts = selectedFilter === 'all'
    ? newCreations
    : newCreations.filter(product => product.category === selectedFilter);

  const handleOrderNow = () => {
    setIsContactPanelOpen(true);
  };

  const handleCustomOrder = () => {
    setIsContactPanelOpen(true);
  };

  const handleContactUs = () => {
    setIsContactPanelOpen(true);
  };

  return (
    <div className="relative">
      <Navbar 
        isContactPanelOpen={isContactPanelOpen} 
        setIsContactPanelOpen={setIsContactPanelOpen}
      />

      <section
        className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/11/95/5f/11955fb53a6927d3ddbdf3ca23eb7eb6.jpg')",
        }}
      >
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <span className="inline-block bg-[#C6B05D] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider">
              ✨ LATEST ARRIVALS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C6B05D] mb-6 tracking-wide break-words">
              NEW CREATIONS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8 break-words">
              Discover our latest innovative treats, crafted with unique flavors and premium ingredients. Each creation tells a story of culinary artistry and passion.
            </p>
          </motion.div>
        </div>
      </section>

      <DividerSlowWavesP1/>

      <section className="bg-[#FEFEFE] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedFilter === filter
                  ? 'bg-[#C6B05D] text-white shadow-lg'
                  : 'bg-[#F6E9BB] text-[#C6B05D] hover:bg-[#C6B05D] hover:text-white'
                  }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FEFEFE] pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ring-2 ring-[#C6B05D] ring-opacity-50' : ''
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 sm:h-64 md:h-72 object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-[#C6B05D] text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {product.featured && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#C6B05D] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed break-words">{product.description}</p>

                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#C6B05D]">{product.price}</span>
                    <button 
                      onClick={handleOrderNow}
                      className="mt-2 sm:mt-0 bg-[#C6B05D] text-white px-5 py-2 rounded-full hover:bg-[#a08f4d] transition-colors duration-300 font-medium"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <DividerExtremeWaves />

      <section className="bg-[#F6E9BB] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C6B05D] mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#C6B05D]/80 mb-8 leading-relaxed">
              We love creating custom treats! Contact us to discuss your special requirements and we'll craft something unique just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleCustomOrder}
                className="bg-[#C6B05D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a08f4d] transition-colors duration-300"
              >
                Custom Order
              </button>
              <button 
                onClick={handleContactUs}
                className="border-2 border-[#C6B05D] text-[#C6B05D] px-8 py-3 rounded-full font-semibold hover:bg-[#C6B05D] hover:text-white transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewCreationsPage;