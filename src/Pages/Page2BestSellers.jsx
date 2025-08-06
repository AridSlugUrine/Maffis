import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerSlowWavesP2 from '../Components/DividerSlowWavesP2';

const BestSellersPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  const bestSellers = [
    {
      id: 1,
      name: "Classic Chocolate Cake",
      price: "$24.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "cakes",
      description: "Our signature rich chocolate cake with buttercream frosting",
      rank: 1,
      soldCount: "2,500+ sold this month",
      rating: 4.9
    },
    {
      id: 2,
      name: "Fresh Strawberry Tart",
      price: "$18.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "tarts",
      description: "Buttery pastry shell filled with vanilla custard and fresh strawberries",
      rank: 2,
      soldCount: "1,800+ sold this month",
      rating: 4.8
    },
    {
      id: 3,
      name: "Vanilla Bean Cupcakes",
      price: "$16.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "cupcakes",
      description: "Set of 6 fluffy vanilla cupcakes with Madagascar vanilla bean frosting",
      rank: 3,
      soldCount: "1,500+ sold this month",
      rating: 4.9
    },
    {
      id: 4,
      name: "Tiramisu Slice",
      price: "$8.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "desserts",
      description: "Authentic Italian tiramisu with espresso-soaked ladyfingers",
      rank: 4,
      soldCount: "1,200+ sold this month",
      rating: 4.7
    },
    {
      id: 5,
      name: "Blueberry Muffins",
      price: "$12.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "muffins",
      description: "Pack of 4 fresh blueberry muffins with a golden crumb topping",
      rank: 5,
      soldCount: "1,000+ sold this month",
      rating: 4.6
    },
    {
      id: 6,
      name: "Red Velvet Cake",
      price: "$26.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "cakes",
      description: "Classic red velvet cake with cream cheese frosting",
      rank: 6,
      soldCount: "950+ sold this month",
      rating: 4.8
    },
    {
      id: 7,
      name: "Lemon Bars",
      price: "$14.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "bars",
      description: "Tangy lemon bars with powdered sugar dusting (pack of 6)",
      rank: 7,
      soldCount: "900+ sold this month",
      rating: 4.5
    },
    {
      id: 8,
      name: "Chocolate Chip Cookies",
      price: "$10.99",
      image: "https://i.imghippo.com/files/LtcC2264BP.png",
      category: "cookies",
      description: "Dozen of our famous chewy chocolate chip cookies",
      rank: 8,
      soldCount: "850+ sold this month",
      rating: 4.7
    }
  ];

  const filters = ['all', 'cakes', 'tarts', 'cupcakes', 'desserts', 'muffins', 'bars', 'cookies'];

  const filteredProducts = selectedFilter === 'all' 
    ? bestSellers 
    : bestSellers.filter(product => product.category === selectedFilter);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-sm ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

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
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url(https://i.imghippo.com/files/xAeA4921BW.jpg)"}}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider">
              🔥 CUSTOMER FAVORITES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fa9dee] mb-6 tracking-wide">
              BEST SELLERS
            </h1>
            <p className="text-lg sm:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8">
              These are the treats our customers can't stop talking about! 
              Tried, tested, and loved by thousands of happy customers.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="bg-[#FEFEFE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F9EAF6] rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-[#C6B05D] mb-2">10,000+</div>
              <div className="text-[#C6B05D]/80">Items Sold This Month</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F9EAF6] rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-[#C6B05D] mb-2">4.8⭐</div>
              <div className="text-[#C6B05D]/80">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F9EAF6] rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-[#C6B05D] mb-2">98%</div>
              <div className="text-[#C6B05D]/80">Customer Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

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
                    ? 'bg-[#D68AA8] text-white shadow-lg'
                    : 'bg-[#EE98B0] text-white hover:bg-[#D68AA8] hover:text-white'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product, index) => (
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
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    #{product.rank}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    🔥 HOT
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#C6B05D] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  
                  <div className="text-xs text-green-600 font-semibold mb-3">{product.soldCount}</div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#C6B05D]">{product.price}</span>
                    <button 
                      onClick={handleOrderNow}
                      className="bg-[#C6B05D] text-white px-4 py-2 rounded-full hover:bg-[#a08f4d] transition-colors duration-300 font-medium text-sm"
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

      {/* Customer Reviews Section */}
      <section className="bg-[#F6E9BB] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#C6B05D] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#C6B05D]/80">Real reviews from real customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", review: "The chocolate cake is absolutely divine! Ordered it for my birthday and everyone loved it.", rating: 5 },
              { name: "Michael R.", review: "Best strawberry tart I've ever had. Fresh, delicious, and beautifully presented.", rating: 5 },
              { name: "Emily K.", review: "These vanilla cupcakes are perfection. Fluffy, moist, and not too sweet.", rating: 5 }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                <div className="font-semibold text-[#C6B05D]">- {review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestSellersPage;