"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

const allShows = [
  {
    day: "FRI",
    date: "21 Mar",
    artist: "The Maboneng Jazz Collective",
    genre: "Afro-Jazz Fusion",
    time: "20:00 – 23:00",
    desc: "Smooth jazz meets African rhythms in an unforgettable evening of improvisation and groove.",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    day: "SAT",
    date: "22 Mar",
    artist: "Siyabonga & The Rhythm Section",
    genre: "Live Afrobeat",
    time: "19:30 – 22:30",
    desc: "High-energy Afrobeat performance bringing the dance floor alive with Fela-inspired grooves.",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SUN",
    date: "23 Mar",
    artist: "Acoustic Soul Sessions",
    genre: "Neo-Soul & R&B",
    time: "16:00 – 19:00",
    desc: "Intimate acoustic performances perfect for a lazy Sunday afternoon with wine and good food.",
    img: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "FRI",
    date: "28 Mar",
    artist: "DJ Thabo — Vinyl Sessions",
    genre: "Deep House & Soulful",
    time: "21:00 – 00:00",
    desc: "A curated vinyl-only set of deep house, soulful grooves, and classic Afro-house anthems.",
    img: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SAT",
    date: "29 Mar",
    artist: "Nomvula & The Firestarters",
    genre: "Afro-Soul Live Band",
    time: "19:00 – 22:00",
    desc: "Powerful vocals and a full live band create an electrifying atmosphere of pure African soul.",
    img: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=800&auto=format&fit=crop",
  },
  {
    day: "SUN",
    date: "30 Mar",
    artist: "Poetry & Jazz Afternoon",
    genre: "Spoken Word & Jazz",
    time: "15:00 – 18:00",
    desc: "Local poets and jazz musicians come together for a culturally rich afternoon experience.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
  },
];

const weeklyRhythm = [
  { day: "Friday", time: "19:30 – 23:00", type: "Live Band Night", note: "Book ahead" },
  { day: "Saturday", time: "19:00 – 00:00", type: "Live Band + DJ", note: "Peak night" },
  { day: "Sunday", time: "15:00 – 19:00", type: "Acoustic Sessions", note: "Relaxed vibe" },
];

const featured = allShows[0];

export default function LiveMusicPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${featured.img}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-10 pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-3"
          >
            Live Events · Pata Pata
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl md:text-7xl font-spectral text-cream leading-tight mb-3"
          >
            Live Music &<br className="hidden md:block" /> Live Nights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/60 font-light text-base md:text-lg max-w-xl"
          >
            Every Friday and Saturday night Pata Pata comes alive with the best of Jozi&apos;s live music scene. Come for the food, stay for the rhythm.
          </motion.p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 md:py-16 bg-charcoal border-b border-amber/10">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-6">Featured This Weekend</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={featured.img}
                  alt={featured.artist}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-amber text-charcoal font-bebas tracking-[0.2em] uppercase text-xs px-3 py-1.5">
                  {featured.day} · {featured.date}
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-clarendon text-cream text-2xl md:text-3xl mb-3">{featured.artist}</h2>
              <p className="font-bebas tracking-[0.2em] uppercase text-amber/70 text-xs mb-4">
                {featured.genre} · {featured.time}
              </p>
              <p className="font-spectral text-cream/60 text-base leading-relaxed mb-6">{featured.desc}</p>
              <Link
                href="/contact#reserve"
                className="inline-block px-8 py-3.5 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-colors duration-500"
              >
                Reserve for This Night
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <SectionHeading
            title="This Month"
            subtitle="Plan your evening around incredible live performances."
          />

          <div className="space-y-4 mt-12">
            {allShows.map((show, i) => (
              <AnimatedSection key={show.artist} delay={i * 0.08}>
                <motion.div
                  className="group flex flex-col sm:flex-row gap-0 overflow-hidden bg-card border border-charcoal/8 hover:border-amber/30 hover:shadow-lg transition-all duration-700"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Date block */}
                  <div className="flex-shrink-0 bg-charcoal sm:w-20 flex sm:flex-col items-center justify-center gap-3 sm:gap-1 px-5 py-4 sm:px-0 sm:py-6">
                    <span className="font-bebas text-amber text-sm tracking-[0.2em] uppercase">{show.day}</span>
                    <span className="text-cream/50 text-xs font-light">{show.date}</span>
                  </div>
                  {/* Thumbnail */}
                  <div className="hidden sm:block w-28 md:w-36 flex-shrink-0 overflow-hidden">
                    <img
                      src={show.img}
                      alt={show.artist}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
                    <h3 className="font-spectral text-charcoal text-lg group-hover:text-amber transition-colors duration-500 mb-1">
                      {show.artist}
                    </h3>
                    <p className="text-stone text-xs tracking-widest uppercase font-sans mb-2">
                      {show.genre} · {show.time}
                    </p>
                    <p className="text-charcoal/50 text-sm font-light leading-relaxed hidden md:block">
                      {show.desc}
                    </p>
                  </div>
                  {/* CTA */}
                  <div className="flex-shrink-0 flex items-center px-5 py-4 sm:pr-6">
                    <Link
                      href="/contact#reserve"
                      className="text-xs font-bebas tracking-[0.2em] uppercase text-amber hover:text-charcoal bg-transparent hover:bg-amber px-4 py-2 border border-amber/40 hover:border-amber transition-all duration-400 rounded-sm whitespace-nowrap"
                    >
                      Reserve
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Rhythm */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <AnimatedSection>
            <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-3">Every Week, Without Fail</p>
            <h2 className="font-clarendon text-cream text-2xl md:text-3xl mb-10">The Weekly Rhythm</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {weeklyRhythm.map((r, i) => (
              <AnimatedSection key={r.day} delay={i * 0.12}>
                <div className="border border-amber/15 p-6 hover:border-amber/35 transition-colors duration-700">
                  <span className="font-bebas text-amber tracking-[0.25em] uppercase text-sm block mb-2">{r.day}</span>
                  <h3 className="font-clarendon text-cream text-lg mb-1">{r.type}</h3>
                  <p className="text-cream/50 text-sm font-light mb-3">{r.time}</p>
                  <span className="inline-block text-[10px] font-bebas tracking-[0.2em] uppercase px-2.5 py-1 bg-amber/15 text-amber rounded-sm">
                    {r.note}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience visuals — vibe strip */}
      <section className="py-0 overflow-hidden">
        <div className="flex flex-col sm:flex-row h-48 sm:h-64">
          {[
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
            "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80",
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
            "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&q=80",
          ].map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden relative group">
              <img
                src={src}
                alt="Live music at Pata Pata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
