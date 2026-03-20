"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I make a reservation at Pata Pata?",
    answer:
      "You can reserve your table online via our reservations page, call us on +27 11 334 8038, or email info@patapata.co.za. We recommend booking at least 24 hours in advance, especially for Friday and Saturday evenings when live music is on.",
  },
  {
    question: "When is live music on?",
    answer:
      "Live music takes place every Friday and Saturday from 19:30, and select Sunday afternoons from 15:00. Check our Live Music page for the full upcoming schedule and artist details.",
  },
  {
    question: "Do you cater for dietary requirements and allergies?",
    answer:
      "Absolutely. We cater for vegetarian, vegan, gluten-free, and halal requirements. Please inform us of any allergies when making your reservation or let your server know on arrival — our kitchen team will accommodate you.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Pata Pata has a smart-casual dress code. We love when guests dress for the occasion — think relaxed elegance rather than formal attire. Flip-flops and beachwear are not permitted on Friday and Saturday evenings.",
  },
  {
    question: "Is parking available?",
    answer:
      "There is metered street parking on Fox Street and several secure parking facilities within a two-minute walk of the restaurant in the Maboneng Precinct. We recommend using the Arts on Main parking garage directly behind us.",
  },
  {
    question: "Can I book Pata Pata for a private event or function?",
    answer:
      "Yes — we host private dinners, corporate events, birthday celebrations, and live music evenings for exclusive groups. Contact us directly at info@patapata.co.za or via our contact page to discuss your requirements and we will tailor a package for you.",
  },
];

export function FAQAccordionBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge
            className="mb-4 bg-amber/20 text-amber border-amber/30 hover:bg-amber/30"
            variant="secondary"
          >
            <HelpCircle className="mr-1 h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="mb-4 text-3xl font-clarendon text-charcoal tracking-tight md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mx-auto my-4" />
          <p className="mx-auto max-w-2xl text-base text-stone font-light md:text-lg">
            Have a question? We&apos;ve got answers. If you don&apos;t find what you&apos;re
            looking for, feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Card className="overflow-hidden border-charcoal/10 bg-card transition-all hover:border-amber/40 hover:shadow-md">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left md:p-6 hover:bg-charcoal/[0.02] transition-colors duration-300"
                  >
                    <span className="pr-4 text-base font-spectral font-semibold text-charcoal md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 text-amber"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-charcoal/10 p-4 md:p-6 bg-cream-dark/40">
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            className="text-sm text-stone font-light leading-relaxed md:text-base"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center md:mt-16"
        >
          <Card className="border-charcoal/10 bg-charcoal p-6 md:p-8">
            <MessageCircle className="mx-auto mb-4 h-10 w-10 text-amber" />
            <h3 className="mb-2 text-xl font-clarendon text-cream md:text-2xl">
              Still have questions?
            </h3>
            <p className="mb-6 text-sm text-cream/60 font-light md:text-base">
              Our team is here to help. Get in touch and we&apos;ll respond as soon as possible.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-amber text-charcoal font-bebas tracking-[0.2em] uppercase text-sm rounded-sm hover:bg-amber-light transition-colors duration-500"
              >
                Contact Us
              </Link>
              <Link
                href="/contact#reserve"
                className="inline-block px-8 py-3 border border-cream/30 text-cream font-bebas tracking-[0.2em] uppercase text-sm rounded-sm hover:border-amber hover:text-amber transition-colors duration-500"
              >
                Reserve a Table
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
