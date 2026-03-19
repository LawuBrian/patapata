"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/live-music", label: "Live Music" },
  { href: "/antiques", label: "Antiques" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Check if we're still within the hero section
      const heroEl = document.getElementById("hero-section");
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        setInHero(window.scrollY < heroBottom - 80);
      }
    };
    handleScroll(); // run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic classes based on hero state
  const headerBg = inHero ? "bg-[#1e1e1e]" : "bg-cream";
  const headerBorder = inHero ? "border-[#1e1e1e]" : "border-cream";
  const textColor = inHero ? "text-cream" : "text-charcoal";
  const hoverColor = "hover:text-amber";
  const hamburgerBg = inHero ? "bg-cream" : "bg-charcoal";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${headerBg} border-b ${headerBorder}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Left Desktop Navigation */}
            <nav className="hidden md:flex flex-1 items-center gap-6">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-bebas tracking-[0.2em] uppercase transition-colors duration-500 group ${hoverColor} ${textColor}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-amber group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </nav>

            {/* Logo Center */}
            <Link href="/" className="group flex-1 flex justify-center">
              <motion.span
                className={`text-3xl md:text-4xl font-nunito tracking-tight uppercase transition-colors duration-500 font-extrabold ${textColor}`}
                whileHover={{ opacity: 0.8 }}
              >
                Pata Pata
              </motion.span>
            </Link>

            {/* Right Navigation & Tokens */}
            <div className="hidden md:flex flex-1 items-center justify-end gap-6">
              <Link
                href="/contact#reserve"
                className={`text-[13px] font-bebas tracking-[0.2em] uppercase ${hoverColor} transition-colors duration-500 ${textColor}`}
              >
                Book A Table
              </Link>
              <div className={`flex items-center gap-4 cursor-pointer transition-colors duration-500 ${textColor}`}>
                {/* Search */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber transition-colors"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                {/* Profile */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber transition-colors"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                {/* Cart */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber transition-colors"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-7 h-[2px] block transition-colors duration-500 ${hamburgerBg}`}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-7 h-[2px] block transition-colors duration-500 ${hamburgerBg}`}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-7 h-[2px] block transition-colors duration-500 ${hamburgerBg}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-spectral text-cream tracking-widest hover:text-amber transition-colors duration-500"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
            >
              <Link
                href="/contact#reserve"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 bg-amber text-charcoal font-bebas text-lg tracking-widest uppercase rounded-sm pulse-amber"
              >
                Reserve Your Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
