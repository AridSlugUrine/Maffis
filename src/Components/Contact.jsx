import React from 'react';
import { Check, Star, Smile, Plane, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";

const features = [
  {
    icon: <FaWhatsapp className="w-6 h-6 text-[#D48BA6]" />,
    title: 'Whatsapp',
    description: '437-383-0286',
    action: () => window.open('https://wa.me/14373830286', '_blank'),
    clickable: true
  },
  {
    icon: <Mail className="w-6 h-6 text-[#D48BA6]" />,
    title: 'Email',
    description: 'maffiscafe@gmail.com.',
    action: () => window.open('mailto:maffiscafe@gmail.com', '_blank'),
    clickable: true
  },
  {
    icon: <SiUbereats className="w-6 h-6 text-[#D48BA6]" />,
    title: 'Uber Eats',
    description: 'Coming Soon...',
    clickable: false
  },
];

const Sopwithus = () => {
  return (
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
  );
};

export default Sopwithus;