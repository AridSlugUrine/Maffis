import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && isSubscribed) {
      console.log("Newsletter subscription:", { email, isSubscribed });
      setEmail("");
      setIsSubscribed(false);
    }
  };

  return (
    <footer className="bg-pink-100 text-[#C48500]">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
        {/* Menu */}
        <div>
          <h3 className="font-bold text-lg mb-4">Menu</h3>
          <ul className="space-y-2">
            {["Home", "About", "Shop", "Blog", "Services", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold text-lg mb-4">Policies</h3>
          <ul className="space-y-2">
            {["FAQ", "Terms & Conditions", "Privacy Policy", "Shipping Policy"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          {/* Social Icons */}
          <div className="mb-6">
            <h3 className="font-semibold text-base mb-3">Get Social</h3>
            <div className="inline-flex gap-2 px-4 py-2 bg-[#EE98B0] rounded-lg">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="w-5 h-5 text-white cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-medium mb-3">Join Our Newsletter</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border-2 border-[#C48500] rounded-full bg-white text-sm text-[#C48500] placeholder-[#C48500] focus:outline-none focus:border-[#C48500] focus:ring-2 focus:ring-[#C48500] transition-all duration-200"
              />
              <label className="flex items-start gap-3 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 border-[#C48500] rounded focus:ring-2 focus:ring-[#C48500]"
                />
                <span>Yes, subscribe me to your newsletter.</span>
              </label>
              <button
                type="submit"
                className="w-full py-2.5 rounded-full font-semibold border border-[#C48500] bg-white text-[#C48500] transition-all duration-200 hover:bg-[#C48500] hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 pl-6 text-sm font-medium bg-[#EE98B0] text-white">
        © 2025 Maffi's | ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
