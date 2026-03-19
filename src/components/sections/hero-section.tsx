"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

/* ─────────────────────────────────────────────
   HERO — Fade-only quotes, fixed dead-center

   Text is ALWAYS centered on screen from the
   very first frame. Only opacity changes.

   Scroll narrative (scrollHeight = 1800):
   0–400px     Quote 1 visible (bold)
   350–800px   Quote 2 fades in
   750–1200px  Quote 3 fades in
   1350–1650px Guest review (video nearly full)
   1550+       "All Welcome"
   ───────────────────────────────────────────── */

export function HeroSection() {
  const { scrollY } = useScroll();

  const quote1Opacity = useTransform(scrollY, [0, 100, 400], [1, 1, 0]);
  const quote2Opacity = useTransform(scrollY, [350, 550, 800, 1000], [0, 1, 1, 0]);
  const quote3Opacity = useTransform(scrollY, [750, 950, 1200, 1400], [0, 1, 1, 0]);
  const reviewOpacity = useTransform(scrollY, [1350, 1600], [0, 1]);
  const welcomeOpacity = useTransform(scrollY, [1550, 1750], [0, 1]);

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
          <div className="relative w-full flex items-center justify-center" style={{ height: "30vh" }}>

            {/* Quote 1 — bold, visible immediately on page load */}
            <motion.p
              style={{ opacity: quote1Opacity }}
              className="absolute inset-0 flex items-center justify-center font-nunito text-cream text-[22px] md:text-[32px] lg:text-[42px] leading-[1.6] md:leading-[1.8] tracking-normal drop-shadow-lg font-extrabold text-center px-6"
            >
              Where Maboneng meets over food,<br />
              music, and candlelight.
            </motion.p>

            {/* Quote 2 — atmospheric */}
            <motion.p
              style={{ opacity: quote2Opacity }}
              className="absolute inset-0 flex items-center justify-center font-nunito text-cream text-[22px] md:text-[32px] lg:text-[42px] leading-[1.6] md:leading-[1.8] tracking-normal drop-shadow-lg font-normal text-center px-6"
            >
              Rustic wood, warm lights, and African spice<br />
              drift through the room as conversation grows<br />
              and the evening settles in.
            </motion.p>

            {/* Quote 3 — invitation */}
            <motion.p
              style={{ opacity: quote3Opacity }}
              className="absolute inset-0 flex items-center justify-center font-nunito text-cream text-[22px] md:text-[32px] lg:text-[42px] leading-[1.6] md:leading-[1.8] tracking-normal drop-shadow-lg font-normal text-center px-6"
            >
              Join us for lunch, stay for the music,<br />
              linger into the night.
            </motion.p>

            {/* Guest review — when video is almost full */}
            <motion.div
              style={{ opacity: reviewOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            >
              <p className="font-spectral italic text-cream text-[19px] md:text-[24px] lg:text-[32px] leading-[1.8] md:leading-[2] tracking-[0.02em] drop-shadow-lg mb-6">
                &ldquo;If you want to understand the spirit<br />
                of Johannesburg, spend an evening<br />
                at Pata Pata.&rdquo;
              </p>
              <p className="font-bebas text-cream/50 text-[13px] md:text-[15px] tracking-[0.35em] uppercase">
                &mdash; Shabalala, Guest review
              </p>
            </motion.div>
          </div>

          {/* "All Welcome" */}
          <motion.p
            style={{ opacity: welcomeOpacity }}
            className="mt-6 text-[11px] md:text-sm tracking-[0.35em] font-bebas text-cream/70 uppercase"
          >
            <span className="inline-block w-8 h-[1px] bg-cream/40 align-middle mr-4" />
            All Welcome
            <span className="inline-block w-8 h-[1px] bg-cream/40 align-middle ml-4" />
          </motion.p>
        </div>
      </SmoothScrollHero>
    </section>
  );
}
