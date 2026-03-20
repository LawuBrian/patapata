"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CookieConsentProps = {
  privacyHref?: string;
  className?: string;
};

const CookieConsent: React.FC<CookieConsentProps> = ({
  privacyHref = "/",
  className = "",
}) => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
          className="fixed bottom-4 left-4 right-4 z-[200] flex justify-center pointer-events-none"
        >
          <div
            className={`
              pointer-events-auto w-full max-w-lg rounded-sm border border-amber/20
              bg-charcoal text-cream shadow-2xl
              p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4
              ${className}
            `}
          >
            {/* Cookie icon */}
            <div className="shrink-0 w-10 h-10 flex items-center justify-center text-2xl">
              🍪
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2
                id="cookie-title"
                className="font-clarendon text-cream text-base mb-1"
              >
                We use cookies
              </h2>
              <p className="text-xs text-cream/60 font-light leading-relaxed">
                We use cookies to personalise your experience. By continuing, you agree to our{" "}
                <a
                  href={privacyHref}
                  className="text-amber hover:text-amber-light underline transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.2em] uppercase text-xs rounded-sm transition-colors duration-300"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="flex-1 sm:flex-none px-5 py-2.5 border border-cream/20 hover:border-cream/40 text-cream/70 hover:text-cream font-bebas tracking-[0.2em] uppercase text-xs rounded-sm transition-colors duration-300"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
