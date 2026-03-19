"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop", category: "food", alt: "Plated dish" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", category: "interior", alt: "Restaurant interior" },
  { src: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=1200&auto=format&fit=crop", category: "music", alt: "Live music" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop", category: "food", alt: "Grilled dish" },
  { src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop", category: "music", alt: "Band performing" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop", category: "interior", alt: "Bar area" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop", category: "people", alt: "Guests dining" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop", category: "food", alt: "Braised meat" },
  { src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1200&auto=format&fit=crop", category: "cocktails", alt: "Craft cocktail" },
  { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop", category: "cocktails", alt: "Cocktail close-up" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop", category: "interior", alt: "Dining space" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop", category: "food", alt: "Grilled platter" },
];

const categories = ["all", "food", "interior", "music", "cocktails", "people"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-spectral text-cream mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream/70 font-light tracking-widest uppercase text-sm"
          >
            Moments · Flavours · Energy
          </motion.p>
          <div className="section-divider mt-6" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background wood-grain-bg plank-lines">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm tracking-widest uppercase font-medium rounded-sm transition-all duration-500 ${
                  filter === cat
                    ? "bg-charcoal text-cream"
                    : "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                    i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(img.src)}
                >
                  <div className={`${i % 5 === 0 ? "aspect-square" : "aspect-square"} overflow-hidden`}>
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-2xl">
                      +
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              alt="Gallery image expanded"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-cream/60 hover:text-cream text-3xl transition-colors duration-300"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ReservationCTA />
    </>
  );
}
