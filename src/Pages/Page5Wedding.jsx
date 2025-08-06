import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerSlowWavesP1 from '../Components/DividerSlowWavesP1';

const WeddingPage = () => {
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

  // Get first 3 products for the stacked card display
  const displayProducts = filteredProducts.slice(0, 3);
const handleOrderNow = () => {
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
              ✨ CUSTOM MADE SPECIALLY FOR A SPECIAL DAY
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C6B05D] mb-6 tracking-wide break-words">
              WEDDING CAKES
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8 break-words">
              Discover our latest innovative treats, crafted with unique flavors and premium ingredients. Each creation tells a story of culinary artistry and passion.
            </p>
          </motion.div>
        </div>
      </section>

      <DividerSlowWavesP1/>

      {/* Filter Section */}
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

      {/* Stacked Cards Section */}
      <section className="bg-[#FEFEFE] pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Cards Stack Container */}
          <div className="relative flex justify-center items-center h-[500px] sm:h-[600px] mb-12">
            {displayProducts.map((product, index) => {
              const rotations = ['-8deg', '2deg', '6deg'];
              const zIndexes = [1, 2, 3];
              const translations = [
                { x: -30, y: 20 },
                { x: 0, y: 0 },
                { x: 30, y: -15 }
              ];
              
              return (
                <motion.div
                  key={product.id}
                  className="absolute w-72 sm:w-80 md:w-96"
                  style={{ 
                    zIndex: zIndexes[index],
                    transform: `rotate(${rotations[index]}) translate(${translations[index].x}px, ${translations[index].y}px)`
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: rotations[index],
                    x: translations[index].x,
                    y: translations[index].y
                  }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 10,
                    rotate: '0deg',
                    x: 0,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-[#C6B05D]/20 hover:border-[#C6B05D]/50 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 sm:h-56 object-cover"
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

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#C6B05D] mb-3">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-[#C6B05D]">{product.price}</span>
                        <div className="px-3 py-1 bg-[#F6E9BB] text-[#C6B05D] rounded-full text-xs font-medium">
                          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Big Order Now Button */}
          <motion.div 
            className="text-center"
            onClick={handleOrderNow}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#C6B05D] to-[#D4C470] text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(198, 176, 93, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🎂 ORDER NOW
            </motion.button>
            <p className="text-[#C6B05D]/70 text-sm mt-4 font-medium">
              Ready to make your special day even sweeter?
            </p>
          </motion.div>

          {/* Additional Products Indicator */}
          {filteredProducts.length > 3 && (
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-[#C6B05D]/60 text-sm">
                +{filteredProducts.length - 3} more options available
              </p>
            </motion.div>
          )}
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
              <button onClick={handleOrderNow} className="bg-[#C6B05D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a08f4d] transition-colors duration-300">
                Custom Order
              </button>
              <button onClick={handleOrderNow} className="border-2 border-[#C6B05D] text-[#C6B05D] px-8 py-3 rounded-full font-semibold hover:bg-[#C6B05D] hover:text-white transition-all duration-300">
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

export default WeddingPage;