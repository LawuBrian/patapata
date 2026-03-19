"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

const antiqueItems = [
  {
    name: "Victorian Writing Desk",
    era: "c. 1880",
    desc: "Mahogany writing desk with brass fittings, original leather inlay, and hand-carved detailing.",
    price: "R12,500",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Art Deco Floor Lamp",
    era: "c. 1930",
    desc: "Brass and frosted glass floor lamp with geometric Art Deco base. Fully restored and rewired.",
    price: "R4,800",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "African Carved Chair",
    era: "c. 1920",
    desc: "Hand-carved East African hardwood chair with traditional geometric patterns and woven seat.",
    price: "R8,200",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Vintage Sideboard",
    era: "c. 1950",
    desc: "Mid-century teak sideboard with sliding doors, brass handles, and dovetail drawer construction.",
    price: "R15,000",
    img: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Colonial Wall Mirror",
    era: "c. 1900",
    desc: "Ornate gilded wall mirror with bevelled glass and hand-carved floral frame. Original patina.",
    price: "R6,500",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Leather Club Chair",
    era: "c. 1940",
    desc: "British colonial leather club chair with distressed patina, brass tack detailing, and horsehair fill.",
    price: "R9,800",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "African Tribal Stool",
    era: "c. 1960",
    desc: "Hand-carved stool from West Africa with intricate patterns. A functional sculpture.",
    price: "R3,200",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Industrial Pendant Light",
    era: "c. 1945",
    desc: "Factory-original enamel pendant light with aged brass hardware. Electrics fully restored.",
    price: "R2,800",
    img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AntiquesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-spectral text-cream mb-4"
          >
            Antiques
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream/70 font-light tracking-widest uppercase text-sm max-w-lg mx-auto"
          >
            Dine Amongst History · Take a Piece Home
          </motion.p>
          <div className="section-divider mt-6" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background wood-grain-bg">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <p className="text-lg text-wood font-light leading-relaxed">
              At Pata Pata, the décor is part of the experience. Each piece of antique furniture
              in our space has been carefully curated and many are available for purchase.
              From Victorian desks to hand-carved African chairs, you can take home a piece
              of the atmosphere you fell in love with.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-20 bg-background wood-grain-bg plank-lines">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            title="Available Pieces"
            subtitle="Each item is one-of-a-kind. Inquire with our staff during your visit."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {antiqueItems.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <motion.div
                  className="group bg-card rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer amber-glow"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-amber tracking-widest uppercase font-semibold">
                      {item.era}
                    </span>
                    <h3 className="text-lg font-spectral text-charcoal mt-1 mb-2 group-hover:text-amber transition-colors duration-500">
                      {item.name}
                    </h3>
                    <p className="text-wood/60 text-sm font-light leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-spectral text-amber">{item.price}</span>
                      <span className="text-xs text-wood/40 tracking-widest uppercase">
                        Available
                      </span>
                    </div>
                  </div>
                  <div className="h-1 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.8} className="text-center mt-16">
            <p className="text-wood/60 font-light italic">
              Interested in a piece? Ask your server or contact us to arrange a viewing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
