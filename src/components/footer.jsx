import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent-light text-primary font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
        {/* Menu */}
        <div>
          <h3 className="text-primary font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            {["Home", "About", "Shop", "Blog", "Services", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-primary font-semibold mb-3">Policies</h3>
          <ul className="space-y-2">
            {["FAQ", "Terms & Conditions", "Privacy Policy", "Shipping Policy"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <div className="flex items-center space-x-3 mb-4 bg-accent-dark">
          <h3 className="text-primary font-semibold bg-accent-dark">Get social</h3>
            <Facebook className="w-5 h-5 text-primary" />
            <Instagram className="w-5 h-5 text-primary" />
            <Youtube className="w-5 h-5 text-primary" />
          </div>

          <p className="mb-2">Join Our Newsletter</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-2 border border-accent bg-transparent rounded-full text-sm placeholder-brown-light focus:outline-none"
            />
            <label className="flex items-start gap-2 text-xs text-primary">
              <input type="checkbox" className="mt-1 accent-accent" />
              Yes, subscribe me to your newsletter.
            </label>
            <button
              type="submit"
              className="w-full bg-accent text-primary rounded-full py-2 font-semibold hover:bg-accent-dark transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-accent-dark text-primary text-center py-3 text-xs">
        © 2025 Maffi's | ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
