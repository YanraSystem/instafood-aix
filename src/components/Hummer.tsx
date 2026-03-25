"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuCategories } from "@/data/menu";

gsap.registerPlugin(ScrollTrigger);

const hummerItems = menuCategories.find((c) => c.id === "hummer")!.items;

export default function Hummer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hummer-card", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    // Fallback
    const timeout = setTimeout(() => {
      gsap.to(".hummer-card", { opacity: 1, y: 0, duration: 0.3 });
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} id="hummer" className="py-24 sm:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,44,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand uppercase tracking-widest">
            La specialite
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white mt-4">
            HUMMER
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Notre burger signature XXL. Pain brioche maison, viandes de qualite,
            fromages fondants et garnitures genereuses.
          </p>
          <div className="w-16 h-1 bg-brand mx-auto mt-6 rounded-full" />
        </div>

        {/* Hummer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hummerItems.map((item, index) => (
            <div
              key={item.name}
              className={`hummer-card relative bg-dark-card border rounded-3xl overflow-hidden group ${
                index === 1
                  ? "border-brand/40 ring-1 ring-brand/20"
                  : "border-dark-border"
              }`}
            >
              {/* Badge best-seller */}
              {item.badge && (
                <div className="absolute top-4 right-4 z-10 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.badge}
                </div>
              )}

              {/* Image */}
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-display text-6xl text-brand/20">
                    {index + 1}x
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-white/40 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-white/30 block">A partir de</span>
                    <span className="font-display text-4xl text-brand">
                      {item.price}&euro;
                    </span>
                  </div>
                  <a
                    href="tel:+33456572670"
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      index === 1
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-brand/30 text-brand hover:bg-brand/10"
                    }`}
                  >
                    Commander
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
