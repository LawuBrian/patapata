"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReservationCTA } from "@/components/sections/reservation-cta";

/* ─── Data ─────────────────────────────────────────────────────────── */

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  tags?: string[];
  signature?: boolean;
  spicy?: boolean;
  veg?: boolean;
};

const menuCategories: { id: string; name: string; emoji: string; items: MenuItem[] }[] = [
  {
    id: "starters",
    name: "Starters",
    emoji: "🔥",
    items: [
      { name: "Spiced Butternut Soup", desc: "Roasted butternut, coconut cream, toasted seeds", price: "R85", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", tags: ["Vegan"], veg: true },
      { name: "Grilled Halloumi", desc: "Charred halloumi, roasted peppers, balsamic glaze", price: "R95", image: "https://images.unsplash.com/photo-1619890147965-5b75b17d28e9?w=600&q=80", tags: ["Vegetarian"], veg: true },
      { name: "African Tapas Platter", desc: "Samosas, biltong croquettes, chakalaka dip", price: "R145", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80", tags: ["Sharing"] },
      { name: "Prawn Tempura", desc: "Crispy prawns, sweet chilli aioli, pickled ginger", price: "R125", image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&q=80", tags: ["Spicy"], spicy: true },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    emoji: "🍽️",
    items: [
      { name: "Mozambique Prawns", desc: "Flame-grilled tiger prawns, peri-peri garlic butter, fragrant rice", price: "R285", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80", tags: ["Signature", "Spicy"], signature: true, spicy: true },
      { name: "Slow-Braised Oxtail", desc: "Red wine & African spice braise, creamy mash, roasted vegetables", price: "R245", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", tags: ["Signature"], signature: true },
      { name: "Charcoal Grilled Platter", desc: "Lamb chops, boerewors, chicken, ribs, house marinades", price: "R345", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", tags: ["Signature", "Sharing"], signature: true },
      { name: "Pan-Seared Kingklip", desc: "Line fish, lemon beurre blanc, seasonal greens, sweet potato mash", price: "R265", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80", tags: ["Gluten-Free"] },
      { name: "Durban Lamb Curry", desc: "Slow-cooked lamb, mother-in-law curry, sambals, fragrant basmati", price: "R225", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80", tags: ["Spicy"], spicy: true },
      { name: "Jollof Rice Bowl", desc: "West African spiced rice, grilled chicken, plantain, avocado", price: "R195", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80", tags: ["Gluten-Free"] },
      { name: "Pata Pata Burger", desc: "200g beef patty, chakalaka, cheddar, brioche bun, hand-cut chips", price: "R175", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", tags: [] },
      { name: "Vegetable Tagine", desc: "Moroccan-spiced vegetables, couscous, preserved lemon, harissa yogurt", price: "R185", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", tags: ["Vegan"], veg: true },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    emoji: "🌽",
    items: [
      { name: "Pap & Chakalaka", desc: "Traditional maize meal with spicy vegetable relish", price: "R55", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80", tags: ["Vegan"], veg: true },
      { name: "Hand-Cut Chips", desc: "Triple-cooked with rosemary salt", price: "R50", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", tags: ["Vegan"], veg: true },
      { name: "Creamed Spinach", desc: "Garlic butter, nutmeg, parmesan", price: "R55", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80", tags: ["Vegetarian"], veg: true },
      { name: "Sweet Potato Mash", desc: "Honey, cinnamon, brown butter", price: "R55", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80", tags: ["Vegetarian"], veg: true },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    emoji: "🍮",
    items: [
      { name: "Malva Pudding", desc: "Warm sponge, apricot jam, vanilla custard", price: "R95", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80", tags: [] },
      { name: "Amarula Panna Cotta", desc: "Cream liqueur set custard, berry compote, shortbread", price: "R105", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", tags: [] },
      { name: "Chocolate Fondant", desc: "Dark chocolate, salted caramel, vanilla ice cream", price: "R115", image: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?w=600&q=80", tags: [] },
    ],
  },
  {
    id: "cocktails",
    name: "Cocktails",
    emoji: "🍹",
    items: [
      { name: "Amber Sunset", desc: "Aged rum, passion fruit, honey syrup, bird's eye chilli", price: "R125", image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&q=80", tags: ["Spicy"], spicy: true },
      { name: "Johannesburg Sour", desc: "Bourbon, lemon juice, amarula foam, bitters", price: "R115", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80", tags: [] },
      { name: "Rooibos Old Fashioned", desc: "Rooibos-infused whiskey, demerara sugar, orange peel", price: "R130", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80", tags: [] },
      { name: "Maboneng Mule", desc: "Vodka, ginger beer, lime, mint, African spice", price: "R105", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80", tags: [] },
      { name: "Cape Spritz", desc: "Prosecco, elderflower, soda, fresh cucumber", price: "R110", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80", tags: [] },
      { name: "African Negroni", desc: "Gin, Campari, Amarula vermouth, orange twist", price: "R120", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80", tags: [] },
    ],
  },
];

/* ─── Wooden platter back-of-card styles ───────────────────────────── */
const WOOD_BG: React.CSSProperties = {
  background: `
    repeating-linear-gradient(
      93deg,
      transparent 0px, transparent 11px,
      rgba(255,255,255,0.025) 11px, rgba(255,255,255,0.025) 12px
    ),
    repeating-linear-gradient(
      180deg,
      transparent 0px, transparent 6px,
      rgba(0,0,0,0.045) 6px, rgba(0,0,0,0.045) 7px
    ),
    linear-gradient(
      142deg,
      #2A1A0E 0%,
      #4A3020 22%,
      #3A2515 44%,
      #55381F 66%,
      #3A2515 82%,
      #2A1A0E 100%
    )
  `,
  boxShadow: "inset 0 0 60px rgba(0,0,0,0.55), inset 0 0 0 1.5px rgba(255,200,80,0.12)",
};

/* ─── Flip Card Component ────────────────────────────────────────────── */
function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => setFlipped((f) => !f), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="relative cursor-pointer"
      style={{ perspective: "1100px" }}
      onClick={toggle}
    >
      {/* ── Flip container ── */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0.0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
        className="w-full rounded-sm"
      >
        {/* ══ FRONT ══ */}
        <div
          className="w-full rounded-sm overflow-hidden bg-charcoal border border-amber/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            {/* Tags */}
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {item.signature && (
                <span className="text-[9px] font-bebas tracking-[0.15em] uppercase bg-amber text-charcoal px-2 py-0.5">
                  Signature
                </span>
              )}
              {item.spicy && (
                <span className="text-[9px] font-bebas tracking-[0.15em] uppercase bg-clay/90 text-cream px-2 py-0.5">
                  🌶 Spicy
                </span>
              )}
              {item.veg && (
                <span className="text-[9px] font-bebas tracking-[0.15em] uppercase bg-green-800/80 text-cream px-2 py-0.5">
                  🌱 Veg
                </span>
              )}
            </div>
            {/* Tap hint */}
            <div className="absolute bottom-2 right-2 opacity-50">
              <span className="text-[9px] font-bebas tracking-[0.12em] uppercase text-cream/60">tap</span>
            </div>
          </div>

          {/* Name + price */}
          <div className="px-3 py-3">
            <h3 className="font-spectral text-cream text-[13px] md:text-sm leading-snug font-semibold mb-1 line-clamp-1">
              {item.name}
            </h3>
            <span className="font-spectral text-amber text-sm font-medium">{item.price}</span>
          </div>
        </div>

        {/* ══ BACK — wooden platter ══ */}
        <div
          className="absolute inset-0 w-full h-full rounded-sm overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            ...WOOD_BG,
          }}
        >
          {/* Small image strip at top */}
          <div className="relative h-24 overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2A1A0E]/90" />
            {/* Amber ring divider */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-amber/25" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4 justify-between overflow-hidden">
            <div>
              <h3 className="font-clarendon text-cream text-base md:text-lg leading-tight mb-1.5">
                {item.name}
              </h3>
              <p className="font-spectral text-cream/55 text-[11px] md:text-xs leading-relaxed mb-3 line-clamp-3">
                {item.desc}
              </p>

              {/* Tags row */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bebas tracking-[0.12em] uppercase px-2 py-0.5 border border-amber/25 text-amber/70 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Price */}
              <p className="font-clarendon text-amber text-xl md:text-2xl">{item.price}</p>
            </div>

            {/* Order Now CTA */}
            <button
              className="w-full mt-3 py-3 bg-amber hover:bg-amber-light active:scale-95 text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("mains");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop")',
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
          <p className="font-bebas tracking-[0.3em] uppercase text-amber text-xs mb-6">
            Tonight&apos;s Recommendation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80"
                alt="Mozambique Prawns"
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
              <h2 className="font-clarendon text-cream text-2xl md:text-3xl mb-3">
                Mozambique Prawns
              </h2>
              <p className="font-spectral text-amber text-xl mb-4">R285</p>
              <div className="h-[1px] w-10 bg-amber/50 mb-5" />
              <p className="font-spectral text-cream/65 text-base leading-relaxed mb-6">
                Flame-grilled tiger prawns in house peri-peri garlic butter, served with fragrant
                coconut rice and grilled maize bread. Our most loved dish — on the menu since day
                one.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Gluten-Free Option", "Spicy", "Chef's Favourite"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bebas tracking-[0.15em] uppercase px-2.5 py-1 border border-cream/20 text-cream/50 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#menu-grid"
                className="inline-block text-xs font-bebas tracking-[0.2em] uppercase text-amber hover:text-cream transition-colors duration-400"
              >
                Browse Full Menu ↓
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Menu Grid ── */}
      <section id="menu-grid" className="bg-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-10">

          {/* Sticky Category Tabs */}
          <div className="sticky top-[80px] z-30 bg-cream/95 backdrop-blur-sm py-3 mb-8 -mx-4 px-4 md:mx-0 md:px-0 border-b border-charcoal/10">
            <div className="flex overflow-x-auto gap-2 scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 min-h-[40px] px-4 py-2 text-xs tracking-[0.18em] uppercase font-bebas rounded-sm transition-all duration-400 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-charcoal text-cream"
                      : "bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal/60"
                  }`}
                >
                  <span className="mr-1.5">{cat.emoji}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Item Grid with flip cards */}
          <AnimatePresence mode="wait">
            {menuCategories
              .filter((c) => c.id === activeCategory)
              .map((cat) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Section label */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h2 className="font-clarendon text-charcoal text-2xl md:text-3xl">{cat.name}</h2>
                    <div className="flex-1 h-[1px] bg-charcoal/10" />
                    <span className="text-xs font-bebas tracking-[0.2em] uppercase text-stone">
                      {cat.items.length} items
                    </span>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {cat.items.map((item, i) => (
                      <MenuItemCard key={item.name} item={item} index={i} />
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Tap hint */}
          <p className="text-center text-[11px] font-spectral text-stone/50 tracking-widest uppercase mt-10">
            Tap any item to see full details &amp; order
          </p>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
