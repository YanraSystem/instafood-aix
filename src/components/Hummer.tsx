"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hummer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hummer-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    const timeout = setTimeout(() => {
      gsap.to(".hummer-reveal", { opacity: 1, y: 0, duration: 0.3 });
    }, 2500);

    return () => { ctx.revert(); clearTimeout(timeout); };
  }, []);

  return (
    <section ref={sectionRef} id="hummer" className="py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(225,48,108,0.08)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Layout : image gauche, contenu droite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo */}
          <div className="hummer-reveal relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-dark-card border border-dark-border">
              <img
                src="/images/menu/hummer-2.webp"
                alt="Le Hummer — burger signature XXL d'Insta Food"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Price tag floating */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 gradient-insta rounded-2xl px-5 py-3 shadow-xl">
              <span className="text-xs text-white/70 block">A partir de</span>
              <span className="font-display text-3xl text-white">9,50&euro;</span>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="hummer-reveal text-sm font-medium text-brand uppercase tracking-widest">
              La specialite maison
            </span>
            <h2 className="hummer-reveal font-display text-5xl sm:text-6xl md:text-7xl text-white mt-3 leading-[0.9]">
              LE<br />
              <span className="text-gradient-insta">HUMMER</span>
            </h2>

            <p className="hummer-reveal text-white/50 mt-6 leading-relaxed max-w-md">
              Un burger XXL qui ne plaisante pas. Pain brioche maison, viande de
              qualite, fromage fondant et garnitures genereuses. A partager... ou pas.
            </p>

            {/* 3 options */}
            <div className="hummer-reveal mt-8 space-y-3">
              {[
                { name: "1 Viande", price: "9,50", desc: "Le classique, deja enorme" },
                { name: "2 Viandes", price: "11,50", desc: "Double viande, double plaisir", featured: true },
                { name: "3 Viandes", price: "13,50", desc: "Le defi. T'es pret ?" },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    item.featured
                      ? "border-brand/40 bg-brand/5"
                      : "border-dark-border bg-dark-card hover:border-dark-muted"
                  }`}
                >
                  <div>
                    <span className="text-white font-semibold text-sm">{item.name}</span>
                    <span className="text-white/30 text-sm ml-3">{item.desc}</span>
                  </div>
                  <span className="font-display text-xl text-brand ml-4">{item.price}&euro;</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+33456572670"
              className="hummer-reveal inline-block mt-8 gradient-insta text-white font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform text-sm"
            >
              Commander le Hummer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
