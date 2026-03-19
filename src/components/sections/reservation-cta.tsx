"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ReservationCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <AnimatedSection>
          <p className="text-amber text-sm tracking-[0.4em] uppercase font-bebas mb-6">
            Join Us
          </p>
          <h2 className="text-4xl md:text-6xl font-spectral text-cream mb-6">
            Reserve Your Table
          </h2>
          <p className="text-cream/60 font-light text-lg mb-4 max-w-xl mx-auto">
            Whether it's an intimate dinner, a celebration, or a night of live music and craft
            cocktails — we're ready to welcome you.
          </p>
          <p className="text-amber/70 text-sm italic mb-10">
            Tonight's tables fill quickly · Live music every Friday & Saturday
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton intensity={25}>
              <Link
                href="/contact#reserve"
                className="inline-block px-12 py-4 bg-amber text-charcoal text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber-light hover:scale-105 hover:shadow-[0_0_30px_rgba(214,154,58,0.6)] transition-all duration-700 pulse-amber"
              >
                Book a Table
              </Link>
            </MagneticButton>
            <a
              href="tel:+27113348038"
              className="inline-block px-12 py-4 border border-cream/30 text-cream text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:border-amber hover:text-amber transition-all duration-700"
            >
              Call Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
