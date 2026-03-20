"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const specials = [
  {
    name: "Peri-Peri Prawns",
    price: "R285",
    badge: "Chef's Special",
    tag: "Popular",
    desc: "Flame-grilled Mozambique prawns in house peri-peri butter, served with grilled maize bread.",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80",
  },
  {
    name: "Braai'd Lamb Ribs",
    price: "R320",
    badge: "Weekend Only",
    tag: "Signature",
    desc: "Slow-cooked lamb ribs glazed with tamarind and rooibos, served with chakalaka and pap.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    name: "Malva Pudding",
    price: "R95",
    badge: "Dessert",
    tag: "Must Try",
    desc: "Warm, sticky malva pudding with amarula custard and roasted almond crumble.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
  },
];

export function SpecialsCarousel() {
  return (
    <section className="relative py-16 md:py-24 bg-charcoal overflow-hidden">
      {/* Subtle amber glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C48A2D, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 z-10">
        <SectionHeading
          title="Today's Specials"
          subtitle="Seasonal dishes crafted by our kitchen — available while they last."
          darkText={false}
        />

        {/* All 3 items always visible — grid on all screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-12">
          {specials.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.12}>
              <SpecialCard item={item} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.45} className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block px-8 py-3.5 border border-amber/40 hover:border-amber text-amber font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-colors duration-500"
          >
            View Full Menu
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function SpecialCard({ item }: { item: (typeof specials)[0] }) {
  return (
    <div className="group relative bg-charcoal border border-amber/10 overflow-hidden hover:border-amber/30 transition-colors duration-700 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        {/* Badge */}
        <span className="absolute top-3 right-3 bg-amber text-charcoal text-[10px] font-bebas tracking-[0.2em] uppercase px-2.5 py-1">
          {item.badge}
        </span>
        {/* Tag */}
        <span className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-cream/70 text-[10px] font-bebas tracking-[0.15em] uppercase px-2 py-1">
          {item.tag}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-clarendon text-cream text-lg leading-tight">{item.name}</h3>
          <span className="font-spectral text-amber text-base shrink-0 mt-0.5">{item.price}</span>
        </div>
        <p className="font-light text-cream/50 text-sm leading-relaxed flex-1">{item.desc}</p>
      </div>
      {/* Amber accent line */}
      <div className="h-[2px] bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </div>
  );
}
