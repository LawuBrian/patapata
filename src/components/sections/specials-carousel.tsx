"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const WOOD_BG: React.CSSProperties = {
  background: `
    repeating-linear-gradient(
      93deg,
      transparent 0px, transparent 11px,
      rgba(255,255,255,0.025) 11px, rgba(255,255,255,0.025) 12px
    ),
    repeating-linear-gradient(
      180deg,
      transparent 0px, transparent 6px,
      rgba(0,0,0,0.045) 6px, rgba(0,0,0,0.045) 7px
    ),
    linear-gradient(
      142deg,
      #2A1A0E 0%, #4A3020 22%, #3A2515 44%, #55381F 66%, #3A2515 82%, #2A1A0E 100%
    )
  `,
  boxShadow: "inset 0 0 60px rgba(0,0,0,0.55), inset 0 0 0 1.5px rgba(255,200,80,0.12)",
};

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
  const [flipped, setFlipped] = useState(false);
  const toggle = useCallback(() => setFlipped((f) => !f), []);

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: "1100px" }}
      onClick={toggle}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0.0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
      >
        {/* ── FRONT ── */}
        <div
          className="w-full bg-charcoal border border-amber/10 overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <span className="absolute top-3 right-3 bg-amber text-charcoal text-[10px] font-bebas tracking-[0.2em] uppercase px-2.5 py-1">
              {item.badge}
            </span>
            <span className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-cream/70 text-[10px] font-bebas tracking-[0.15em] uppercase px-2 py-1">
              {item.tag}
            </span>
            <span className="absolute bottom-2 right-2 text-[9px] font-bebas tracking-[0.12em] uppercase text-cream/40">
              tap
            </span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-clarendon text-cream text-lg leading-tight">{item.name}</h3>
              <span className="font-spectral text-amber text-base shrink-0 mt-0.5">{item.price}</span>
            </div>
            <p className="font-light text-cream/50 text-sm leading-relaxed flex-1">{item.desc}</p>
          </div>
        </div>

        {/* ── BACK — wooden platter ── */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            ...WOOD_BG,
          }}
        >
          {/* Image strip */}
          <div className="relative h-28 overflow-hidden flex-shrink-0">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2A1A0E]/90" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-amber/25" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 justify-between overflow-hidden">
            <div>
              <h3 className="font-clarendon text-cream text-xl leading-tight mb-2">{item.name}</h3>
              <p className="font-spectral text-cream/55 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex gap-2 mb-3">
                <span className="text-[9px] font-bebas tracking-[0.12em] uppercase px-2 py-0.5 border border-amber/30 text-amber/70 rounded-sm">
                  {item.badge}
                </span>
                <span className="text-[9px] font-bebas tracking-[0.12em] uppercase px-2 py-0.5 border border-cream/15 text-cream/40 rounded-sm">
                  {item.tag}
                </span>
              </div>
              <p className="font-clarendon text-amber text-2xl">{item.price}</p>
            </div>
            <button
              className="w-full mt-4 py-3 bg-amber hover:bg-amber-light active:scale-95 text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
