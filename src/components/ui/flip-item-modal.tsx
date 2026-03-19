"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipItemProps {
  item: {
    id: string;
    name: string;
    desc: string;
    image: string;
    price?: string;
    badge?: string;
  };
  children: React.ReactNode;
}

export function FlipItemModal({ item, children }: FlipItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />

            {/* 3D Flip Card */}
            <motion.div
              className="relative w-full max-w-md aspect-[3/4] md:max-w-lg md:aspect-[4/3] preserve-3d"
              initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              style={{ perspective: 1000 }}
            >
              <div className="w-full h-full bg-charcoal border border-amber/20 p-1 flex flex-col overflow-hidden shadow-2xl relative max-h-screen md:max-h-none">

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/50 text-cream rounded-full hover:bg-amber hover:text-charcoal transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* Hero Image */}
                <div className="relative h-1/2 w-full overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    layoutId={`image-${item.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-charcoal">
                  {item.badge && (
                    <span className="text-xs font-bebas tracking-[0.2em] text-amber uppercase mb-4">
                      {item.badge}
                    </span>
                  )}
                  <h2 className="text-3xl font-clarendon text-cream mb-4">{item.name}</h2>
                  <p className="text-sm font-sans text-cream/70 leading-relaxed mb-8">
                    {item.desc}
                    <br /><br />
                    Prepared with authentic spices and local ingredients, capturing the essence of Maboneng.
                  </p>

                  {item.price && (
                    <p className="text-xl font-spectral text-amber mb-6">{item.price}</p>
                  )}

                  <button className="px-8 py-3 border border-amber/30 text-amber text-xs font-bebas tracking-widest uppercase hover:bg-amber hover:text-charcoal transition-all">
                    Order for Table
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
