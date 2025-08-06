import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';

const BeveragesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

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

  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFF5E1] via-[#F6E9BB] to-[#C6B05D] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#C6B05D] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider">
              ✨ LATEST ARRIVALS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6B05D] mb-6 tracking-wide">
              NEW CREATIONS
            </h1>
            <p className="text-lg sm:text-xl text-[#C6B05D]/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover our latest innovative treats, crafted with unique flavors and premium ingredients. 
              Each creation tells a story of culinary artistry and passion.
            </p>
          </motion.div>
        </div>
      </section>

      <DividerSlowWaves />

      {/* Filter Section */}
      <section className="bg-[#FEFEFE] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
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

      {/* Products Grid */}
      <section className="bg-[#FEFEFE] pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  product.featured ? 'ring-2 ring-[#C6B05D] ring-opacity-50' : ''
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
                    className="w-full h-64 object-cover"
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
                  <h3 className="text-xl font-bold text-[#C6B05D] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#C6B05D]">{product.price}</span>
                    <button className="bg-[#C6B05D] text-white px-6 py-2 rounded-full hover:bg-[#a08f4d] transition-colors duration-300 font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <DividerExtremeWaves />

      {/* Call to Action */}
      <section className="bg-[#F6E9BB] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#C6B05D] mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-[#C6B05D]/80 mb-8 leading-relaxed">
              We love creating custom treats! Contact us to discuss your special requirements 
              and we'll craft something unique just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#C6B05D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a08f4d] transition-colors duration-300">
                Custom Order
              </button>
              <button className="border-2 border-[#C6B05D] text-[#C6B05D] px-8 py-3 rounded-full font-semibold hover:bg-[#C6B05D] hover:text-white transition-all duration-300">
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

export default BeveragesPage;