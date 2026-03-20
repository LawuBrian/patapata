"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

const categories = [
  { id: "all", label: "All Pieces" },
  { id: "furniture", label: "Furniture" },
  { id: "lighting", label: "Lighting" },
  { id: "decor", label: "Décor" },
];

const antiqueItems = [
  {
    name: "Victorian Writing Desk",
    era: "c. 1880",
    origin: "England",
    story: "Sourced from a Cape Town estate sale, this mahogany desk has served writers and merchants across two continents.",
    desc: "Mahogany writing desk with brass fittings, original leather inlay, and hand-carved detailing.",
    price: "R12,500",
    category: "furniture",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Art Deco Floor Lamp",
    era: "c. 1930",
    origin: "France",
    story: "This geometric masterpiece once illuminated a Parisian salon. Fully restored to original spec.",
    desc: "Brass and frosted glass floor lamp with geometric Art Deco base. Fully restored and rewired.",
    price: "R4,800",
    category: "lighting",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "African Carved Chair",
    era: "c. 1920",
    origin: "East Africa",
    story: "Hand-carved by Tanzanian craftsmen, this chair blends function with cultural symbolism.",
    desc: "Hand-carved East African hardwood chair with traditional geometric patterns and woven seat.",
    price: "R8,200",
    category: "furniture",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Vintage Sideboard",
    era: "c. 1950",
    origin: "Scandinavia",
    story: "Mid-century teak sideboard brought to South Africa by a Danish diplomat in 1952.",
    desc: "Mid-century teak sideboard with sliding doors, brass handles, and dovetail drawer construction.",
    price: "R15,000",
    category: "furniture",
    img: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Colonial Wall Mirror",
    era: "c. 1900",
    origin: "England",
    story: "Once hung in a Victorian drawing room in Durban. The patina tells 120 years of stories.",
    desc: "Ornate gilded wall mirror with bevelled glass and hand-carved floral frame. Original patina.",
    price: "R6,500",
    category: "decor",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Leather Club Chair",
    era: "c. 1940",
    origin: "England",
    story: "Distressed by decades of gentlemen's club use — a chair that has absorbed a lifetime of conversation.",
    desc: "British colonial leather club chair with distressed patina, brass tack detailing, and horsehair fill.",
    price: "R9,800",
    category: "furniture",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "African Tribal Stool",
    era: "c. 1960",
    origin: "West Africa",
    story: "A functional sculpture from Ghana — carved from a single trunk, used in ceremonial settings.",
    desc: "Hand-carved stool from West Africa with intricate patterns. A functional sculpture.",
    price: "R3,200",
    category: "decor",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Industrial Pendant Light",
    era: "c. 1945",
    origin: "Germany",
    story: "Factory-original Bauhaus enamel pendant, now casting warm light over our dining tables.",
    desc: "Factory-original enamel pendant light with aged brass hardware. Electrics fully restored.",
    price: "R2,800",
    category: "lighting",
    img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AntiquesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? antiqueItems
    : antiqueItems.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Hero — story-driven */}
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-10 pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-3"
          >
            Curated Antiques · Pata Pata Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl md:text-7xl font-spectral text-cream leading-tight mb-3"
          >
            Objects with<br className="hidden md:block" /> a Past Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/60 font-light text-base max-w-lg"
          >
            Each piece in our space has a provenance. Dine amongst history — and take a piece of it home.
          </motion.p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimatedSection>
              <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-4">The Story Behind the Pieces</p>
              <h2 className="font-clarendon text-charcoal text-2xl md:text-3xl leading-tight mb-5">
                A decade of deliberate<br />curation, not collection.
              </h2>
              <div className="h-[2px] w-12 bg-amber mb-5" />
              <p className="font-spectral text-charcoal/70 text-base leading-relaxed mb-4">
                Every object you see at Pata Pata was chosen with intention. We travel markets and
                estates across Southern Africa and beyond, finding pieces that carry warmth, craft, and
                authentic character.
              </p>
              <p className="font-spectral text-charcoal/60 text-base leading-relaxed">
                We believe the space you eat in shapes the experience of the meal. That&apos;s why our
                furniture isn&apos;t decoration — it&apos;s storytelling.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=900&q=80"
                  alt="Antique objects at Pata Pata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/10 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Category nav + Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <SectionHeading
            title="Available Pieces"
            subtitle="Each item is one-of-a-kind. Inquire with our staff to arrange a viewing."
          />

          {/* Category filter */}
          <div className="flex overflow-x-auto pb-2 md:flex-wrap md:justify-center gap-2 my-10 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 min-h-[44px] px-5 py-2 text-xs tracking-[0.2em] uppercase font-bebas rounded-sm transition-all duration-400 ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-cream"
                    : "border border-charcoal/20 text-charcoal hover:border-charcoal/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filtered.map((item, i) => (
                <AnimatedSection key={item.name} delay={i * 0.07}>
                  <motion.div
                    className="group bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 cursor-pointer"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <motion.img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.8 }}
                      />
                      {/* Origin badge */}
                      <span className="absolute top-3 left-3 bg-charcoal/70 text-cream/70 text-[10px] font-bebas tracking-[0.15em] uppercase px-2 py-1 backdrop-blur-sm">
                        {item.origin}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] text-amber tracking-[0.25em] uppercase font-bebas">
                        {item.era}
                      </span>
                      <h3 className="font-spectral text-charcoal text-base mt-1 mb-1 group-hover:text-amber transition-colors duration-500">
                        {item.name}
                      </h3>
                      {/* Story line — key differentiator */}
                      <p className="text-stone text-xs font-light italic leading-relaxed mb-3">
                        {item.story}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-charcoal/8">
                        <span className="font-spectral text-amber text-base">{item.price}</span>
                        <span className="text-[10px] text-stone tracking-widest uppercase font-bebas">
                          Inquire
                        </span>
                      </div>
                    </div>
                    <div className="h-[2px] bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>

          <AnimatedSection delay={0.5} className="text-center mt-14">
            <p className="font-spectral text-stone/70 italic text-sm mb-5">
              Interested in a specific piece? We&apos;re happy to hold it for you.
            </p>
            <a
              href="mailto:info@patapata.co.za"
              className="inline-block px-8 py-3.5 border border-charcoal/30 hover:border-amber hover:text-amber text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-all duration-500"
            >
              Contact About a Piece
            </a>
          </AnimatedSection>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
