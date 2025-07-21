import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 w-full outline-solid outline-primary py-2 sm:py-3 transition-all duration-300 ${
        isSticky ? "fixed top-0 shadow-md" : "relative"
      } bg-accent`}
    >
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 text-primary font-medium text-sm sm:text-base whitespace-nowrap px-4">
          {["HOME", "SHOP ALL ▼", "ABOUT", "SERVICES", "FAQS", "BLOG", "CONTACT"].map((label, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-cream transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
