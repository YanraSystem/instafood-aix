"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Concept() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".concept-reveal", {
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
      gsap.to(".concept-reveal", { opacity: 1, y: 0, duration: 0.3 });
    }, 2500);

    return () => { ctx.revert(); clearTimeout(timeout); };
  }, []);

  return (
    <section ref={sectionRef} id="concept" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Full-width statement */}
        <div className="concept-reveal text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95]">
            PAS JUSTE UN FAST-FOOD.<br />
            <span className="text-gradient-insta">UNE EXPERIENCE.</span>
          </h2>
        </div>

        {/* 3 piliers — layout asymetrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-border rounded-2xl overflow-hidden">
          {[
            {
              num: "01",
              title: "Frais",
              text: "Viandes halal de qualite, legumes du jour, pains livres chaque matin. Pas de congelateur, pas de compromis.",
            },
            {
              num: "02",
              title: "Maison",
              text: "14 sauces preparees ici, frites coupees a la main, recettes qu'on ne trouve nulle part ailleurs.",
            },
            {
              num: "03",
              title: "Genereux",
              text: "Des portions qui n'ont pas peur d'en mettre. Du Cheese Burger a 5,50 au Hummer 3 viandes : personne ne repart avec la faim.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="concept-reveal bg-dark-card p-8 sm:p-10 group"
            >
              <span className="text-sm font-mono text-brand/40">{item.num}</span>
              <h3 className="font-display text-3xl text-white mt-3 group-hover:text-gradient-insta transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 mt-4 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bandeau chiffres */}
        <div className="concept-reveal mt-16 flex flex-wrap justify-center gap-12 sm:gap-20">
          {[
            { value: "4.6", label: "Note Google" },
            { value: "67+", label: "Avis clients" },
            { value: "7j/7", label: "Ouvert" },
            { value: "11h-00h", label: "Horaires" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl text-gradient-insta">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
