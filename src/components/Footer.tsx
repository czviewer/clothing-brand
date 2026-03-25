"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-offwhite border-t border-brand-offwhite/10 py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
            Full Vest
          </h2>
          <p className="font-serif italic text-sm text-brand-offwhite/60">
            Simple. Quality. Everyday clothing.
          </p>
          <div className="mt-8">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-offwhite/40">© 2026 Full Vest</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-16 md:justify-center">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-wider">
            <span className="text-xs text-brand-offwhite/40 mb-2">Shop</span>
            {["Collection", "Classics", "Accessories"].map((link) => (
              <motion.a
                key={link}
                whileHover={{ x: 5 }}
                className="cursor-pointer hover:text-gray-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-sm uppercase tracking-wider">
            <span className="text-xs text-brand-offwhite/40 mb-2">Social</span>
            {["Instagram", "Twitter", "Pinterest"].map((link) => (
              <motion.a
                key={link}
                whileHover={{ x: 5 }}
                className="cursor-pointer hover:text-gray-400 transition-colors"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col gap-6">
          <span className="text-sm uppercase tracking-wider text-brand-offwhite/40">Join the list</span>
          <p className="font-serif italic text-sm">
            Subscribe for updates on new drops and exclusive offers.
          </p>

          <form className="relative mt-4 flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-transparent border-b border-brand-offwhite/30 py-3 text-sm uppercase tracking-widest outline-none focus:border-brand-offwhite transition-colors text-brand-offwhite placeholder:text-brand-offwhite/30"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 group hover:bg-brand-offwhite hover:text-brand-charcoal rounded-full transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
