"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-background text-foreground border-t border-charcoal/10 overflow-hidden">
      {/* Vintage decorative elements instead of candlelight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          className="absolute -top-20 left-1/4 w-40 h-40 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(214,154,58,0.15), transparent)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-10 right-1/3 w-32 h-32 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(214,154,58,0.1), transparent)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-14 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-spectral text-charcoal mb-4">Pata Pata</h3>
            <p className="text-charcoal/70 font-sans text-sm leading-relaxed max-w-xs">
              African cuisine. Vintage soul. Jozi rhythm. A space where flavour meets
              atmosphere, and every evening tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bebas tracking-widest uppercase text-charcoal mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/live-music", label: "Live Music" },
                { href: "/antiques", label: "Antiques" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-charcoal/70 hover:text-amber text-sm font-sans transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bebas tracking-widest uppercase text-charcoal mb-6">
              Visit Us
            </h4>
            <div className="flex flex-col gap-3 text-charcoal/70 font-sans text-sm">
              <p>Maboneng Precinct</p>
              <p>286 Fox Street</p>
              <p>Johannesburg, 2094</p>
              <div className="mt-4">
                <p>Tel: +27 11 334 8038</p>
                <p>info@patapata.co.za</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-charcoal/10 pt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bebas tracking-widest uppercase text-charcoal mb-4">
                Opening Hours
              </h4>
              <div className="flex flex-col gap-2 text-charcoal/70 font-sans text-sm">
                <div className="flex justify-between max-w-xs">
                  <span>Monday – Thursday</span>
                  <span>11:00 – 22:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Friday – Saturday</span>
                  <span>11:00 – 00:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>11:00 – 21:00</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <Link
                href="/contact#reserve"
                className="px-8 py-3 min-h-[44px] flex items-center bg-amber text-charcoal font-bebas text-sm tracking-widest uppercase rounded-sm hover:bg-amber-light hover:scale-105 hover:shadow-[0_0_25px_rgba(214,154,58,0.5)] transition-all duration-500"
              >
                Reserve Your Table
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal/50 text-xs font-sans tracking-wider">
            © {new Date().getFullYear()} Pata Pata Restaurant. All rights reserved.
          </p>
          <div className="flex gap-2">
            {["Instagram", "Facebook", "TikTok"].map((social) => (
              <a
                key={social}
                href="#"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-charcoal/50 hover:text-amber text-xs tracking-widest uppercase transition-colors duration-500 px-2"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
