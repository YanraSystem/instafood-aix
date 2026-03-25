"use client";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-xl border-t border-dark-border p-3 flex gap-3">
      <a
        href="tel:+33456572670"
        className="flex-1 bg-brand hover:bg-brand-dark text-white font-semibold text-sm py-3.5 rounded-full text-center transition-colors flex items-center justify-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Commander
      </a>
      <a
        href="#menu"
        className="border border-brand/30 text-brand font-semibold text-sm py-3.5 px-6 rounded-full text-center transition-colors hover:bg-brand/10"
      >
        Menu
      </a>
    </div>
  );
}
