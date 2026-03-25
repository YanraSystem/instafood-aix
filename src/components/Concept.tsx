"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Produits frais",
    description: "Viandes halal de qualite, legumes frais du jour, pains artisanaux livres chaque matin.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Fait maison",
    description: "Sauces preparees sur place, frites coupees a la main, recettes originales qui font la difference.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "100% Halal",
    description: "Toutes nos viandes sont certifiees halal. Transparence totale sur nos approvisionnements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Centre-ville",
    description: "Idealement situe sur le Boulevard President Wilson. Sur place, a emporter ou en livraison.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Concept() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".concept-content", {
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
      gsap.to(".concept-content", { opacity: 1, y: 0, duration: 0.3 });
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} id="concept" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <div className="concept-content">
            <span className="text-sm font-medium text-brand uppercase tracking-widest">
              Notre histoire
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-4">
              BIEN PLUS QU&apos;UN<br />
              <span className="text-brand">FAST-FOOD</span>
            </h2>
            <div className="w-16 h-1 bg-brand mt-6 rounded-full" />

            <div className="mt-8 space-y-4 text-white/50 leading-relaxed">
              <p>
                Chez <span className="text-brand font-semibold">Insta Food</span>, on croit
                que la restauration rapide peut rimer avec qualite. Installe en plein coeur
                d&apos;Aix-les-Bains, on prepare chaque jour des burgers genereux, des
                sandwiches steaks gourmands et notre fameux <span className="text-white font-medium">Hummer</span> —
                un burger XXL qui a deja conquis le quartier.
              </p>
              <p>
                Nos viandes sont <span className="text-white font-medium">100% halal</span>,
                nos sauces faites maison, et nos frites coupees sur place.
                Du comptoir a l&apos;assiette, chaque detail compte.
              </p>
              <p>
                Que tu passes en coup de vent, que tu commandes en livraison ou que tu
                t&apos;installes sur notre terrasse — on veut que chaque bouchee soit un moment
                de plaisir.
              </p>
            </div>
          </div>

          {/* Right — Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="concept-content bg-dark-card border border-dark-border rounded-2xl p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mt-4">
                  {value.title}
                </h3>
                <p className="text-sm text-white/40 mt-2 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
