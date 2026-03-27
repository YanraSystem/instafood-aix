"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Hummer", href: "#hummer" },
  { label: "A propos", href: "#concept" },
  { label: "Contact", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center">
          <span className="font-display text-2xl tracking-wider">
            <span className="text-gradient-insta">INSTA</span>
            <span className="text-white">FOOD</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33159580635"
            className="gradient-insta text-white font-semibold text-sm px-5 py-2 rounded-full transition-all hover:scale-105"
          >
            Commander
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-dark-border">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33159580635"
              className="gradient-insta text-white font-semibold px-8 py-3 rounded-full"
            >
              Commander
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
