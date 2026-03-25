"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const headline = "EVERYDAY ESSENTIALS".split(" ");

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-brand-charcoal text-brand-offwhite">
      {/* Background Image / Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-charcoal z-0" />

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center mt-20 px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-8 text-brand-offwhite/60"
        >
          Curated For You
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] flex flex-wrap justify-center gap-3 md:gap-5 overflow-hidden px-4">
          {headline.map((word, index) => (
            <span key={index} className="overflow-hidden inline-block">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="flex flex-col items-center"
        >
          <p className="mt-8 text-lg md:text-xl font-serif italic font-light max-w-lg text-brand-offwhite/80 px-6 leading-relaxed">
            Comfortable, stylish, and made for your everyday life. Shop our newly refined core collection today.
          </p>
          <div className="mt-10">
            <button className="px-8 py-3 bg-brand-offwhite text-brand-charcoal uppercase tracking-widest text-sm font-bold hover:bg-brand-offwhite/80 transition-colors">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-offwhite/60"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Floating Metadata (Hidden on very small screens for cleanliness) */}
      <div className="hidden md:flex absolute bottom-12 left-12 flex-col gap-1 text-xs uppercase tracking-widest text-brand-offwhite/40">
        <span>New York, NY</span>
        <span>Est. 2026</span>
      </div>
      <div className="hidden md:flex absolute bottom-12 right-12 flex-col gap-1 text-xs uppercase tracking-widest text-brand-offwhite/40 text-right">
        <span>Global Delivery</span>
        <span>Free Returns</span>
      </div>
    </section>
  );
}
