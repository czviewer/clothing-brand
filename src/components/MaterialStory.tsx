"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const materials = [
  { id: "pima", name: "Pima Cotton", texture: "url('https://images.unsplash.com/photo-1596468767965-01e462fb529e?q=80&w=2070')" },
  { id: "fleece", name: "Heavyweight Fleece", texture: "url('https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972')" },
  { id: "merino", name: "Merino Wool", texture: "url('https://images.unsplash.com/photo-1532155122119-03a1fc6c58ff?q=80&w=2071')" },
];

export default function MaterialStory() {
  const [activeMaterial, setActiveMaterial] = useState(materials[0].texture);
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-[70vh] w-full flex bg-brand-charcoal text-brand-offwhite overflow-hidden py-32">
      {/* Background Texture Reveal */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: activeMaterial, backgroundSize: "cover", backgroundPosition: "center" }}
        initial={{ filter: "blur(10px)", scale: 1.1 }}
        animate={{ filter: hovered ? "blur(0px)" : "blur(10px)", scale: hovered ? 1 : 1.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm tracking-[0.3em] uppercase mb-4 text-brand-offwhite/60">
            The Material Story
          </h2>
          <p className="font-serif text-3xl md:text-5xl leading-tight">
            We partner with trusted suppliers to select high-quality fabrics, so your clothes feel great and look amazing all day long.
          </p>
          <div className="mt-12 flex gap-12 text-sm uppercase tracking-widest opacity-60">
            <div className="flex flex-col gap-2">
              <span className="font-bold">Sourcing</span>
              <span>Ethically Made</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Quality</span>
              <span>Tested Daily</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-start relative">
          {materials.map((mat) => (
            <motion.div
              key={mat.id}
              className="group cursor-pointer flex items-center gap-6"
              onMouseEnter={() => {
                setActiveMaterial(mat.texture);
                setHovered(true);
              }}
              onMouseLeave={() => setHovered(false)}
              onClick={() => {
                setActiveMaterial(mat.texture);
                setHovered(true);
              }}
            >
              <div className="w-12 h-[1px] bg-brand-offwhite/30 group-hover:bg-brand-offwhite transition-colors duration-300" />
              <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-offwhite to-brand-offwhite/80 transition-all duration-500 group-hover:scale-105 origin-left"
                  style={{ WebkitTextStroke: "1px rgba(244, 244, 240, 0.4)", color: "transparent" }}>
                <span className="group-hover:text-brand-offwhite transition-colors duration-500">
                  {mat.name}
                </span>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
