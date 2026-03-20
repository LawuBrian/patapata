"use client";

import React from "react";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote:
      "Pata Pata is unlike anywhere else in Johannesburg. The oxtail is the finest I've had in years — deeply spiced, tender, honest. The live jazz made the evening feel genuinely special.",
    author: "Thandi M.",
    role: "Regular Guest",
    rating: 5,
  },
  {
    quote:
      "From the moment we walked in we felt the warmth of the space. Antique furniture, candlelight, the smell of charcoal from the grill. The Mozambique Prawns were extraordinary. We will be back.",
    author: "James & Lisa B.",
    role: "Visiting from Cape Town",
    rating: 5,
  },
  {
    quote:
      "I celebrated my anniversary here and the staff made every detail count. The cocktails are inventive and the Rooibos Old Fashioned is a masterclass. A truly soul-stirring evening.",
    author: "Nomsa K.",
    role: "Anniversary Dinner",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#C48A2D"
          className="shrink-0"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-charcoal overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C48A2D, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 z-10">
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Every table has a story. Here are a few of ours."
          darkText={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.15}>
              <div className="flex flex-col h-full bg-charcoal-light border border-amber/10 p-6 md:p-8 hover:border-amber/30 transition-colors duration-700">
                {/* Star rating — Contrast: amber on charcoal */}
                <StarRating count={t.rating} />

                {/* Quote body — Proximity: stars and quote grouped tightly */}
                <blockquote className="flex-1 font-spectral text-cream/80 text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author block — Proximity: name and role grouped, separated from quote */}
                <div className="border-t border-amber/10 pt-5">
                  <p className="font-clarendon text-cream text-sm tracking-wide">
                    {t.author}
                  </p>
                  <p className="font-sans text-stone text-xs tracking-widest uppercase mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Alignment: divider and attribution centered */}
        <AnimatedSection delay={0.5} className="text-center mt-14">
          <div className="section-divider mx-auto mb-5" style={{ background: "rgba(196,138,45,0.4)" }} />
          <p className="font-sans text-stone text-xs tracking-widest uppercase">
            Rated 4.9 / 5 on Google &nbsp;·&nbsp; Over 400 reviews
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
