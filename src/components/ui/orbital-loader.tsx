"use client";

import React from "react";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const orbitalLoaderVariants = cva("flex gap-3 items-center justify-center", {
  variants: {
    messagePlacement: {
      bottom: "flex-col",
      top: "flex-col-reverse",
      right: "flex-row",
      left: "flex-row-reverse",
    },
  },
  defaultVariants: {
    messagePlacement: "bottom",
  },
});

export interface OrbitalLoaderProps {
  message?: string;
  messagePlacement?: "top" | "bottom" | "left" | "right";
}

export function OrbitalLoader({
  className,
  message,
  messagePlacement,
  ...props
}: React.ComponentProps<"div"> & OrbitalLoaderProps) {
  return (
    <div className={cn(orbitalLoaderVariants({ messagePlacement }))}>
      <div className={cn("relative w-16 h-16", className)} {...props}>
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-amber rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-2 border-transparent border-t-amber/60 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 border-2 border-transparent border-t-amber/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {message && (
        <p className="text-xs font-bebas tracking-[0.2em] uppercase text-stone">
          {message}
        </p>
      )}
    </div>
  );
}
