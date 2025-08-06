import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import DividerSlowWaves from '../Components/DividerSlowWaves';
import DividerExtremeWaves from '../Components/DividerExtremeWaves';
import DividerExtremeOpp from '../Components/DividerExtremeOpp';

const DiscountsPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const discountedProducts = [
    {
      id: 1,
      name: "Chocolate Fudge Brownies",
      originalPrice: "$24.99",
      discountPrice: "$16.99",
      discount: "32%",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "brownies",
      description: "Rich, fudgy brownies with chocolate chips (pack of 12)",
      dealType: "flash",
      soldCount: 45,
      totalStock: 100
    },
    {
      id: 2,
      name: "Mixed Berry Cheesecake",
      originalPrice: "$32.99",
      discountPrice: "$22.99",
      discount: "30%",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "cheesecake",
      description: "Creamy cheesecake topped with fresh mixed berries",
      dealType: "weekly",
      soldCount: 28,
      totalStock: 50
    },
    {
      id: 3,
      name: "Cinnamon Sugar Donuts",
      originalPrice: "$18.99",
      discountPrice: "$12.99",
      discount: "32%",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "donuts",
      description: "Fresh donuts rolled in cinnamon sugar (dozen)",
      dealType: "clearance",
      soldCount: 67,
      totalStock: 80
    },
    {
      id: 4,
      name: "Lemon Pound Cake",
      originalPrice: "$22.99",
      discountPrice: "$15.99",
      discount: "30%",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "cakes",
      description: "Moist lemon pound cake with glaze",
      dealType: "bundle",
      soldCount: 33,
      totalStock: 60
    },
    {
      id: 5,
      name: "Apple Turnovers",
      originalPrice: "$16.99",
      discountPrice: "$9.99",
      discount: "41%",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "pastries",
      description: "Flaky pastries filled with spiced apples (pack of 6)",
      dealType: "flash",
      soldCount: 52,
      totalStock: 75
    },
    {
      id: 6,
      name: "Chocolate Chip Muffins",
      originalPrice: "$14.99",
      discountPrice: "$10.99",
      discount: "27%",
      image: "https://i.imghippo.com/files/oGMP5967abA.png",
      category: "muffins",
      description: "Soft muffins packed with chocolate chips (pack of 6)",
      dealType: "weekly",
      soldCount: 41,
      totalStock: 90
    }
  ];

  const deals = [
    {
      title: "Flash Sale",
      description: "Limited time offers that won't last long!",
      badge: "🔥 HOT",
      color: "from-[#D48BA6] to-[#FFD8DF]"
    },
    {
      title: "Weekly Specials",
      description: "Great deals available all week long",
      badge: "⭐ WEEKLY",
      color: "from-[#C48500] to-[#FFFBEA]"
    },
    {
      title: "Clearance Items",
      description: "Last chance to grab these favorites",
      badge: "💸 CLEARANCE",
      color: "from-[#A06600] to-[#C48500]"
    },
    {
      title: "Bundle Deals",
      description: "Buy more, save more with our bundles",
      badge: "📦 BUNDLE",
      color: "from-[#FFD8DF] to-[#D48BA6]"
    }
  ];

  const getDealTypeColor = (dealType) => {
    switch (dealType) {
      case 'flash': return 'from-[#D48BA6] to-[#FFD8DF]';
      case 'weekly': return 'from-[#C48500] to-[#FFFBEA]';
      case 'clearance': return 'from-[#A06600] to-[#C48500]';
      case 'bundle': return 'from-[#FFD8DF] to-[#D48BA6]';
      default: return 'from-[#C48500] to-[#A06600]';
    }
  };

  const getDealTypeBadge = (dealType) => {
    switch (dealType) {
      case 'flash': return '🔥 FLASH';
      case 'weekly': return '⭐ WEEKLY';
      case 'clearance': return '💸 CLEARANCE';
      case 'bundle': return '📦 BUNDLE';
      default: return '💰 DEAL';
    }
  };

  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const handleOrderNow = () => {
    setIsContactPanelOpen(true);
  };

  return (
    <div className="relative">
       <Navbar 
              isContactPanelOpen={isContactPanelOpen} 
              setIsContactPanelOpen={setIsContactPanelOpen}
            />
      
      {/* Hero Section with Countdown */}
      <section className="relative bg-gradient-to-br from-[#FFD8DF] via-[#FFFBEA] to-[#FFD8DF] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD8DF]/30 to-[#FFFBEA]/30"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#FFD8DF] text-[#C48500] px-6 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider shadow-sm">
              💰 AMAZING SAVINGS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-wide text-[#C48500]">
              SPECIAL DISCOUNTS
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-[#A06600]">
              Don't miss out on these incredible deals! Limited time offers on your favorite treats.
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-8 shadow-lg border border-[#FFD8DF]">
              <h3 className="text-xl font-bold mb-4 text-[#C48500]">Flash Sale Ends In:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-gradient-to-br from-[#FFD8DF] to-[#FFFBEA] rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-[#C48500]">{value.toString().padStart(2, '0')}</div>
                    <div className="text-xs uppercase text-[#A06600]">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="bg-gradient-to-br from-[#FFFBEA] to-[#FFD8DF] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#C48500] mb-4">
              Types of Deals
            </h2>
            <p className="text-lg text-[#A06600]">Choose from various discount categories</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${deal.color} rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold mb-4 inline-block">
                  {deal.badge}
                </div>
                <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                <p className="text-sm opacity-90">{deal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products on Sale */}
      <section className="bg-gradient-to-br from-[#FFD8DF] to-[#FFFBEA] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#C48500] mb-4">
              Products on Sale
            </h2>
            <p className="text-lg text-[#A06600]">Grab these deals before they're gone!</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {discountedProducts.map((product, index) => {
              const stockPercentage = (product.soldCount / product.totalStock) * 100;
              
              return (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative border border-[#FFD8DF]"
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
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${getDealTypeColor(product.dealType)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}>
                      {getDealTypeBadge(product.dealType)}
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D48BA6] to-[#FFD8DF] text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-md">
                      -{product.discount}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#C48500] mb-2">{product.name}</h3>
                    <p className="text-[#A06600] text-xs mb-3 leading-relaxed">{product.description}</p>
                    
                    {/* Stock Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-[#A06600] mb-1">
                        <span>{product.soldCount} sold</span>
                        <span>{product.totalStock - product.soldCount} left</span>
                      </div>
                      <div className="w-full bg-[#FFFBEA] rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#C48500] to-[#D48BA6] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${stockPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-lg line-through text-[#A06600]/60">{product.originalPrice}</span>
                        <span className="text-xl font-bold text-[#D48BA6]">{product.discountPrice}</span>
                      </div>
                      <button 
                        onClick={handleOrderNow} 
                        className="bg-gradient-to-r from-[#D48BA6] to-[#FFD8DF] text-white px-4 py-2 rounded-full hover:from-[#C48500] hover:to-[#FFFBEA] transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <DividerExtremeOpp/>

     
      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-amber-25 to-stone-25 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone-600">Everything you need to know about our deals</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How often do you have sales?",
                answer: "We have weekly specials every week, flash sales throughout the month, and seasonal clearance events. Follow our newsletter to stay updated!"
              },
              {
                question: "Can I combine multiple discounts?",
                answer: "Generally, only one discount can be applied per order. However, loyalty program discounts can sometimes be combined with certain promotions."
              },
              {
                question: "Do discounts apply to custom orders?",
                answer: "Most promotional discounts apply to our regular menu items. Custom orders may have different pricing, but we occasionally offer special deals on custom cakes."
              },
              {
                question: "How long do flash sales last?",
                answer: "Flash sales typically last 24-48 hours or until supplies run out. We recommend ordering quickly as popular items sell out fast!"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100"
              >
                <h3 className="text-lg font-bold text-stone-800 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiscountsPage;