"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionMap = {
    up: { y: 60, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  darkText?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  darkText = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`text-center max-w-2xl mx-auto mb-16 ${className}`}>
      <h2
        className={`text-3xl md:text-5xl font-clarendon mb-6 font-medium ${
          darkText ? "text-charcoal" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm md:text-base font-sans font-light tracking-wide max-w-2xl mx-auto ${
            darkText ? "text-charcoal/70" : "text-cream/70"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Shimmer amber rule — adds depth shimmer under every section heading */}
      <div className="relative w-20 mx-auto mt-8 overflow-hidden">
        <div className={`h-px ${darkText ? "bg-charcoal/20" : "bg-cream/20"}`} />
        <div
          className="absolute inset-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(196,138,45,0.9) 40%, rgba(228,174,80,1) 50%, rgba(196,138,45,0.9) 60%, transparent)",
            backgroundSize: "200% auto",
            animation: "amber-shimmer 3s linear infinite",
          }}
        />
      </div>
    </AnimatedSection>
  );
}
