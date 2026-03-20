"use client";

import React from "react";
import Link from "next/link";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const photoTiles = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    alt: "Guests dining at Pata Pata",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Evening atmosphere",
  },
  {
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    alt: "Chef's special dishes",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    alt: "Live music performance",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    alt: "Pata Pata kitchen creations",
  },
  {
    src: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=600&q=80",
    alt: "Vintage antiques collection",
  },
];

const reviews = [
  {
    quote:
      "If you want to understand the spirit of Johannesburg, spend an evening at Pata Pata. The food, the music, the people — it all comes together.",
    author: "Shabalala M.",
    role: "Regular Guest",
    rating: 5,
  },
  {
    quote:
      "Absolutely stunning atmosphere. The live music on Saturday was phenomenal, and the peri-peri prawns are unlike anything else in the city.",
    author: "Priya K.",
    role: "Food Critic",
    rating: 5,
  },
  {
    quote:
      "Pata Pata has this rare quality of feeling both intimate and vibrant at the same time. The cocktails are exceptional.",
    author: "James O.",
    role: "Hospitality Reviewer",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C48A2D" className="shrink-0">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative py-16 md:py-24 bg-charcoal overflow-hidden vol-light depth-noise ao-corners section-depth-shadow">
      {/* Layered ambient depth glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full blur-[120px] opacity-[0.09] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C48A2D 0%, #7A4A10 50%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[250px] rounded-full blur-[100px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #4A3020, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 z-10">
        <SectionHeading
          title="At Pata Pata — Right Now"
          subtitle="Join the conversation. Follow us on Instagram for daily updates."
          darkText={false}
        />

        {/* Photo grid — 3×2 on desktop, 2×3 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-12">
          {photoTiles.map((tile, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="group relative aspect-square overflow-hidden bg-charcoal/50 surface-sheen">
                <img
                  src={tile.src}
                  alt={tile.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-amber/10 transition-colors duration-500" />
                {/* Per-tile depth corner */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{background: "radial-gradient(ellipse 50% 50% at 0% 100%, rgba(10,6,4,0.55) 0%, transparent 100%)"}} />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-6">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-cream/40 hover:text-amber text-xs font-bebas tracking-[0.3em] uppercase transition-colors duration-500"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow @patapatajhb on Instagram
          </Link>
        </AnimatedSection>

        {/* Review cards — reusing testimonial card structure (Repetition) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.author} delay={i * 0.12}>
              <div className="flex flex-col h-full bg-charcoal border border-amber/10 p-6 hover:border-amber/25 transition-colors duration-700">
                <StarRating count={r.rating} />
                <blockquote className="flex-1 font-spectral text-cream/70 text-sm leading-relaxed italic mb-5">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <div className="border-t border-amber/10 pt-4">
                  <p className="font-clarendon text-cream text-sm">{r.author}</p>
                  <p className="text-stone text-xs tracking-widest uppercase mt-0.5 font-sans">{r.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Rating summary */}
        <AnimatedSection delay={0.6} className="text-center mt-10">
          <div className="section-divider mx-auto mb-4" style={{ background: "rgba(196,138,45,0.3)" }} />
          <p className="text-stone text-xs tracking-widest uppercase font-sans">
            Rated 4.9 / 5 on Google &nbsp;·&nbsp; Over 400 reviews
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
