"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "@/components/ui/animated-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop")',
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
            Contact & Reserve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream/70 font-light tracking-widest uppercase text-sm"
          >
            We'd Love to Welcome You
          </motion.p>
          <div className="section-divider mt-6" />
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reserve" className="py-20 bg-background wood-grain-bg plank-lines">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — Form */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-spectral text-charcoal mb-2">
                  Reserve Your Table
                </h2>
                <p className="text-wood/60 font-light mb-8">
                  Fill in the details below and we'll confirm your reservation.
                  Tonight's tables fill quickly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-charcoal rounded-sm p-10 text-center"
                  >
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-spectral text-cream mb-2">
                      Thank You!
                    </h3>
                    <p className="text-cream/60 font-light">
                      We've received your reservation request. You'll hear from us shortly
                      to confirm your table.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500 placeholder:text-wood/40"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500 placeholder:text-wood/40"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500 placeholder:text-wood/40"
                      />
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500"
                      >
                        <option value="">Number of Guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                          <option key={n} value={n}>
                            {n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500"
                      />
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500"
                      >
                        <option value="">Preferred Time</option>
                        {["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <select
                      value={formData.occasion}
                      onChange={(e) =>
                        setFormData({ ...formData, occasion: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500"
                    >
                      <option value="">Special Occasion? (Optional)</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="date">Date Night</option>
                      <option value="business">Business Dinner</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>

                    <textarea
                      placeholder="Special requests or dietary requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-card border border-charcoal/10 text-charcoal text-base font-light rounded-sm focus:outline-none focus:border-amber transition-colors duration-500 placeholder:text-wood/40 resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 bg-amber text-charcoal text-sm font-semibold tracking-[0.25em] uppercase rounded-sm hover:bg-amber-light hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(214,154,58,0.5)] transition-all duration-700 pulse-amber"
                    >
                      Confirm Reservation
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Right — Info */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-10">
                {/* Map placeholder */}
                <div className="min-h-[250px] md:aspect-[4/3] bg-charcoal/5 rounded-sm overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d28.0473!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzE1LjIiUyAyOMKwMDInNTAuMyJF!5e0!3m2!1sen!2sza!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pata Pata location"
                  />
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-amber mb-3">
                      Location
                    </h3>
                    <p className="text-charcoal font-light">
                      Maboneng Precinct<br />
                      286 Fox Street<br />
                      Johannesburg, 2094<br />
                      South Africa
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-amber mb-3">
                      Contact
                    </h3>
                    <p className="text-charcoal font-light">
                      Tel: <a href="tel:+27113348038" className="hover:text-amber transition-colors duration-500">+27 11 334 8038</a><br />
                      Email: <a href="mailto:info@patapata.co.za" className="hover:text-amber transition-colors duration-500">info@patapata.co.za</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-amber mb-3">
                      Opening Hours
                    </h3>
                    <div className="space-y-2 text-charcoal font-light">
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
                </div>

                {/* Direct call CTA */}
                <a
                  href="tel:+27113348038"
                  className="inline-block w-full text-center py-4 border border-charcoal text-charcoal text-sm font-medium tracking-[0.25em] uppercase rounded-sm hover:bg-charcoal hover:text-cream transition-all duration-700"
                >
                  Call to Reserve
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
