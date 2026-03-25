"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-brand-charcoal/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter uppercase origin-left hover:scale-105 transition-transform font-sans">
            Full Vest
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 font-serif text-sm italic">
            {["Collection", "About Us", "Blog"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-offwhite transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="text-sm uppercase tracking-widest hidden md:block hover:text-gray-400 transition-colors">Cart (0)</button>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-brand-charcoal text-brand-offwhite flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-6"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 text-4xl font-serif text-center">
              {["Collection", "About Us", "Blog"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:italic transition-all"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
