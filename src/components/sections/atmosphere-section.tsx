"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

export function AtmosphereSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden wood-grain-bg plank-lines">

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          title="A Space Built for Conversation"
          subtitle="Rustic textures, vintage décor and warm lighting combine to create a nostalgic yet vibrant dining experience in the heart of Johannesburg."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
              title: "Rustic Elegance",
              desc: "Handcrafted wooden furniture and antique décor pieces create an atmosphere of timeless warmth.",
            },
            {
              img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
              title: "Intimate Ambience",
              desc: "Soft amber lighting and textured walls set the mood for an unforgettable evening.",
            },
            {
              img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
              title: "Jozi Energy",
              desc: "The buzz of conversation, live rhythms, and craft cocktails bring Johannesburg's spirit alive.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.2}>
              <motion.div
                className="group relative cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-spectral text-cream mb-2">{item.title}</h3>
                  <p className="text-cream/70 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
