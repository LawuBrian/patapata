"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ReservationCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background — fixed parallax only on desktop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

      <div className="relative max-w-3xl mx-auto px-4 md:px-10 text-center">
        <AnimatedSection>
          {/* Proximity: hours info grouped tightly above the headline — Contrast: amber against dark */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-5 border border-amber/20 px-5 py-2 rounded-sm">
            <span className="text-amber text-xs font-bebas tracking-[0.3em] uppercase">
              Mon – Thu &nbsp; 11:00 – 22:00
            </span>
            <span className="text-amber/30 hidden sm:block">|</span>
            <span className="text-amber text-xs font-bebas tracking-[0.3em] uppercase">
              Fri – Sat &nbsp; 11:00 – 00:00
            </span>
            <span className="text-amber/30 hidden sm:block">|</span>
            <span className="text-amber text-xs font-bebas tracking-[0.3em] uppercase">
              Sun &nbsp; 11:00 – 21:00
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-spectral text-cream mb-5">
            Reserve Your Table
          </h2>
          <p className="text-cream/60 font-light text-base md:text-lg mb-3 max-w-xl mx-auto">
            Whether it&apos;s an intimate dinner, a celebration, or a night of live music and craft
            cocktails — we&apos;re ready to welcome you.
          </p>
          <p className="text-amber/70 text-sm italic mb-10">
            Tonight&apos;s tables fill quickly · Live music every Friday &amp; Saturday
          </p>

          {/* Alignment: buttons stacked on mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton intensity={25}>
              <Link
                href="/contact#reserve"
                className="inline-block w-full sm:w-auto min-h-[52px] px-10 py-4 bg-amber text-charcoal text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber-light hover:scale-105 hover:shadow-[0_0_30px_rgba(214,154,58,0.6)] transition-all duration-700 pulse-amber"
              >
                Book a Table
              </Link>
            </MagneticButton>
            <a
              href="tel:+27113348038"
              className="inline-block w-full sm:w-auto min-h-[52px] px-10 py-4 border border-cream/30 text-cream text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:border-amber hover:text-amber transition-all duration-700 flex items-center justify-center"
            >
              Call Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
