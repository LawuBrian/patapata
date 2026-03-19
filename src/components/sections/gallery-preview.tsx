"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    alt: "Pata Pata restaurant interior — warm, bustling atmosphere"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    alt: "Dining area with vintage décor"
  },
  {
    src: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=1200&auto=format&fit=crop",
    alt: "Chefs preparing signature dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    alt: "Colorful presentation of African cuisine"
  },
  {
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop",
    alt: "Cocktails at sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    alt: "Live music performance"
  },
];

function LightboxModal({ image, onClose }: { image: typeof galleryImages[0] | null, onClose: () => void }) {
  return (
    <AnimatePresence>
      {image && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white/10 text-cream rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Image caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-4 left-4 right-4 text-center"
            >
              <p className="text-cream/90 text-sm font-light bg-black/50 backdrop-blur-sm py-2 px-4 rounded-full inline-block">
                {image.alt}
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function GalleryPreviewSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-[#F5F1E8]">
        <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden">

          {/* Section header - now at top of screen */}
          <div className="w-full px-6 md:px-10 mb-8 pt-8 md:pt-0 md:absolute md:top-32 md:left-0 z-10">
            <AnimatedSection delay={0.2}>
              <SectionHeading
                title="Moments at Pata Pata"
                subtitle="Glimpses of the energy, the flavours, and the soul of our space."
                darkText={true}
                className="md:text-left md:items-start md:ml-10"
              />
            </AnimatedSection>
          </div>

          {/* Gallery images - now in a light container for better text readability */}
          <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-6 md:px-10 pt-24 md:pt-40">
            {galleryImages.map((image, i) => {
              // Slight inner parallax for images as they scroll horizontally
              const imgParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
              return (
                <div
                  key={i}
                  className="relative w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] overflow-hidden shrink-0 group border border-charcoal/10 shadow-sm bg-white"
                  onClick={() => setSelectedImage(image)}
                >
                  <motion.div style={{ x: imgParallax }} className="w-[120%] h-full">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />

                  {/* Click hint */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M10 14l3.5-3.5M21 3L9 15" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* View full gallery button */}
          <AnimatedSection delay={0.6} className="text-center w-full mt-12 md:absolute md:bottom-20 z-10">
            <Link
              href="/gallery"
              className="inline-block px-10 py-4 border border-amber text-amber text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber hover:text-charcoal transition-all duration-700"
            >
              View Full Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
