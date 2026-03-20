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

            {/* Logo Center — traced SVG wordmark */}
            <Link href="/" className="group flex-1 flex justify-center items-center">
              <motion.div whileHover={{ opacity: 0.8 }} className="relative flex items-center">
                <svg
                  viewBox="30 120 415 230"
                  height="46"
                  className="w-auto"
                  style={{
                    fill: inHero ? "var(--color-cream)" : "var(--color-charcoal)",
                    transition: "fill 700ms ease",
                  }}
                  aria-label="Pata Pata"
                  role="img"
                >
                  <path
                    stroke="none"
                    fillRule="evenodd"
                    d="M 149.250 172.871 C 133.713 199.143, 121 220.944, 121 221.319 C 121 221.693, 146.875 222, 178.500 222 C 210.125 222, 236 221.716, 236 221.368 C 236 221.020, 235.159 219.333, 234.132 217.618 C 233.105 215.903, 222.247 197.625, 210.003 177 C 182.314 130.355, 179.025 124.987, 178.179 125.052 C 177.806 125.081, 164.787 146.599, 149.250 172.871 M 378.195 129.750 C 373.725 136.795, 324.840 219.294, 324.273 220.750 C 323.887 221.741, 335.803 222, 381.838 222 L 439.890 222 433.774 211.750 C 404.875 163.312, 392.880 143.102, 388.092 134.781 C 385.017 129.435, 382.209 125.048, 381.854 125.031 C 381.499 125.014, 379.852 127.138, 378.195 129.750 M 37.667 130.667 C 37.300 131.033, 37 151.733, 37 176.667 L 37 222 59.500 222 L 82 222 82 213.607 L 82 205.214 88.034 204.151 C 99.590 202.115, 110.451 193.890, 115.701 183.199 C 118.200 178.112, 118.500 176.427, 118.500 167.500 C 118.500 158.503, 118.218 156.948, 115.684 152 C 112.409 145.604, 106.199 138.846, 100.486 135.464 C 93.081 131.078, 85.473 130.031, 60.917 130.015 C 48.496 130.007, 38.033 130.300, 37.667 130.667 M 238.667 130.667 C 238.300 131.033, 238 141.335, 238 153.560 C 238 172.905, 238.205 175.865, 239.582 176.393 C 240.452 176.727, 244.727 177, 249.082 177 L 257 177 257 199.518 L 257 222.037 280.250 221.768 L 303.500 221.500 303.769 199.290 L 304.038 177.080 312.269 176.790 L 320.500 176.500 320.768 153.250 L 321.037 130 280.185 130 C 257.717 130, 239.033 130.300, 238.667 130.667 M 169.975 185.525 L 162.552 192.998 169.499 199.999 C 173.320 203.850, 176.920 207, 177.500 207 C 178.871 207, 192 193.775, 192 192.394 C 192 191.813, 189.628 189.124, 186.729 186.419 C 176.556 176.925, 178.419 177.025, 169.975 185.525 M 374 188.500 L 366.533 196.017 374.033 203.517 L 381.533 211.017 389 203.500 L 396.467 195.983 388.967 188.483 L 381.467 180.983 374 188.500 M 33.671 233.750 C 33.426 234.162, 33.287 235.625, 33.362 237 L 33.500 239.500 236.250 239.752 L 439 240.005 439 236.502 L 439 233 236.559 233 C 125.216 233, 33.917 233.338, 33.671 233.750 M 168.781 261.188 C 164.093 269.060, 152.272 289, 142.511 305.500 C 132.751 322, 123.693 337.178, 122.383 339.229 C 121.072 341.279, 120 343.192, 120 343.479 C 120 343.765, 145.875 344, 177.500 344 C 209.125 344, 235 343.746, 235 343.436 C 235 343.126, 228.408 331.764, 220.351 318.186 C 212.294 304.609, 199.858 283.600, 192.717 271.500 C 185.575 259.400, 179.186 248.910, 178.518 248.188 C 177.544 247.135, 175.621 249.704, 168.781 261.188 M 354.993 289.705 C 341.054 313.242, 328.152 334.871, 326.324 337.769 C 324.496 340.668, 323 343.255, 323 343.519 C 323 343.784, 349.065 344, 380.921 344 L 438.843 344 428.565 326.750 C 422.912 317.262, 410.289 296, 400.514 279.500 C 390.739 263, 382.200 248.917, 381.540 248.205 C 380.585 247.176, 375.135 255.697, 354.993 289.705 M 37 298.441 L 37 344 59.500 344 L 82 344 82 335.629 L 82 327.258 86.876 326.611 C 98.741 325.037, 111.718 314.640, 116.038 303.247 C 119.044 295.319, 119.048 284.534, 116.049 276.715 C 113.146 269.146, 105.010 260.340, 97.328 256.450 L 91.500 253.500 64.250 253.191 L 37 252.882 37 298.441 M 237.231 275.750 L 237.500 298.500 246.750 298.788 L 256 299.075 256 321.538 L 256 344 279.500 344 L 303 344 303 321.539 L 303 299.078 311.750 298.789 C 317.997 298.583, 320.471 298.142, 320.400 297.250 C 320.345 296.563, 320.233 286.325, 320.150 274.500 L 320 253 278.481 253 L 236.962 253 237.231 275.750 M 170.250 306.160 C 166.262 310.095, 163 313.620, 163 313.993 C 163 314.981, 176.645 328, 177.680 328 C 178.936 328, 192 314.659, 192 313.375 C 192 312.495, 178.626 298.995, 177.762 299.002 C 177.618 299.004, 174.238 302.224, 170.250 306.160 M 372.135 306.364 L 364.820 313.729 367.288 316.114 C 368.645 317.426, 372.064 320.736, 374.884 323.469 L 380.013 328.437 387.507 320.993 L 395.002 313.549 387.776 306.274 C 383.802 302.273, 380.303 299, 380 299 C 379.697 299, 376.158 302.314, 372.135 306.364"
                  />
                </svg>
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
