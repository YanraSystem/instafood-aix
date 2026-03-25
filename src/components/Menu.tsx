"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuCategories } from "@/data/menu";

gsap.registerPlugin(ScrollTrigger);

const categoryIcons: Record<string, React.ReactNode> = {
  pizza: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 19.5h20L12 2z" />
      <circle cx="10" cy="13" r="1.2" fill="currentColor" />
      <circle cx="14" cy="11" r="1.2" fill="currentColor" />
      <circle cx="11" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  burger: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9M3 11v1a1 1 0 001 1h16a1 1 0 001-1v-1" />
      <path d="M3 15h18a1 1 0 011 1v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a1 1 0 011-1z" />
    </svg>
  ),
  sandwich: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18l-1.5 9a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 6z" />
      <path d="M3 6c0-1.1.9-2 2-2h14a2 2 0 012 2" />
    </svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  wrap: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  menu: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  fries: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 21l1-8H6l1-8h2l-1 8h2l1-8h2l-1 8h2l1-8h2l-1 8h1l1 8H7z" />
    </svg>
  ),
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);

  const currentCategory = menuCategories.find((c) => c.id === activeCategory)!;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".menu-item");
    gsap.fromTo(
      items,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [activeCategory]);

  return (
    <section ref={sectionRef} id="menu" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="menu-title text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white">
            LA <span className="text-gradient-insta">CARTE</span>
          </h2>
          <p className="text-white/40 mt-3 text-sm max-w-md mx-auto">
            Choisis ta categorie et compose ton repas.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "gradient-insta text-white glow-brand"
                  : "bg-dark-card border border-dark-border text-white/60 hover:text-white hover:border-brand/30"
              }`}
            >
              {categoryIcons[category.icon]}
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="menu-item bg-dark-card border border-dark-border rounded-2xl p-5 card-hover group"
            >
              <div className="flex items-start gap-4">
                {/* Menu item image */}
                <div className="w-20 h-20 rounded-xl bg-dark-lighter border border-dark-border flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dark-muted">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-white group-hover:text-brand transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display text-xl text-brand whitespace-nowrap">
                      {item.price}&euro;
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-white/40 mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  {item.badge && (
                    <span className="inline-block mt-2 text-xs font-medium bg-brand/10 text-brand border border-brand/20 rounded-full px-3 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-0.5 bg-dark-border mt-4 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-brand group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Sauces note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-dark-card border border-dark-border rounded-full px-6 py-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-sm text-white/50">
              14 sauces au choix pour personnaliser votre commande
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
