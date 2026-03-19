"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { FlipItemModal } from "@/components/ui/flip-item-modal";

const signatureDishes = [
  {
    name: "Mozambique Prawns",
    desc: "Flame-grilled tiger prawns in a rich peri-peri garlic butter sauce, served with fragrant rice.",
    img: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=800&auto=format&fit=crop",
    tag: "Signature",
    ingredients: ["Tiger Prawns", "Peri-Peri", "Garlic Butter", "Lemon", "Fragrant Rice"]
  },
  {
    name: "Slow-Braised Oxtail",
    desc: "Fall-off-the-bone oxtail braised in red wine and African spices, with creamy mashed potato.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    tag: "Chef's Choice",
    notes: "Limited portions baked daily",
    ingredients: ["Oxtail", "Red Wine", "African Spices", "Butter Mash"]
  },
  {
    name: "Charcoal Grilled Platter",
    desc: "A celebration of flame — lamb chops, boerewors, chicken and ribs with house marinades.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    tag: "For Sharing",
    notes: "Requires 40 mins prep time",
    ingredients: ["Lamb Chops", "Boerewors", "Sticky Ribs", "Chicken Wings", "Chakalaka"]
  },
];

const DishCard = ({ dish, index }: { dish: any, index: number }) => {
  return (
    <AnimatedSection delay={index * 0.2}>
      <FlipItemModal 
        item={{
          id: `dish-${index}`,
          name: dish.name,
          desc: dish.desc,
          image: dish.img,
          badge: dish.tag,
          price: "R220"
        }}
      >
        <motion.div
          className="group relative cursor-pointer bg-white/5 border border-charcoal/10 overflow-hidden shadow-lg"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
            <motion.img
              src={dish.img}
              alt={dish.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 1.2 }}
            />
            {/* Tag */}
            <span className="absolute top-4 right-4 bg-amber/90 text-charcoal text-xs font-semibold tracking-widest uppercase px-3 py-1 shadow-md">
              {dish.tag}
            </span>

            {/* Subtle food steam overlay (animated CSS div) */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Ingredient Notes Reveal */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-wrap gap-2">
              {dish.ingredients.map((ing: string) => (
                <span key={ing} className="text-[9px] uppercase tracking-widest bg-charcoal/80 text-cream px-2 py-1 backdrop-blur-sm border border-cream/20">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative z-10 bg-parchment">
            <h3 className="text-xl font-clarendon text-charcoal mb-2 group-hover:text-amber-dark transition-colors duration-500">{dish.name}</h3>
            <p className="text-charcoal/70 text-sm font-sans font-light leading-relaxed line-clamp-2">
              {dish.desc}
            </p>
            {dish.notes && (
              <p className="mt-4 text-[10px] font-sans text-amber-dark tracking-[0.2em] uppercase">
                * {dish.notes}
              </p>
            )}
          </div>

          {/* Bottom amber glow on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
        </motion.div>
      </FlipItemModal>
    </AnimatedSection>
  );
};

export function DishesPreviewSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #D69A3A, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          title="Signature Dishes"
          subtitle="The flavours that define Pata Pata — slow-cooked, flame-kissed, and unforgettable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {signatureDishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-16">
          <Link
            href="/menu"
            className="inline-block px-10 py-4 border border-amber text-amber text-sm font-bebas tracking-[0.25em] uppercase rounded-sm hover:bg-amber hover:text-charcoal hover:shadow-[0_0_30px_rgba(214,154,58,0.4)] transition-all duration-700"
          >
            Explore Full Menu
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
