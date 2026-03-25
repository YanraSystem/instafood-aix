"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { value: "10+", label: "Burgers" },
  { value: "10+", label: "Sandwiches" },
  { value: "14", label: "Sauces" },
  { value: "4.6", label: "Google" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title-1", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-title-2", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.3")
        .from(".hero-stat", { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.3")
        .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,44,0.08)_0%,transparent_70%)]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-brand/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full border border-brand/5 translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-brand/3 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-sm font-medium text-brand">
            Restaurant Halal - Aix-les-Bains
          </span>
        </div>

        {/* Title */}
        <h1>
          <span className="hero-title-1 block font-display text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl leading-none tracking-wide text-white">
            LE GOUT
          </span>
          <span className="hero-title-2 block font-display text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl leading-none tracking-wide text-brand mt-2">
            AUTHENTIQUE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Burgers genereux, sandwiches steaks, et notre legendaire Hummer.
          Produits frais, recettes maison, saveurs qui claquent.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#menu"
            className="hero-cta bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-full transition-all glow-brand hover:scale-105 text-base"
          >
            Decouvrir le menu
          </a>
          <a
            href="#location"
            className="hero-cta border border-white/20 hover:border-brand/50 text-white font-medium px-8 py-4 rounded-full transition-all hover:bg-brand/5 text-base"
          >
            Nous trouver
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mt-16 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat text-center">
              <div className="font-display text-2xl sm:text-3xl text-brand">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
