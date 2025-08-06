import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, Users, Palette, Heart } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerSlowWavesP1 from '../Components/DividerSlowWavesP1';

const SpecialsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
    const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
const handleOrderNow = () => {
    setIsContactPanelOpen(true);
  };
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

  // Get first 3 products for showcase
  const showcaseProducts = filteredProducts.slice(0, 3);

  const customOrderFeatures = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Personalized Design",
      description: "Choose colors, themes, and decorations that match your vision"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Custom Flavors",
      description: "Mix and match flavors to create your perfect taste combination"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Any Size",
      description: "From intimate gatherings to grand celebrations, we scale to fit"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timing",
      description: "Order with confidence - we work with your schedule"
    }
  ];

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
              ✨ YOU NAME IT , WE MAKE IT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C6B05D] mb-6 tracking-wide break-words">
              CUSTOM ORDER
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8 break-words">
              Bring your dreams to life with our custom creations. From concept to completion, we craft unique treats tailored specifically to your vision and taste.
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

      {/* Main Showcase Section */}
      <section className="bg-[#FEFEFE] pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Cards Showcase */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#C6B05D] mb-4">
                  Custom Creation Examples
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Get inspired by some of our recent custom creations. Every piece is uniquely designed and crafted to perfection.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {showcaseProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ring-2 ring-[#C6B05D] ring-opacity-50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full sm:w-32 h-32 object-cover"
                        />
                        {product.featured && (
                          <span className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            ⭐
                          </span>
                        )}
                      </div>
                      <div className="p-4 flex-1">
                        <h3 className="text-lg font-bold text-[#C6B05D] mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-[#C6B05D]">{product.price}</span>
                          <span className="px-2 py-1 bg-[#F6E9BB] text-[#C6B05D] rounded-full text-xs font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Custom Order Details */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#C6B05D] mb-6">
                  Why Choose Custom Orders?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  At Maffi's Cafe, we believe every celebration deserves something special. Our custom orders allow you to create the perfect treat that reflects your unique style, taste preferences, and occasion requirements.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {customOrderFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-[#F6E9BB]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#F6E9BB] rounded-full flex items-center justify-center">
                      <div className="text-[#C6B05D]">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#C6B05D] mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="bg-gradient-to-r from-[#F6E9BB] to-[#F6E9BB]/50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#C6B05D] mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    "Share your vision and requirements with us",
                    "Receive a detailed quote and timeline",
                    "Approve the design and place your order",
                    "We craft your custom creation with love"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#C6B05D] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-[#C6B05D] font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Order Now Button */}
          <motion.div 
            className="text-center mt-16"
            onClick={handleOrderNow}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#C6B05D] to-[#D4C470] text-white px-16 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(198, 176, 93, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🎨 START YOUR CUSTOM ORDER
            </motion.button>
            <p className="text-[#C6B05D]/70 text-sm mt-4 font-medium max-w-md mx-auto">
              Ready to bring your dream dessert to life? Let's create something extraordinary together!
            </p>
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
              Questions About Custom Orders?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#C6B05D]/80 mb-8 leading-relaxed">
              Our team is here to help you create the perfect custom treat. Get in touch and let's discuss your vision!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#C6B05D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a08f4d] transition-colors duration-300">
                Schedule Consultation
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

export default SpecialsPage;