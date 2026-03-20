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
    badge: "Signature Mix",
    price: "R125",
    ingredients: ["Aged Rum", "Passion Fruit", "Honey Syrup", "Bird's Eye Chilli"],
  },
  {
    name: "Johannesburg Sour",
    desc: "Bourbon, lemon, amarula foam & a dash of bitters served in a vintage coupe.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    badge: "House Special",
    price: "R115",
    ingredients: ["Bourbon", "Lemon Juice", "Amarula Foam", "Angostura Bitters"],
  },
  {
    name: "Rooibos Old Fashioned",
    desc: "Rooibos-infused whiskey, demerara sugar, orange peel & Angostura bitters.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
    badge: "Bartender's Pick",
    price: "R130",
    ingredients: ["Rooibos Whiskey", "Demerara Sugar", "Orange Peel", "Bitters"],
  },
];

const CocktailCard = ({ cocktail, index }: { cocktail: typeof cocktails[0]; index: number }) => (
  <AnimatedSection delay={index * 0.2}>
    <FlipItemModal
      item={{
        id: `cocktail-${index}`,
        name: cocktail.name,
        desc: cocktail.desc,
        image: cocktail.img,
        badge: cocktail.badge,
        price: cocktail.price,
      }}
    >
      <motion.div
        className="group relative cursor-pointer bg-white/5 border border-charcoal/10 overflow-hidden shadow-lg"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-black/10">
          <motion.img
            src={cocktail.img}
            alt={cocktail.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1.2 }}
          />

          {/* Badge */}
          <span className="absolute top-4 right-4 bg-amber/90 text-charcoal text-xs font-semibold tracking-widest uppercase px-3 py-1 shadow-md">
            {cocktail.badge}
          </span>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          {/* Ingredient reveal on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-wrap gap-2">
            {cocktail.ingredients.map((ing) => (
              <span
                key={ing}
                className="text-[9px] uppercase tracking-widest bg-charcoal/80 text-cream px-2 py-1 backdrop-blur-sm border border-cream/20"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Card body */}
        <div className="p-5 relative z-10 bg-parchment">
          <h3 className="text-lg font-clarendon text-charcoal mb-2 group-hover:text-amber-dark transition-colors duration-500">
            {cocktail.name}
          </h3>
          <p className="text-charcoal/70 text-sm font-sans font-light leading-relaxed line-clamp-2">
            {cocktail.desc}
          </p>
          <p className="mt-3 font-spectral text-amber text-base">{cocktail.price}</p>
        </div>

        {/* Amber underline on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
      </motion.div>
    </FlipItemModal>
  </AnimatedSection>
);

export function CocktailsPreviewSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D69A3A, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <SectionHeading
          title="Craft Cocktails"
          subtitle="Handcrafted drinks inspired by African flavours and Johannesburg's spirited nightlife."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cocktails.map((cocktail, i) => (
            <CocktailCard key={cocktail.name} cocktail={cocktail} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-16">
          <Link
            href="/menu#cocktails"
            className="inline-block px-10 py-4 border border-amber text-amber text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber hover:text-charcoal hover:shadow-[0_0_30px_rgba(214,154,58,0.4)] transition-all duration-700"
          >
            Full Drinks Menu
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
