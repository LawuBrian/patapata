"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { MagneticButton } from "@/components/ui/magnetic-button";

/* ─────────────────────────────────────────────
   HERO — Fade-only quotes, fixed dead-center

   Desktop scroll narrative (scrollHeight = 1800):
   0–400px     Quote 1
   350–1000px  Quote 2
   750–1400px  Quote 3
   1350–1600px Guest review
   1550–1750px "All Welcome"
   1700–1800   CTA

   Mobile scroll narrative (scrollHeight = 900):
   0–280px     Quote 1
   260–560px   Quote 2
   540–820px   Quote 3
   800–920px   "All Welcome" + CTA
   ───────────────────────────────────────────── */

export function HeroSection() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Timing compresses on mobile to fit within the 900px effective scroll height
  const q1Range  = isMobile ? [0, 60, 260]              : [0, 100, 400];
  const q2Range  = isMobile ? [240, 360, 500, 620]      : [350, 550, 800, 1000];
  const q3Range  = isMobile ? [580, 680, 780, 870]      : [750, 950, 1200, 1400];
  const revRange = isMobile ? [0, 0]                    : [1350, 1600]; // hidden on mobile
  const welRange = isMobile ? [820, 920]                : [1550, 1750];
  const ctaRange = isMobile ? [860, 950]                : [1700, 1800];

  const quote1Opacity  = useTransform(scrollY, q1Range,  [1, 1, 0]);
  const quote2Opacity  = useTransform(scrollY, q2Range,  [0, 1, 1, 0]);
  const quote3Opacity  = useTransform(scrollY, q3Range,  [0, 1, 1, 0]);
  const reviewOpacity  = useTransform(scrollY, revRange, [0, 1]);
  const welcomeOpacity = useTransform(scrollY, welRange, [0, 1]);
  const ctaOpacity     = useTransform(scrollY, ctaRange, [0, 1]);

  return (
    <section className="relative" id="hero-section">
      <SmoothScrollHero
        scrollHeight={1800}
        desktopImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2574&auto=format&fit=crop"
        mobileImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
        desktopVideo="/patapatahero.mp4"
        mobileVideo="/patapatahero.mp4"
        desktopSecondaryVideo="/guitarpata.mp4"
        mobileSecondaryVideo="/guitarpata.mp4"
        initialClipPercentage={28}
        finalClipPercentage={80}
      >
        {/* 
          This entire children block sits inside a sticky h-screen 
          centered flex container in SmoothScrollHero.
          No motion wrappers here — just plain divs + opacity-only motion. 
        */}
        <div className="flex flex-col items-center justify-center h-full w-full">

          {/* Quote stack — all absolutely positioned, only opacity changes */}
          <div className="relative w-full flex items-center justify-center" style={{ height: "28vh" }}>

            {/* Quote 1 — bold, visible immediately on page load */}
            <motion.p
              style={{ opacity: quote1Opacity }}
              className="absolute inset-0 flex items-center justify-center font-spectral text-cream text-[17px] md:text-[32px] lg:text-[42px] leading-[1.45] md:leading-[1.8] tracking-normal drop-shadow-lg font-extrabold text-center px-8 md:px-6"
            >
              Where Maboneng meets over food,<br />
              music, and candlelight.
            </motion.p>

            {/* Quote 2 — atmospheric */}
            <motion.p
              style={{ opacity: quote2Opacity }}
              className="absolute inset-0 flex items-center justify-center font-spectral text-cream text-[15px] md:text-[32px] lg:text-[42px] leading-[1.5] md:leading-[1.8] tracking-normal drop-shadow-lg font-normal text-center px-8 md:px-6"
            >
              Rustic wood, warm lights, and African spice<br />
              drift through the room as conversation grows<br />
              and the evening settles in.
            </motion.p>

            {/* Quote 3 — invitation */}
            <motion.p
              style={{ opacity: quote3Opacity }}
              className="absolute inset-0 flex items-center justify-center font-spectral text-cream text-[15px] md:text-[32px] lg:text-[42px] leading-[1.5] md:leading-[1.8] tracking-normal drop-shadow-lg font-normal text-center px-8 md:px-6"
            >
              Join us for lunch, stay for the music,<br />
              linger into the night.
            </motion.p>

            {/* Guest review — desktop only (hidden on mobile, no scroll range) */}
            <motion.div
              style={{ opacity: reviewOpacity }}
              className="absolute inset-0 hidden md:flex flex-col items-center justify-center text-center px-6"
            >
              <p className="font-spectral italic text-cream text-[19px] md:text-[24px] lg:text-[32px] leading-[1.8] md:leading-[2] tracking-[0.02em] drop-shadow-lg mb-6">
                &ldquo;If you want to understand the spirit<br />
                of Johannesburg, spend an evening<br />
                at Pata Pata.&rdquo;
              </p>
              <p className="font-spectral text-cream/50 text-[13px] md:text-[15px] tracking-[0.35em] uppercase">
                &mdash; Shabalala, Guest review
              </p>
            </motion.div>
          </div>

          {/* "All Welcome" */}
          <motion.p
            style={{ opacity: welcomeOpacity }}
            className="mt-3 md:mt-6 text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.35em] font-spectral text-cream/70 uppercase"
          >
            <span className="inline-block w-8 h-[1px] bg-cream/40 align-middle mr-4" />
            All Welcome
            <span className="inline-block w-8 h-[1px] bg-cream/40 align-middle ml-4" />
          </motion.p>

          {/* Reservation CTA — appears after "All Welcome" */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="mt-4 md:mt-8 pointer-events-auto"
          >
            <MagneticButton intensity={20}>
              <Link
                href="/contact#reserve"
                className="inline-block px-10 py-4 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm pulse-amber transition-colors duration-500"
              >
                Reserve Your Table
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </SmoothScrollHero>
    </section>
  );
}
