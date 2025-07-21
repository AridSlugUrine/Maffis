import React, { useState, useEffect } from 'react';
import ShopByCategory from './components/ShopByCategory';
import Products from './components/Products';
import Drinks from './components/Drinks';
import Navbar from './components/NavBar';
import Footer from './components/footer';
import './theme.css';
import {
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function BakeryHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerOffset, setBannerOffset] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const bannerTexts = Array(9).fill("CAKES BY MARIA");

  const slides = [
    {
      backgroundImage: "https://plus.unsplash.com/premium_photo-1669394037539-13b9b58f45d3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "NEW CREATIONS",
      subtitle: "Shop all",
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1646202728470-33e40391ba51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "SWEET TREATS",
      subtitle: "Discover our",
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1605563433078-12cfc1d42145?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "FRESH DAILY",
      subtitle: "Baked",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerOffset(prev => (prev + 1) % (bannerTexts.join(' • ').length * 8));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const scrollBannerLeft = () => setBannerOffset(prev => Math.max(0, prev - 50));
  const scrollBannerRight = () => setBannerOffset(prev => prev + 50);
 const handleImageError = (slideIndex) => {
    setImageErrors(prev => ({ ...prev, [slideIndex]: true }));
  };

  const handleImageLoad = (slideIndex) => {
    setImageErrors(prev => ({ ...prev, [slideIndex]: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
      {/* Header */}
      <header className="bg-white py-4 px-4 sm:px-6">
        <div className="w-full flex items-center justify-between">
          {/* Social icons left */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
              <Facebook className="w-4 h-4 text-accent hover:opacity-80 cursor-pointer" />
              <Instagram className="w-4 h-4 text-accent hover:opacity-80 cursor-pointer" />
            </div>
          </div>

          {/* Logo */}
          <div className="text-center flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-1 sm:mb-2 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <div className="text-accent font-bold text-sm sm:text-base md:text-lg">B</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-accent italic">bakery business</p>
          </div>

          {/* Order button */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <button className="bg-primary text-accent px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition text-sm">
              Order Now!
            </button>
          </div>
        </div>
      </header>

      {/* Navbar */}<div className=""> <Navbar /></div>
     

      {/* Scrolling Banner */}
      <div className="bg-secondary text-center py-2 text-sm text-primary relative overflow-hidden">
        <button onClick={scrollBannerLeft} className="absolute left-2 top-1/2 -translate-y-1/2 text-primary z-10 hover:opacity-80">
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="whitespace-nowrap animate-pulse">
          <div className="inline-block transition-transform duration-500 ease-linear" style={{ transform: `translateX(-${bannerOffset}px)` }}>
            {bannerTexts.join(' • ') + ' • ' + bannerTexts.join(' • ')}
          </div>
        </div>

        <button onClick={scrollBannerRight} className="absolute right-2 top-1/2 -translate-y-1/2 text-primary z-10 hover:opacity-80">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

     <main className="relative overflow-hidden w-full">
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 shadow transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 shadow transition-all"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Slide container */}
        <div className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              {/* Background with fallback */}
              <div className={`absolute inset-0 ${imageErrors[index] ? 'fallback-bg' : ''}`}>
                {!imageErrors[index] && (
                  <img
                    src={slide.backgroundImage}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover image-fade-in"
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                    loading="eager"
                  />
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Content */}
              <div className="relative z-30 h-full flex items-center justify-center">
                <div className="text-center px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-2 italic animate-fade-in-up">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold leading-tight animate-fade-in-up delay-200">
                    {slide.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h1>
                  <button className="mt-6 bg-secondary text-primary border-primary px-10 py-3 rounded-full font-medium hover:bg-primary/90 transition animate-fade-in-up delay-500 shadow">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
{/* Squiggly divider */}
<svg
  className="-mt-[1px] w-full text-secondary bg-black"
  viewBox="0 0 1440 70"
  fill="currentColor"
  preserveAspectRatio="none"
>
 <path d="M0,50 
    C60,90 120,10 180,50 
    C240,90 300,10 360,50 
    C420,90 480,10 540,50 
    C600,90 660,10 720,50 
    C780,90 840,10 900,50 
    C960,90 1020,10 1080,50 
    C1140,90 1200,10 1260,50 
    C1320,90 1380,10 1440,50 
    L1440,100 L0,100 Z" />
</svg>


      {/* Sections */}
      <ShopByCategory />

      {/* Squiggly divider */}
<svg
  className="-mt-[1px] w-full text-accent-light bg-secondary"
  viewBox="0 0 1440 70"
  fill="currentColor"
  preserveAspectRatio="none"
>
 <path d="M0,50 
    C60,90 120,10 180,50 
    C240,90 300,10 360,50 
    C420,90 480,10 540,50 
    C600,90 660,10 720,50 
    C780,90 840,10 900,50 
    C960,90 1020,10 1080,50 
    C1140,90 1200,10 1260,50 
    C1320,90 1380,10 1440,50 
    L1440,100 L0,100 Z" />
</svg>

      <Products />

      <section className="bg-accent-dark py-16">
        <div className="mx-auto px-8 flex flex-wrap justify-between gap-8">
          <div></div>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-secondary rounded-full w-32 h-32 flex items-center justify-center shadow">
              <div className="bg-white rounded-full w-24 h-24 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop"
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))} <div></div>
        </div>
      </section>

      <Drinks />

      {/* Squiggly divider */}
<svg
  className="-mt-[1px] w-full text-accent-light bg-black/80"
  viewBox="0 0 1440 70"
  fill="currentColor"
  preserveAspectRatio="none"
>
 <path d="M0,50 
    C60,90 120,10 180,50 
    C240,90 300,10 360,50 
    C420,90 480,10 540,50 
    C600,90 660,10 720,50 
    C780,90 840,10 900,50 
    C960,90 1020,10 1080,50 
    C1140,90 1200,10 1260,50 
    C1320,90 1380,10 1440,50 
    L1440,100 L0,100 Z" />
</svg>

      <Footer />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
