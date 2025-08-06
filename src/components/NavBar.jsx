import React, { useState, useEffect } from "react";
import { User, ShoppingCart, ChevronLeft, ChevronRight, X, Check, Star,Mail, Smile } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import LogoImg from "../assets/images/logo.png"
import { motion } from 'framer-motion';

// Contact Panel Component
const ContactPanel = ({ isOpen, onClose }) => {
  
  const features = [
    {
      icon: <FaWhatsapp className="w-6 h-6 text-[#D48BA6]" />,
      title: 'Whatsapp',
      description: '437-383-0286',
      action: () => window.open('https://wa.me/14373830286?text=Hi%20I%27d%20like%20to%20place%20an%20order', '_blank'),
      clickable: true
    },
    {
      icon: <Mail className="w-6 h-6 text-[#D48BA6]" />,
      title: 'Email',
      description: 'maffiscafe@gmail.com.',
     action: () => window.open('mailto:maffiscafe@gmail.com?subject=Custom%20Subject&body=Hi%20I%27d%20like%20to%20place%20an%20order', '_blank'),
      clickable: true
    },
    {
      icon: <SiUbereats className="w-6 h-6 text-[#D48BA6]" />,
      title: 'Uber Eats',
      description: 'Coming Soon...',
      clickable: false
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#F6E9BB] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform duration-300 scale-100">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-[#A06600] hover:text-[#C48500] transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Panel Content */}
          <div className="px-8 pb-8">
            {/* Section Heading */}
            <section className="bg-[#F6E9BB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#A06600] tracking-widest">
            Contact Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-6 px-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-6 text-center shadow-md border border-pink-100
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-100/50
                         ${feature.clickable 
                           ? 'cursor-pointer hover:bg-pink-50 active:scale-95' 
                           : 'opacity-75'
                         }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              onClick={feature.clickable ? feature.action : undefined}
              whileHover={feature.clickable ? { scale: 1.02 } : {}}
              whileTap={feature.clickable ? { scale: 0.98 } : {}}
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#A06600] tracking-wide mb-2 whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A06600] leading-snug">
                {feature.description}
              </p>
              {feature.clickable && (
                <div className="mt-3 text-xs text-[#D48BA6] opacity-75">
                  Click to {feature.title === 'Whatsapp' ? 'chat' : 'email'}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Navbar({ isContactPanelOpen, setIsContactPanelOpen }) {
  const location = useLocation();
  const [bannerOffset, setBannerOffset] = useState(0);
  
  // Use internal state if props are not provided (for backward compatibility)
  const [internalContactPanelOpen, setInternalContactPanelOpen] = useState(false);
  
  const actualIsContactPanelOpen = isContactPanelOpen !== undefined ? isContactPanelOpen : internalContactPanelOpen;
  const actualSetIsContactPanelOpen = setIsContactPanelOpen !== undefined ? setIsContactPanelOpen : setInternalContactPanelOpen;

  const bannerTexts = [
    "🍰 Fresh Daily Specials Available Now!",
    "🥐 Free Delivery on Orders Over $25",
    "🧁 Custom Cakes for All Occasions",
    "🍪 Buy 2 Get 1 Free on Selected Items",
  ];

  const handleNavClick = () => {
    actualSetIsContactPanelOpen(true);
  };

  const navigationItems = [
    { label: "HOME", route: "/" },
    { label: "ABOUT", route: "/about-us" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerOffset(prev => (prev + 1) % 1000);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleBannerLeft = () => {
    setBannerOffset(prev => Math.max(0, prev - 100));
  };

  const handleBannerRight = () => {
    setBannerOffset(prev => (prev + 100) % 1000);
  };

  return (
    <>
    <header className="bg-white py-4 px-4 sm:px-6 shadow-md">
      <div className="flex flex-wrap items-center justify-between w-full relative">

        {/* Home (Left) */}
        <div className="flex items-center space-x-2 text-[#C48500] hover:opacity-80 cursor-pointer">

          <span className="text-sm font-medium">
            <Link to="/">Home</Link>
          </span>
        </div>

        {/* Logo (Center) */}
       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
    <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-33 md:h-33 mx-auto">
      <img
        src={LogoImg}
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
        <div className="flex flex-col items-center text-center hidden md:flex">
          <div className="w-full h-full sm:w-33 sm:h-33 mx-auto">
            <img
              src={LogoImg}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>

      {/* Navigation Bar */}
      <nav className="relative z-10 w-full py-2 sm:py-3 bg-[#FFD8DF] border-t border-b border-[#C48500]">
        <div className="overflow-x-auto">
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 font-medium text-sm sm:text-base whitespace-nowrap px-4 text-[#C48500]">
            {navigationItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.route}
                className={`underline hover:text-white transition duration-200 ${
                  location.pathname === item.route ? 'text-white bg-[#C48500] px-2 py-1 rounded' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={handleNavClick}
              className="underline hover:text-white transition duration-200 hover:bg-[#C48500] hover:px-2 hover:py-1 hover:rounded hover:no-underline cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Scrolling Banner */}
      <div className="relative py-2 text-sm bg-[#FFFBEA] text-[#C48500] overflow-hidden">
        {/* Left Button */}
        <button
          onClick={handleBannerLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:opacity-80"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div
            className="whitespace-nowrap transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(-${bannerOffset}px)` }}
          >
            {bannerTexts.concat(bannerTexts).join(" • ")}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleBannerRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:opacity-80"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-6" />
        </button>
      </div>

      {/* Contact Panel */}
      <ContactPanel 
        isOpen={actualIsContactPanelOpen} 
        onClose={() => actualSetIsContactPanelOpen(false)} 
      />
    </>
  );
}