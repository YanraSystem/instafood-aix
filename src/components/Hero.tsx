"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title-1", { y: 60, opacity: 0, duration: 0.9 }, "-=0.3")
        .from(".hero-title-2", { y: 60, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.12, duration: 0.6 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative min-h-screen flex items-end pb-24 sm:pb-32 overflow-hidden"
    >
      {/* Background: Ken Burns image (mobile) + boomerang video (desktop) */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover hero-kenburns md:hidden"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          ref={(el) => { if (el) el.setAttribute("webkit-playsinline", ""); }}
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent" />

      {/* Content — positionne en bas a gauche */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-3xl">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-sm font-medium text-white/80">
            Halal . Aix-les-Bains . 7j/7
          </span>
        </div>

        {/* Title */}
        <h1>
          <span className="hero-title-1 block font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-wide text-white">
            INSTA
          </span>
          <span className="hero-title-2 block font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-wide text-gradient-insta">
            FOOD
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub mt-6 text-base sm:text-lg text-white/60 max-w-md leading-relaxed">
          Sandwiches steaks, burgers genereux, et notre Hummer XXL.
          Sur place, a emporter ou livre chez toi.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="#menu"
            className="hero-cta gradient-insta text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 glow-brand text-sm"
          >
            Voir le menu
          </a>
          <a
            href="tel:+33456572670"
            className="hero-cta border border-white/20 hover:border-white/40 text-white font-medium px-7 py-3.5 rounded-full transition-all hover:bg-white/5 text-sm"
          >
            04 56 57 26 70
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
