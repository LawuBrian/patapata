"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const banners = [
  {
    label: "Menu",
    title: "Crafted Kitchen",
    body: "Seasonal dishes rooted in Southern African flavour.",
    href: "/menu",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=80",
    clipDesktop: "polygon(0 0, 95% 0, 100% 100%, 0 100%)",
  },
  {
    label: "Antique Shop",
    title: "Curated Antiques",
    body: "A decade of carefully collected objects and local art.",
    href: "/antiques",
    img: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=1200&q=80",
    clipDesktop: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    label: "Live Events",
    title: "Live Music",
    body: "Jazz, soul, Afrobeat — every Friday and Saturday night.",
    href: "/live-music",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    clipDesktop: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
  },
];

export function ThreeBannersSection() {
  return (
    <section className="w-full depth-noise section-depth-shadow">
      {/* Desktop — 3 diagonal banners */}
      <div className="hidden md:flex h-[500px] lg:h-[600px]">
        {banners.map((b, i) => (
          <Link
            key={b.href}
            href={b.href}
            className="relative flex-1 group overflow-hidden light-ray"
            style={{ clipPath: b.clipDesktop }}
          >
            {/* Background image */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlay with depth gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/50 to-charcoal/70 group-hover:from-charcoal/20 group-hover:to-charcoal/60 transition-colors duration-700" />
            {/* Amber hover tint + depth bloom */}
            <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/8 transition-colors duration-700" />
            {/* Corner AO */}
            <div className="absolute inset-0 pointer-events-none"
              style={{background: "radial-gradient(ellipse 40% 40% at 0% 100%, rgba(10,6,4,0.6) 0%, transparent 100%)"}} />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <span className="font-bebas text-amber/80 tracking-[0.3em] uppercase text-xs mb-3 group-hover:text-amber transition-colors duration-500">
                {b.label}
              </span>
              <h3 className="font-clarendon text-cream text-2xl lg:text-3xl mb-3 leading-tight">
                {b.title}
              </h3>
              <p className="font-spectral text-cream/60 text-sm leading-relaxed mb-5 max-w-[200px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {b.body}
              </p>
              <span className="font-bebas text-cream text-xs tracking-[0.25em] uppercase flex items-center gap-3 group-hover:text-amber transition-colors duration-500">
                Explore
                <span className="inline-block w-6 h-[1px] bg-current transition-all duration-500 group-hover:w-10" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile — stacked banners, straight edges */}
      <div className="md:hidden flex flex-col">
        {banners.map((b) => (
          <Link
            key={b.href}
            href={b.href}
            className="relative h-48 overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0"
              whileTap={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-charcoal/55" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <span className="font-bebas text-amber tracking-[0.3em] uppercase text-xs mb-1">
                {b.label}
              </span>
              <h3 className="font-clarendon text-cream text-xl">{b.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
