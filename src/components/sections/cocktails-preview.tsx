"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { FlipItemModal } from "@/components/ui/flip-item-modal";

const cocktails = [
  {
    name: "Amber Sunset",
    desc: "Aged rum, passion fruit, honey syrup & a hint of African bird's eye chilli.",
    img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Johannesburg Sour",
    desc: "Bourbon, lemon, amarula foam & a dash of bitters served in a vintage coupe.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Rooibos Old Fashioned",
    desc: "Rooibos-infused whiskey, demerara sugar, orange peel & Angostura bitters.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
  },
];

export function CocktailsPreviewSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          title="Craft Cocktails"
          subtitle="Handcrafted drinks inspired by African flavours and Johannesburg's spirited nightlife."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cocktails.map((cocktail, i) => (
            <AnimatedSection key={cocktail.name} delay={i * 0.2}>
              <FlipItemModal
                item={{
                  id: `cocktail-${i}`,
                  name: cocktail.name,
                  desc: cocktail.desc,
                  image: cocktail.img,
                  badge: "Signature Mix",
                  price: "R120"
                }}
              >
                <motion.div
                className="group relative text-center"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6 }}
              >
                {/* Circular image */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-amber/30 group-hover:border-amber transition-colors duration-700">
                  <motion.img
                    src={cocktail.img}
                    alt={cocktail.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <h3 className="text-xl font-spectral text-cream mb-2">{cocktail.name}</h3>
                <p className="text-cream/70 text-sm font-sans font-light leading-relaxed max-w-xs mx-auto">
                  {cocktail.desc}
                </p>
              </motion.div>
              </FlipItemModal>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-16">
          <Link
            href="/menu#cocktails"
            className="inline-block px-10 py-4 border border-amber text-amber text-sm font-medium tracking-[0.25em] font-bebas uppercase rounded-sm hover:bg-amber hover:text-charcoal transition-all duration-700"
          >
            Full Drinks Menu
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
