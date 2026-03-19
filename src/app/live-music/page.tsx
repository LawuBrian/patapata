"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

const allShows = [
  {
    day: "FRI",
    date: "14 Mar",
    artist: "The Maboneng Jazz Collective",
    genre: "Afro-Jazz Fusion",
    time: "20:00 – 23:00",
    desc: "Smooth jazz meets African rhythms in an unforgettable evening of improvisation and groove.",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SAT",
    date: "15 Mar",
    artist: "Siyabonga & The Rhythm Section",
    genre: "Live Afrobeat",
    time: "19:30 – 22:30",
    desc: "High-energy Afrobeat performance bringing the dance floor alive with Fela-inspired grooves.",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SUN",
    date: "16 Mar",
    artist: "Acoustic Soul Sessions",
    genre: "Neo-Soul & R&B",
    time: "16:00 – 19:00",
    desc: "Intimate acoustic performances perfect for a lazy Sunday afternoon with wine and good food.",
    img: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "FRI",
    date: "21 Mar",
    artist: "DJ Thabo — Vinyl Sessions",
    genre: "Deep House & Soulful",
    time: "21:00 – 00:00",
    desc: "A curated vinyl-only set of deep house, soulful grooves, and classic Afro-house anthems.",
    img: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SAT",
    date: "22 Mar",
    artist: "Nomvula & The Firestarters",
    genre: "Afro-Soul Live Band",
    time: "19:00 – 22:00",
    desc: "Powerful vocals and a full live band create an electrifying atmosphere of pure African soul.",
    img: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SUN",
    date: "23 Mar",
    artist: "Poetry & Jazz Afternoon",
    genre: "Spoken Word & Jazz",
    time: "15:00 – 18:00",
    desc: "Local poets and jazz musicians come together for a culturally rich afternoon experience.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
  },
];

export default function LiveMusicPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2000&auto=format&fit=crop")',
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
            Live Music
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream/70 font-light tracking-widest uppercase text-sm"
          >
            Rhythm · Soul · Jozi Nights
          </motion.p>
          <div className="section-divider mt-6" />
        </div>
      </section>

      {/* This Week */}
      <section className="py-20 bg-background wood-grain-bg plank-lines">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionHeading
            title="Live This Week"
            subtitle="Plan your evening around incredible live performances."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {allShows.slice(0, 3).map((show, i) => (
              <AnimatedSection key={show.artist} delay={i * 0.15}>
                <motion.div
                  className="group flex gap-5 bg-card rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer amber-glow"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-32 md:w-40 flex-shrink-0 overflow-hidden">
                    <motion.img
                      src={show.img}
                      alt={show.artist}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-amber text-charcoal text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                        {show.day}
                      </span>
                      <span className="text-wood/60 text-sm">{show.date}</span>
                    </div>
                    <h3 className="text-lg font-spectral text-charcoal group-hover:text-amber transition-colors duration-500 mb-1">
                      {show.artist}
                    </h3>
                    <p className="text-wood/50 text-xs tracking-widest uppercase mb-2">
                      {show.genre} · {show.time}
                    </p>
                    <p className="text-wood/60 text-sm font-light leading-relaxed">
                      {show.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Up */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionHeading
            title="Coming Up"
            subtitle="Don't miss what's just around the corner."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {allShows.slice(3).map((show, i) => (
              <AnimatedSection key={show.artist} delay={i * 0.15}>
                <motion.div
                  className="group relative rounded-sm overflow-hidden cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <motion.img
                      src={show.img}
                      alt={show.artist}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="bg-amber text-charcoal text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm mb-2 inline-block">
                      {show.day} {show.date}
                    </span>
                    <h3 className="text-xl font-spectral text-cream mt-2 mb-1">{show.artist}</h3>
                    <p className="text-cream/60 text-sm">{show.genre} · {show.time}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
