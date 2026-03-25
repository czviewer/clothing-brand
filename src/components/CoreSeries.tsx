"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const items = [
  { id: 1, name: "The Overcoat", price: "$490", image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070" },
  { id: 2, name: "Structured Blazer", price: "$320", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936" },
  { id: 3, name: "Tailored Trousers", price: "$210", image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1974" },
  { id: 4, name: "Silk Cashmere Turtleneck", price: "$180", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972" },
];

export default function CoreSeries() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Desktop horizontal scroll logic
  // Increased to -65% to ensure the entire gallery is revealed during scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative lg:h-[300vh] bg-brand-offwhite text-brand-charcoal overflow-visible border-t border-brand-charcoal/5">
      {/* 
        On desktop: sticky exactly below the 6rem header. Height is 100vh - 6rem.
        Layout: Single horizontal scrolling row. Text comes first, then images.
      */}
      <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex flex-col items-start lg:items-center overflow-hidden py-16 px-6 lg:py-0 lg:px-0 z-10 bg-brand-offwhite">
        
        {/* Desktop Horizontal Scroll Track */}
        {!isMobile && (
          <div className="w-full h-full relative overflow-visible flex items-center">
            <motion.div style={{ x }} className="flex gap-16 lg:gap-32 items-center flex-nowrap pl-6 lg:pl-24">
              
              {/* Title Section (First element in the track) */}
              <div className="w-[80vw] lg:w-[45vw] flex-shrink-0 relative z-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-40">
                    [ 01 ] The Essentials
                  </span>
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mt-2">
                    Core Series
                  </h2>
                  <p className="font-serif italic text-2xl lg:text-3xl xl:text-4xl text-brand-charcoal font-medium leading-tight max-w-lg mt-4">
                    Your everyday wardrobe essentials. Comfortable, durable, and designed to last.
                  </p>
                  
                  <div className="mt-8 flex items-center gap-4 group cursor-pointer w-fit">
                    <span className="text-sm uppercase tracking-widest font-bold">Explore All</span>
                    <div className="w-12 h-[1px] bg-brand-charcoal group-hover:w-20 transition-all duration-300" />
                  </div>
                </motion.div>
              </div>

              {/* Gallery Items */}
              {items.map((item) => (
                <div key={item.id} className="group relative w-[400px] xl:w-[450px] flex-shrink-0 cursor-pointer">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-brand-gray/10 relative shadow-xl">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      sizes="(max-width: 1280px) 400px, 450px" 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <motion.div 
                      initial={{ opacity: 1, scaleY: 1 }} 
                      whileInView={{ opacity: 0, scaleY: 0 }} 
                      viewport={{ once: true, margin: "-10%" }} 
                      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
                      className="absolute inset-0 bg-brand-offwhite origin-top z-10" 
                    />
                  </div>
                  <div className="mt-8 flex justify-between items-baseline group-hover:px-2 transition-all duration-300">
                    <h3 className="text-xl xl:text-2xl font-bold uppercase tracking-tighter">{item.name}</h3>
                    <span className="font-serif italic text-lg xl:text-xl opacity-60">{item.price}</span>
                  </div>
                </div>
              ))}
              
              {/* Spacer at the end of track */}
              <div className="w-[20vw] flex-shrink-0" />
            </motion.div>
          </div>
        )}

        {/* Mobile/Tablet Premium Sticky Stack */}
        {isMobile && (
          <div className="flex flex-col w-full px-6 py-12 relative w-full">
            
            <div className="w-full mb-16 relative z-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-5xl font-bold uppercase tracking-tighter leading-[0.85] text-brand-charcoal">
                  Core Series
                </h2>
                <p className="font-serif italic text-xl text-brand-charcoal/80 font-medium leading-tight max-w-[80vw]">
                  Your everyday wardrobe essentials. Comfortable, durable, and designed to last.
                </p>
                
                <div className="mt-6 flex items-center gap-4 group cursor-pointer w-fit">
                  <span className="text-sm uppercase tracking-widest font-bold">Explore All</span>
                  <div className="w-12 h-[1px] bg-brand-charcoal" />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col w-full relative pb-32">
              {items.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-10%" }}
                  transition={{ duration: 0.6 }}
                  className="sticky w-full aspect-[4/5] flex-shrink-0 shadow-2xl rounded-sm overflow-hidden mb-16"
                  style={{ top: `calc(7rem + ${index * 1.5}rem)` }}
                >
                  {/* Background Image with slight darkening for premium text contrast */}
                  <Image src={item.image} alt={item.name} fill sizes="100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Card Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                    <h3 className="text-3xl font-bold uppercase tracking-tighter text-brand-offwhite w-2/3 leading-none">
                      {item.name}
                    </h3>
                    <span className="font-serif italic text-xl text-brand-offwhite/80 shrink-0">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
