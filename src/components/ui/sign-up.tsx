"use client";

import React, { useState } from "react";

export default function PataPatSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    console.log("Creating account with:", { email, password });
  };

  const handleLogin = () => {
    console.log("Redirecting to login");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side — charcoal brand panel */}
      <div className="flex-1 bg-charcoal flex items-center justify-center p-10 md:p-16 relative overflow-hidden">
        {/* Subtle amber glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C48A2D, transparent)" }}
        />
        <div className="relative max-w-sm z-10">
          <p className="font-bebas text-amber tracking-[0.3em] uppercase text-sm mb-4">
            Pata Pata Restaurant
          </p>
          <h1 className="text-4xl md:text-5xl font-spectral text-cream leading-tight">
            Join the table.<br />Every evening awaits.
          </h1>
          <div className="mt-6 h-[1px] w-16 bg-amber/50" />
          <p className="mt-6 text-cream/50 font-light text-sm leading-relaxed">
            Create an account to manage your reservations, receive exclusive updates on live music nights, and explore our seasonal menu.
          </p>
        </div>
      </div>

      {/* Right Side — form panel */}
      <div className="flex-1 bg-cream flex items-center justify-center p-10 md:p-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <span className="font-nunito font-extrabold text-2xl text-charcoal tracking-tight uppercase">
              Pata Pata
            </span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-clarendon text-charcoal mb-2">Create Account</h2>
            <p className="text-stone text-sm font-light">Welcome — start your Pata Pata journey</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bebas tracking-[0.2em] uppercase text-charcoal mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 border border-charcoal/20 rounded-sm bg-card text-charcoal text-base font-light focus:outline-none focus:border-amber transition-colors duration-500 placeholder:text-stone/40"
                placeholder="hello@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bebas tracking-[0.2em] uppercase text-charcoal mb-2"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 border border-charcoal/20 rounded-sm bg-card text-charcoal text-base font-light focus:outline-none focus:border-amber transition-colors duration-500 placeholder:text-stone/40"
                placeholder="Minimum 8 characters"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleCreateAccount}
              className="w-full py-4 bg-amber hover:bg-amber-light text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-colors duration-500 pulse-amber"
            >
              Create Account
            </button>

            {/* Login link */}
            <div className="text-center pt-2">
              <span className="text-stone text-sm font-light">Already have an account? </span>
              <button
                onClick={handleLogin}
                className="text-charcoal font-semibold text-sm hover:text-amber transition-colors duration-300"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
