"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/live-music", label: "Events" },
];

const mobileLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/live-music", label: "Events" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const heroEl = document.getElementById("hero-section");
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        setInHero(window.scrollY < heroBottom - 80);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

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
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Left Desktop Navigation */}
            <nav className="hidden md:flex flex-1 items-center gap-6">
              {navLinks.map((link) => (
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
            <Link href="/" className="group flex-1 flex justify-center items-center">
              {/* Try to load logo image; fall back to wordmark */}
              <motion.div whileHover={{ opacity: 0.8 }} className="relative flex items-center">
                <span
                  className={`text-3xl md:text-4xl font-nunito tracking-tight uppercase transition-colors duration-500 font-extrabold ${textColor}`}
                >
                  Pata Pata
                </span>
              </motion.div>
            </Link>

            {/* Right: search + icons + reserve */}
            <div className="hidden md:flex flex-1 items-center justify-end gap-4">
              {/* Collapsible search */}
              <div className="flex items-center gap-2">
                <AnimatePresence>
                  {searchOpen && (
                    <motion.input
                      ref={searchRef}
                      key="search-input"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 140, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onBlur={() => { if (!searchValue) setSearchOpen(false); }}
                      onKeyDown={(e) => { if (e.key === "Escape") { setSearchOpen(false); setSearchValue(""); } }}
                      placeholder="Search…"
                      className={`text-sm font-light bg-transparent border-b outline-none placeholder:text-stone/50 transition-colors duration-500 ${inHero ? "border-cream/40 text-cream placeholder:text-cream/40" : "border-charcoal/30 text-charcoal"}`}
                    />
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search"
                  className={`${textColor} ${hoverColor} transition-colors duration-500 min-w-[44px] min-h-[44px] flex items-center justify-center`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>

              {/* Cart icon */}
              <button
                aria-label="Shopping cart"
                className={`${textColor} ${hoverColor} transition-colors duration-500 min-w-[44px] min-h-[44px] flex items-center justify-center`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </button>

              {/* User icon → login */}
              <Link
                href="/login"
                aria-label="Sign in"
                className={`${textColor} ${hoverColor} transition-colors duration-500 min-w-[44px] min-h-[44px] flex items-center justify-center`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>

              {/* Reserve CTA */}
              <Link
                href="/contact#reserve"
                className="px-5 py-2.5 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.2em] uppercase text-xs rounded-sm transition-colors duration-500 pulse-amber"
              >
                Reserve
              </Link>
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
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-5 overflow-y-auto py-20"
          >
            {mobileLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
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
            {/* Mobile icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: mobileLinks.length * 0.08 + 0.1 }}
              className="flex items-center gap-6 mt-4"
            >
              <Link href="/login" onClick={() => setMobileOpen(false)} className="text-cream/60 hover:text-amber transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Sign in">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
              <button aria-label="Cart" className="text-cream/60 hover:text-amber transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mobileLinks.length * 0.08 + 0.2, duration: 0.5 }}
            >
              <Link
                href="/contact#reserve"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-10 py-4 bg-amber text-charcoal font-bebas text-lg tracking-widest uppercase rounded-sm pulse-amber inline-block"
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
