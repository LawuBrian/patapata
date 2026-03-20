"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Spiced Butternut Soup", desc: "Roasted butternut, coconut cream, toasted seeds", price: "R85" },
      { name: "Grilled Halloumi", desc: "Charred halloumi, roasted peppers, balsamic glaze", price: "R95" },
      { name: "African Tapas Platter", desc: "Samosas, biltong croquettes, chakalaka dip", price: "R145" },
      { name: "Prawn Tempura", desc: "Crispy prawns, sweet chilli aioli, pickled ginger", price: "R125" },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      { name: "Mozambique Prawns", desc: "Flame-grilled tiger prawns, peri-peri garlic butter, fragrant rice", price: "R285", signature: true },
      { name: "Slow-Braised Oxtail", desc: "Red wine & African spice braise, creamy mash, roasted vegetables", price: "R245", signature: true },
      { name: "Charcoal Grilled Platter", desc: "Lamb chops, boerewors, chicken, ribs, house marinades", price: "R345", signature: true },
      { name: "Pan-Seared Kingklip", desc: "Line fish, lemon beurre blanc, seasonal greens, sweet potato mash", price: "R265" },
      { name: "Durban Lamb Curry", desc: "Slow-cooked lamb, mother-in-law curry, sambals, fragrant basmati", price: "R225" },
      { name: "Jollof Rice Bowl", desc: "West African spiced rice, grilled chicken, plantain, avocado", price: "R195" },
      { name: "Pata Pata Burger", desc: "200g beef patty, chakalaka, cheddar, brioche bun, hand-cut chips", price: "R175" },
      { name: "Vegetable Tagine", desc: "Moroccan-spiced vegetables, couscous, preserved lemon, harissa yogurt", price: "R185" },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      { name: "Pap & Chakalaka", desc: "Traditional maize meal with spicy vegetable relish", price: "R55" },
      { name: "Hand-Cut Chips", desc: "Triple-cooked with rosemary salt", price: "R50" },
      { name: "Creamed Spinach", desc: "Garlic butter, nutmeg, parmesan", price: "R55" },
      { name: "Sweet Potato Mash", desc: "Honey, cinnamon, brown butter", price: "R55" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Malva Pudding", desc: "Warm sponge, apricot jam, vanilla custard", price: "R95" },
      { name: "Amarula Panna Cotta", desc: "Cream liqueur set custard, berry compote, shortbread", price: "R105" },
      { name: "Chocolate Fondant", desc: "Dark chocolate, salted caramel, vanilla ice cream", price: "R115" },
    ],
  },
  {
    id: "cocktails",
    name: "Cocktails",
    items: [
      { name: "Amber Sunset", desc: "Aged rum, passion fruit, honey syrup, bird's eye chilli", price: "R125" },
      { name: "Johannesburg Sour", desc: "Bourbon, lemon juice, amarula foam, bitters", price: "R115" },
      { name: "Rooibos Old Fashioned", desc: "Rooibos-infused whiskey, demerara sugar, orange peel", price: "R130" },
      { name: "Maboneng Mule", desc: "Vodka, ginger beer, lime, mint, African spice", price: "R105" },
      { name: "Cape Spritz", desc: "Prosecco, elderflower, soda, fresh cucumber", price: "R110" },
      { name: "African Negroni", desc: "Gin, Campari, Amarula vermouth, orange twist", price: "R120" },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("mains");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop")',
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
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream/70 font-light tracking-widest uppercase text-sm"
          >
            Flame-kissed · Slow-cooked · Soul-stirring
          </motion.p>
          <div className="section-divider mt-6" />
        </div>
      </section>

      {/* Featured Dish */}
      <section className="py-12 md:py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-6">Tonight&apos;s Recommendation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80"
                alt="Mozambique Prawns — Pata Pata Signature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <span className="absolute top-4 left-4 bg-amber text-charcoal font-bebas tracking-[0.2em] uppercase text-xs px-3 py-1.5">
                Signature Dish
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2 className="font-clarendon text-cream text-2xl md:text-3xl mb-3">Mozambique Prawns</h2>
              <p className="font-spectral text-amber text-xl mb-4">R285</p>
              <div className="h-[1px] w-10 bg-amber/50 mb-5" />
              <p className="font-spectral text-cream/65 text-base leading-relaxed mb-6">
                Flame-grilled tiger prawns in house peri-peri garlic butter, served with fragrant coconut
                rice and grilled maize bread. Our most loved dish — on the menu since day one.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Gluten-Free Option", "Spicy", "Chef's Favourite"].map((tag) => (
                  <span key={tag} className="text-[10px] font-bebas tracking-[0.15em] uppercase px-2.5 py-1 border border-cream/20 text-cream/50 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#mains"
                className="inline-block text-xs font-bebas tracking-[0.2em] uppercase text-amber hover:text-cream transition-colors duration-400"
              >
                See all mains below ↓
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-background wood-grain-bg plank-lines" id="mains">
        <div className="max-w-5xl mx-auto px-4 md:px-10">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 md:flex-wrap md:justify-center gap-2 mb-16 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 min-h-[44px] px-5 py-2.5 text-sm tracking-widest uppercase font-medium rounded-sm transition-all duration-500 ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-cream"
                    : "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/60"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            {menuCategories
              .filter((cat) => cat.id === activeCategory)
              .map((cat) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-spectral text-charcoal mb-10 text-center">
                    {cat.name}
                  </h2>
                  <div className="space-y-0">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="group flex items-start justify-between py-6 border-b border-charcoal/10 hover:bg-charcoal/[0.02] px-4 -mx-4 rounded-sm transition-colors duration-500"
                      >
                        <div className="flex-1 pr-8">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-spectral text-charcoal group-hover:text-amber transition-colors duration-500">
                              {item.name}
                            </h3>
                            {"signature" in item && item.signature && (
                              <span className="text-[10px] tracking-widest uppercase bg-amber/20 text-amber-dark px-2 py-0.5 rounded-sm font-semibold">
                                Signature
                              </span>
                            )}
                          </div>
                          <p className="text-wood/60 text-sm font-light mt-1">
                            {item.desc}
                          </p>
                        </div>
                        <span className="text-lg font-spectral text-amber whitespace-nowrap">
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
