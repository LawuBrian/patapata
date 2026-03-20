"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const atmosphereItems = [
  {
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    title: "Rustic Elegance",
    caption: "Handcrafted wooden furniture",
    desc: "Handcrafted wooden furniture and antique décor pieces create an atmosphere of timeless warmth.",
  },
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    title: "Intimate Ambience",
    caption: "Soft light, warm textures",
    desc: "Soft amber lighting and textured walls set the mood for an unforgettable evening.",
  },
  {
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    title: "Jozi Energy",
    caption: "Live rhythm, great company",
    desc: "The buzz of conversation, live rhythms, and craft cocktails bring Johannesburg's spirit alive.",
  },
];

export function AtmosphereSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden wood-grain-bg plank-lines"
    >
      {/* Cursor spotlight covers the full section */}
      <CursorSpotlight className="relative max-w-7xl mx-auto px-4 md:px-10">
        <SectionHeading
          title="A Space Built for Conversation"
          subtitle="Rustic textures, vintage décor and warm lighting combine to create a nostalgic yet vibrant dining experience in the heart of Johannesburg."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {atmosphereItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.2}>
              <motion.div
                className="group relative cursor-pointer overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6 }}
              >
                {/* Portrait image with parallax */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Parallax wrapper — extends beyond container edges for movement room */}
                  <motion.div
                    className="absolute inset-[-10%]"
                    style={{ y: imgY }}
                  >
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                      loading="lazy"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-xl font-spectral text-cream mb-1.5 group-hover:text-amber transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-cream/70 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Caption */}
                <div className="bg-cream-dark px-5 py-3 flex items-center justify-between border-b-2 border-b-transparent group-hover:border-b-amber transition-colors duration-700">
                  <p className="font-spectral text-stone text-xs italic">{item.caption}</p>
                  <span className="text-amber text-xs font-bebas tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View More
                  </span>
                </div>

                <div className="h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </CursorSpotlight>
    </section>
  );
}
