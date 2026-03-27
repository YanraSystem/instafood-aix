"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hours = [
  { day: "Lundi", time: "11h00 — 00h00" },
  { day: "Mardi", time: "11h00 — 00h00" },
  { day: "Mercredi", time: "11h00 — 00h00" },
  { day: "Jeudi", time: "11h00 — 00h00" },
  { day: "Vendredi", time: "11h00 — 00h00" },
  { day: "Samedi", time: "11h00 — 00h00" },
  { day: "Dimanche", time: "11h00 — 00h00" },
];

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".location-card", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    const timeout = setTimeout(() => {
      gsap.to(".location-card", { opacity: 1, y: 0, duration: 0.3 });
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} id="location" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand uppercase tracking-widest">
            Ou nous trouver
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            VENEZ NOUS VOIR
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="location-card bg-dark-card border border-dark-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">Adresse</h3>
                  <p className="text-white/50 mt-1">543 Boulevard President Wilson</p>
                  <p className="text-white/50">73100 Aix-les-Bains</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=543+Boulevard+President+Wilson+73100+Aix-les-Bains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand text-sm font-medium mt-3 hover:text-brand-light transition-colors"
                  >
                    Ouvrir dans Google Maps
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="location-card bg-dark-card border border-dark-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">Telephone</h3>
                  <a
                    href="tel:+33159580635"
                    className="text-brand text-lg font-medium mt-1 block hover:text-brand-light transition-colors"
                  >
                    01 59 58 06 35
                  </a>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-dark-lighter border border-dark-border rounded-full px-3 py-1 text-white/40">
                      Sur place
                    </span>
                    <span className="text-xs bg-dark-lighter border border-dark-border rounded-full px-3 py-1 text-white/40">
                      A emporter
                    </span>
                    <span className="text-xs bg-dark-lighter border border-dark-border rounded-full px-3 py-1 text-white/40">
                      Livraison
                    </span>
                    <span className="text-xs bg-dark-lighter border border-dark-border rounded-full px-3 py-1 text-white/40">
                      Drive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="location-card bg-dark-card border border-dark-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">Horaires</h3>
                <span className="ml-auto text-xs bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1">
                  Ouvert 7j/7
                </span>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between text-sm py-1.5 border-b border-dark-border/50 last:border-0"
                  >
                    <span className="text-white/60">{h.day}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Map placeholder */}
          <div className="location-card flex flex-col gap-6">
            <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden flex-1 min-h-[400px] relative">
              {/* Map placeholder with grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center text-brand mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Insta Food
                </h3>
                <p className="text-white/40 mt-2 text-sm">
                  543 Bd President Wilson — Aix-les-Bains
                </p>
                <p className="text-white/30 text-sm mt-1">
                  A deux pas de la gare
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=543+Boulevard+President+Wilson+73100+Aix-les-Bains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
