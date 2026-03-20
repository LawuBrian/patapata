"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

export function BrandStorySection() {
  return (
    <section className="relative bg-cream py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* Row 1: Immersive media left + story text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">

          {/* Left — immersive video */}
          <AnimatedSection>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-charcoal">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=80"
                className="w-full h-full object-cover"
              >
                <source src="/guitarpata.mp4" type="video/mp4" />
                {/* fallback image if video fails */}
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=80"
                  alt="Inside Pata Pata Restaurant"
                  className="w-full h-full object-cover"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent pointer-events-none" />
              {/* Location badge */}
              <div className="absolute bottom-6 left-6">
                <span className="font-bebas text-cream text-xs tracking-[0.3em] uppercase bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
                  Maboneng · Johannesburg
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — structured text */}
          <AnimatedSection delay={0.15}>
            <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-4">
              Est. Maboneng Precinct
            </p>
            <h2 className="font-clarendon text-charcoal text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
              Born from craft,<br />culture, and<br />community.
            </h2>
            <div className="h-[2px] w-12 bg-amber mb-6" />
            <p className="font-spectral text-charcoal/75 text-base md:text-lg leading-relaxed mb-5">
              At Pata Pata we believe a great meal is about far more than food. It&apos;s about the warmth
              of the room, the rhythm of live music drifting across a candlelit table, and the stories
              exchanged over slow-cooked dishes and hand-crafted cocktails.
            </p>
            <p className="font-spectral text-charcoal/60 text-base leading-relaxed mb-8">
              Our menu draws on Southern African heritage — bold spices, fire-kissed proteins, and
              ingredients sourced from local farmers and markets. Each dish is crafted to be both
              familiar and surprising.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 bg-charcoal hover:bg-charcoal/90 text-cream font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-colors duration-500"
            >
              Our Full Story
            </Link>
          </AnimatedSection>
        </div>

        {/* Row 2: Quote + landscape image — reversed on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left — pull quote + values */}
          <AnimatedSection delay={0.1} className="order-2 md:order-1">
            <blockquote className="font-spectral italic text-charcoal/80 text-xl md:text-2xl leading-relaxed border-l-2 border-amber pl-6 mb-8">
              &ldquo;If you want to understand the spirit of Johannesburg, spend an evening at Pata
              Pata.&rdquo;
            </blockquote>
            <p className="font-bebas text-stone tracking-[0.2em] uppercase text-xs ml-7 mb-10">
              — Shabalala, Guest
            </p>
            <div className="grid grid-cols-3 gap-4 ml-0">
              {[
                { num: "400+", label: "Five-star reviews" },
                { num: "10+", label: "Years in Maboneng" },
                { num: "Fri–Sat", label: "Live music nights" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-clarendon text-amber text-xl md:text-2xl">{stat.num}</span>
                  <span className="font-sans text-stone text-xs tracking-wider uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — landscape image */}
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-black/5">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80"
                alt="Pata Pata restaurant evening atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/10 to-transparent" />
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
