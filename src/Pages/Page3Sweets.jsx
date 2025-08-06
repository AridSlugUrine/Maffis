import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerSlowWavesopp from '../Components/DividerslowWavesopp';
import DividerExtremeOppAbout from '../Components/DividerExtremeOppAbout';
import DividerHalf from '../Components/Dividerhalf';
import DividerSlowWavesP2 from '../Components/DividerSlowWavesP2';
import DividerSlowWavesP3 from '../Components/DividerSlowWavesP3';

const SeasonalPage = () => {
  const [selectedSeason, setSelectedSeason] = useState('current');
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  const seasons = {
    current: {
      name: "Cupcakes",
      theme: "Every day is cheat day",
      colors: { primary: "#FF6B6B", secondary: "#4ECDC4", accent: "#45B7D1" },
      icon: "🧁"
    },
    spring: {
      name: "Cakes",
      theme: "For the Fam",
      colors: { primary: "#FF9A9E", secondary: "#FECFEF", accent: "#FFDEE9" },
      icon: "🎂"
    },
    fall: {
      name: "Pastries",
      theme: "Sugary Scrumptious Sweets",
      colors: { primary: "#F093FB", secondary: "#F5576C", accent: "#4FACFE" },
      icon: "🍰"
    },
    winter: {
      name: "Dango",
      theme: "Mellow..",
      colors: { primary: "#667eea", secondary: "#764ba2", accent: "#f093fb" },
      icon: "🍡"
    }
  };

  const seasonalProducts = {
    current: [
      {
        id: 1,
        name: "Mango Passion Tart",
        price: "$22.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "tarts",
        description: "Tropical mango and passion fruit tart with coconut crust",
        availableUntil: "August 31, 2025",
        isLimited: true
      },
      {
        id: 2,
        name: "Watermelon Basil Cake",
        price: "$28.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "cakes",
        description: "Light sponge cake with watermelon compote and fresh basil",
        availableUntil: "August 31, 2025",
        isLimited: true
      },
      {
        id: 3,
        name: "Peach Cobbler Bars",
        price: "$16.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "bars",
        description: "Buttery bars with fresh peaches and crumble topping (pack of 6)",
        availableUntil: "August 31, 2025"
      },
      {
        id: 4,
        name: "Lemon Lavender Macarons",
        price: "$24.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "macarons",
        description: "Delicate macarons with lemon curd and lavender buttercream (set of 12)",
        availableUntil: "August 31, 2025",
        isLimited: true
      }
    ],
    spring: [
      {
        id: 5,
        name: "Strawberry Rose Cake",
        price: "$32.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "cakes",
        description: "Elegant cake with strawberry layers and rose buttercream",
        availableUntil: "May 31, 2025"
      },
      {
        id: 6,
        name: "Lemon Elderflower Tart",
        price: "$19.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "tarts",
        description: "Zesty lemon tart with elderflower cream and edible flowers",
        availableUntil: "May 31, 2025"
      }
    ],
    fall: [
      {
        id: 7,
        name: "Pumpkin Spice Cheesecake",
        price: "$26.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "cheesecake",
        description: "Creamy pumpkin cheesecake with cinnamon graham crust",
        availableUntil: "November 30, 2025"
      },
      {
        id: 8,
        name: "Apple Cinnamon Rolls",
        price: "$18.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "pastries",
        description: "Warm cinnamon rolls with caramelized apples and maple glaze (pack of 6)",
        availableUntil: "November 30, 2025"
      }
    ],
    winter: [
      {
        id: 9,
        name: "Gingerbread Cake",
        price: "$24.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "cakes",
        description: "Spiced gingerbread cake with cream cheese frosting",
        availableUntil: "February 28, 2026"
      },
      {
        id: 10,
        name: "Hot Chocolate Cookies",
        price: "$14.99",
        image: "https://i.imghippo.com/files/T4107AGU.png",
        category: "cookies",
        description: "Rich chocolate cookies with marshmallow centers (dozen)",
        availableUntil: "February 28, 2026"
      }
    ]
  };

  const currentSeason = seasons[selectedSeason];
  const currentProducts = seasonalProducts[selectedSeason];

 const handleOrderNow = () => {
    setIsContactPanelOpen(true);
  };
  return (
    <div className="relative">
      <Navbar 
        isContactPanelOpen={isContactPanelOpen} 
        setIsContactPanelOpen={setIsContactPanelOpen}
      />
      
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i0.wp.com/cms.babbel.news/wp-content/uploads/2018/09/FrenchColors.png?h=9999&quality=100&w=993)'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-4xl mb-4">{currentSeason.icon}</span>
            <span 
              className="block text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider mx-auto w-fit"
              style={{ backgroundColor: currentSeason.colors.primary }}
            >
              YOU NEED IT!!
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6B05D] mb-4 tracking-wide">
              SWEET TREATS
            </h1>
            
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto mb-8">
              Celebrate the flavors of the season with our limited-time treats, 
              crafted with the finest seasonal ingredients at their peak freshness.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Season Selector */}
      <section className="bg-[#F9EAF6] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(seasons).map(([key, season]) => (
              <button
                key={key}
                onClick={() => setSelectedSeason(key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedSeason === key
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-[#F6E9BB] text-[#C6B05D] hover:scale-105'
                }`}
                style={{
                  backgroundColor: selectedSeason === key ? season.colors.primary : undefined
                }}
              >
                <span className="text-lg">{season.icon}</span>
                {season.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Info Banner */}
      <section className="bg-[#F6E9BB] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            key={selectedSeason}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#C6B05D] mb-4">
              {currentSeason.theme} Collection
            </h3>
            <p className="text-[#C6B05D]/80 leading-relaxed">
              {selectedSeason === 'current' && "Beat the summer heat with our refreshing tropical flavors and light, fruity desserts perfect for warm days."}
              {selectedSeason === 'spring' && "Welcome spring with delicate floral notes and fresh, light treats that celebrate renewal and growth."}
              {selectedSeason === 'fall' && "Embrace autumn with warm spices, cozy flavors, and treats that capture the essence of the harvest season."}
              {selectedSeason === 'winter' && "Warm up winter with rich, indulgent treats featuring holiday spices and comforting flavors."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#F9EAF6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            key={selectedSeason}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
               
              
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#C6B05D] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">{product.description}</p>
                  
                
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#C6B05D]">{product.price}</span>
                    <button 
                      className="text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 font-medium text-sm" onClick={handleOrderNow}
                      style={{ backgroundColor: currentSeason.colors.primary }}
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

      <DividerSlowWavesP3/>

     

      <Footer />
    </div>
  );
};

export default SeasonalPage;