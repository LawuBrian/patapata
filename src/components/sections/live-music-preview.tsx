"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const upcomingShows = [
  {
    day: "FRI",
    date: "14",
    artist: "The Maboneng Jazz Collective",
    genre: "Afro-Jazz Fusion",
    time: "20:00 – 23:00",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop"
  },
  {
    day: "SAT",
    date: "15",
    artist: "Siyabonga & The Rhythm Section",
    genre: "Live Afrobeat",
    time: "19:30 – 22:30",
    img: "https://images.unsplash.com/photo-1470229722913-7c090be5f524?q=80&w=800&auto=format&fit=crop"
  },
  {
    day: "SUN",
    date: "16",
    artist: "Acoustic Soul Sessions",
    genre: "Neo-Soul & R&B",
    time: "16:00 – 19:00",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop"
  },
];

export function LiveMusicPreviewSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-charcoal">
      {/* Warm ambient glow for nightlife mood */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C48A2D, transparent)" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <SectionHeading
          title="Nights That Carry Rhythm"
          subtitle="Live music and craft cocktails every weekend. Where food meets sound and stories unfold."
          darkText={false}
        />

        {/* Image Grid of Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {upcomingShows.map((show, i) => (
            <AnimatedSection key={show.artist} delay={i * 0.2}>
              <motion.div
                className="group relative aspect-[16/9] md:aspect-[3/4] overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6 }}
              >
                {/* Background Image */}
                <motion.img
                  src={show.img}
                  alt={show.artist}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                
                {/* Dark Gradient Matte */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Date Badge (Top Left) */}
                <div className="absolute top-6 left-6 bg-charcoal/80 backdrop-blur-md px-4 py-2 flex flex-col items-center border border-amber/20">
                  <span className="text-amber text-[10px] font-bebas tracking-widest uppercase mb-1">
                    {show.day}
                  </span>
                  <span className="text-cream text-2xl font-spectral">
                    {show.date}
                  </span>
                </div>

                {/* Content (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col justify-end">
                  <span className="text-amber text-xs font-bebas tracking-[0.2em] uppercase mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {show.time}
                  </span>
                  <h4 className="text-cream font-spectral text-2xl leading-tight mb-2 group-hover:text-amber transition-colors duration-500">
                    {show.artist}
                  </h4>
                  <p className="text-cream/70 text-sm font-sans font-light">
                    {show.genre}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href="/events"
            className="inline-block px-10 py-4 border border-amber text-amber text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber hover:text-charcoal transition-all duration-700"
          >
            View All Events
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
