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
        {/*
          Outer: full-height centered column.
          Inner: the text block is nudged ~10 vh below dead-center so it
          sits comfortably inside the video frame, not floating at the very
          middle of the screen.
          All three elements (quote area · "All Welcome" · CTA) share the
          same gap so the vertical rhythm matches the quote line-spacing.
        */}
        {/*
          w-full on BOTH flex containers is critical — without it the inner
          column shrink-wraps and all absolute children inherit a tiny width,
          causing word-by-word wrapping.
        */}
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col items-center gap-5 md:gap-7 w-full" style={{ marginTop: "10vh" }}>

            {/* Quote stack — absolutely stacked, only opacity animates */}
            <div className="relative w-full" style={{ height: "16vh" }}>

              {/* Quote 1 — bold opener */}
              <motion.p
                style={{ opacity: quote1Opacity }}
                className="absolute inset-0 flex items-center justify-center font-spectral font-semibold text-cream text-[15px] md:text-[20px] lg:text-[24px] leading-[1.6] tracking-wide drop-shadow-lg text-center px-8 md:px-32 lg:px-48"
              >
                Where Maboneng meets over food, music, and candlelight.
              </motion.p>

              {/* Quote 2 — atmospheric */}
              <motion.p
                style={{ opacity: quote2Opacity }}
                className="absolute inset-0 flex items-center justify-center font-spectral font-normal text-cream text-[13px] md:text-[17px] lg:text-[19px] leading-[1.7] tracking-wide drop-shadow-lg text-center px-8 md:px-36 lg:px-52"
              >
                Rustic wood, warm lights, and African spice drift through the room as conversation grows and the evening settles in.
              </motion.p>

              {/* Quote 3 — invitation */}
              <motion.p
                style={{ opacity: quote3Opacity }}
                className="absolute inset-0 flex items-center justify-center font-spectral font-normal text-cream text-[14px] md:text-[19px] lg:text-[22px] leading-[1.6] tracking-wide drop-shadow-lg text-center px-8 md:px-32 lg:px-48"
              >
                Join us for lunch, stay for the music, linger into the night.
              </motion.p>

              {/* Guest review — desktop only */}
              <motion.div
                style={{ opacity: reviewOpacity }}
                className="absolute inset-0 hidden md:flex flex-col items-center justify-center text-center gap-4 px-32 lg:px-48"
              >
                <p className="font-spectral italic text-cream text-[17px] lg:text-[20px] leading-[1.75] tracking-[0.01em] drop-shadow-lg">
                  &ldquo;If you want to understand the spirit of Johannesburg, spend an evening at Pata Pata.&rdquo;
                </p>
                <p className="font-spectral text-cream/50 text-[11px] tracking-[0.28em] uppercase">
                  &mdash; Shabalala, Guest review
                </p>
              </motion.div>
            </div>

            {/* "All Welcome" */}
            <motion.p
              style={{ opacity: welcomeOpacity }}
              className="text-[10px] md:text-[11px] tracking-[0.3em] font-spectral text-cream/70 uppercase"
            >
              <span className="inline-block w-6 h-[1px] bg-cream/40 align-middle mr-3" />
              All Welcome
              <span className="inline-block w-6 h-[1px] bg-cream/40 align-middle ml-3" />
            </motion.p>

            {/* Reservation CTA */}
            <motion.div style={{ opacity: ctaOpacity }} className="pointer-events-auto">
              <MagneticButton intensity={20}>
                <Link
                  href="/contact#reserve"
                  className="inline-block px-8 md:px-10 py-3.5 md:py-4 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm pulse-amber transition-colors duration-500"
                >
                  Reserve Your Table
                </Link>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </SmoothScrollHero>
    </section>
  );
}
