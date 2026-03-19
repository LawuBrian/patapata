"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const antiques = [
  {
    lot: "01",
    name: "Victorian Writing Desk",
    era: "c. 1880",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    lot: "02",
    name: "Art Deco Floor Lamp",
    era: "c. 1930",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    lot: "03",
    name: "African Carved Chair",
    era: "c. 1920",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop",
  },
];

export function AntiquesPreviewSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          title="Collect a Piece of Pata Pata"
          subtitle="Many of the antique furniture pieces in our space are available for purchase. Dine amongst history and take a piece home."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {antiques.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.2}>
              <motion.div
                className="group relative flex flex-col h-full bg-transparent border border-cream/10 cursor-pointer overflow-hidden p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6 }}
              >
                {/* Lot Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bebas text-cream/40 tracking-[0.3em] uppercase">
                    Lot No. {item.lot}
                  </span>
                  <div className="w-12 h-px bg-cream/10" />
                </div>

                {/* Image */}
                <div className="aspect-square overflow-hidden mb-8 border border-cream/5 relative bg-black/20">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <span className="text-[11px] font-sans text-amber tracking-[0.25em] uppercase font-medium mb-3">
                    {item.era}
                  </span>
                  <h3 className="text-xl font-spectral text-cream mb-4 tracking-wide">{item.name}</h3>
                  
                  {/* Action Button */}
                  <div className="mt-auto pt-6 border-t border-cream/5 w-full">
                    <span className="text-xs font-sans text-cream/50 tracking-[0.2em] uppercase group-hover:text-amber transition-colors duration-500">
                      Inquire About Piece →
                    </span>
                  </div>
                </div>

                {/* Focus Border */}
                <div className="absolute inset-0 border border-amber opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-16">
          <Link
            href="/antiques"
            className="inline-block px-10 py-4 border border-amber text-amber text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber hover:text-charcoal transition-all duration-700"
          >
            Browse Collection
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
