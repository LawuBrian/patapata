"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

interface iISmoothScrollHeroProps {
  scrollHeight: number;
  desktopImage: string;
  mobileImage: string;
  initialClipPercentage: number;
  finalClipPercentage: number;
  desktopVideo?: string;
  mobileVideo?: string;
  desktopSecondaryVideo?: string;
  mobileSecondaryVideo?: string;
  children?: React.ReactNode;
}

const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage = "https://images.unsplash.com/photo-1511884642898-4c7edcad34c4",
  mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop",
  desktopVideo,
  mobileVideo,
  desktopSecondaryVideo,
  mobileSecondaryVideo,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  children,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const effectiveScrollHeight = isMobile ? Math.min(scrollHeight, 900) : scrollHeight;
  const { scrollY } = useScroll();

  // On mobile use a wider horizontal clip so the initial state looks landscape
  // rather than a portrait-shaped rectangle.
  const mobileClipX = 4;   // near full width  → landscape feel
  const mobileClipY = 20;  // taller crop top/bottom → letterbox → still landscape

  const clipStartX = useTransform(
    scrollY,
    [0, effectiveScrollHeight],
    prefersReducedMotion ? [0, 0] : [isMobile ? mobileClipX : initialClipPercentage, 0]
  );
  const clipEndX = useTransform(
    scrollY,
    [0, effectiveScrollHeight],
    prefersReducedMotion ? [100, 100] : [isMobile ? 100 - mobileClipX : 100 - initialClipPercentage, 100]
  );
  const clipStartY = useTransform(
    scrollY,
    [0, effectiveScrollHeight],
    prefersReducedMotion ? [0, 0] : [isMobile ? mobileClipY : initialClipPercentage, 0]
  );
  const clipEndY = useTransform(
    scrollY,
    [0, effectiveScrollHeight],
    prefersReducedMotion ? [100, 100] : [isMobile ? 100 - mobileClipY : 100 - initialClipPercentage, 100]
  );

  const clipPath = useMotionTemplate`polygon(${clipStartX}% ${clipStartY}%, ${clipEndX}% ${clipStartY}%, ${clipEndX}% ${clipEndY}%, ${clipStartX}% ${clipEndY}%)`;

  // Glow border — tracks the clip rectangle edges (same values, as %‑strings)
  // clipStartX === right inset (symmetric), clipStartY === bottom inset (symmetric)
  const glowLeft   = useMotionTemplate`${clipStartX}%`;
  const glowRight  = useMotionTemplate`${clipStartX}%`;
  const glowTop    = useMotionTemplate`${clipStartY}%`;
  const glowBottom = useMotionTemplate`${clipStartY}%`;

  // Fullscreen flash — fires once when clip is nearly expanded
  const hasFlashedRef = useRef(false);
  const [glowClass, setGlowClass] = useState<"led-glow" | "led-flash">("led-glow");

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      if (!hasFlashedRef.current && y >= effectiveScrollHeight * 0.92) {
        hasFlashedRef.current = true;
        setGlowClass("led-flash");
        setTimeout(() => setGlowClass("led-glow"), 2500);
      }
    });
    return unsub;
  }, [scrollY, effectiveScrollHeight]);

  // Ken Burns zoom effect
  const videoScale = useTransform(
    scrollY,
    [0, effectiveScrollHeight],
    prefersReducedMotion ? [1, 1] : [1, 1.15]
  );

  // Lighter overlay so the restaurant video stays visible
  const overlayOpacity = useTransform(scrollY, [0, effectiveScrollHeight], [0.15, 0.45]);

  // Video Sequencing State
  const [isPlayingPrimary, setIsPlayingPrimary] = useState(true);
  
  // We handle sequential playback gracefully. 
  // Primary video plays once. Secondary plays and loops indefinitely.
  const desktopPrimaryRef = useRef<HTMLVideoElement>(null);
  const desktopSecondaryRef = useRef<HTMLVideoElement>(null);
  
  const mobilePrimaryRef = useRef<HTMLVideoElement>(null);
  const mobileSecondaryRef = useRef<HTMLVideoElement>(null);

  const handlePrimaryEnded = () => {
    setIsPlayingPrimary(false);
    if (desktopSecondaryRef.current) desktopSecondaryRef.current.play();
    if (mobileSecondaryRef.current) mobileSecondaryRef.current.play();
  };

  return (
    <div
      style={{ height: `calc(${effectiveScrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      {/* ── Single sticky container for BOTH video + text ── */}
      <div className="sticky top-0 h-screen w-full" style={{ background: "#1e1e1e" }}>

        {/* Video/Image layer with clip-path */}
        <motion.div
          className="absolute inset-0 overflow-hidden hero-clip"
          style={{
            clipPath,
            willChange: "transform, opacity",
          }}
        >
          {/* Mobile background */}
          {mobileVideo && mobileSecondaryVideo ? (
            <div className="absolute inset-0 md:hidden overflow-hidden">
              <motion.video
                ref={mobilePrimaryRef}
                autoPlay
                muted
                playsInline
                poster={mobileImage}
                style={{ scale: videoScale, opacity: isPlayingPrimary ? 1 : 0 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                onEnded={handlePrimaryEnded}
              >
                <source src={mobileVideo} type="video/mp4" />
              </motion.video>
              <motion.video
                ref={mobileSecondaryRef}
                muted
                loop
                playsInline
                style={{ scale: videoScale, opacity: isPlayingPrimary ? 0 : 1 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              >
                <source src={mobileSecondaryVideo} type="video/mp4" />
              </motion.video>
            </div>
          ) : mobileVideo ? (
             <div className="absolute inset-0 md:hidden overflow-hidden">
             <motion.video
               autoPlay
               muted
               loop
               playsInline
               poster={mobileImage}
               style={{ scale: videoScale }}
               className="w-full h-full object-cover"
             >
               <source src={mobileVideo} type="video/mp4" />
             </motion.video>
           </div>
          ) : (
            <motion.div
              className="absolute inset-0 md:hidden"
              style={{
                backgroundImage: `url(${mobileImage})`,
                backgroundSize: "cover",
                scale: videoScale,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          {/* Desktop background */}
          {desktopVideo && desktopSecondaryVideo ? (
            <div className="absolute inset-0 hidden md:block overflow-hidden bg-black">
              <motion.video
                ref={desktopPrimaryRef}
                autoPlay
                muted
                playsInline
                poster={desktopImage}
                style={{ scale: videoScale, opacity: isPlayingPrimary ? 1 : 0 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                onEnded={handlePrimaryEnded}
              >
                <source src={desktopVideo} type="video/mp4" />
              </motion.video>
              <motion.video
                ref={desktopSecondaryRef}
                muted
                loop
                playsInline
                style={{ scale: videoScale, opacity: isPlayingPrimary ? 0 : 1 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              >
                <source src={desktopSecondaryVideo} type="video/mp4" />
              </motion.video>
            </div>
          ) : desktopVideo ? (
            <div className="absolute inset-0 hidden md:block overflow-hidden">
              <motion.video
                autoPlay
                muted
                loop
                playsInline
                poster={desktopImage}
                style={{ scale: videoScale }}
                className="w-full h-full object-cover"
              >
                <source src={desktopVideo} type="video/mp4" />
              </motion.video>
            </div>
          ) : (
            <motion.div
              className="absolute inset-0 hidden md:block"
              style={{
                backgroundImage: `url(${desktopImage})`,
                backgroundSize: "cover",
                scale: videoScale,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(30,30,30,0.5) 0%, rgba(30,30,30,0.15) 40%, rgba(30,30,30,0.15) 60%, rgba(30,30,30,0.5) 100%)",
            }}
          />

          {/* Dynamic darkening on scroll */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ opacity: overlayOpacity, background: "#1e1e1e" }}
          />

        </motion.div>

        {/* ── LED glow border — tracks the clip rectangle, outside clip-path so shadow is visible ── */}
        <motion.div
          className={`absolute pointer-events-none z-25 ${glowClass}`}
          style={{
            top:    glowTop,
            left:   glowLeft,
            right:  glowRight,
            bottom: glowBottom,
            border: "1px solid rgba(196,138,45,0.45)",
          }}
        />

        {/* ── Text layer — OUTSIDE the clipPath, always full-screen ── */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto w-full h-full flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollHero;
