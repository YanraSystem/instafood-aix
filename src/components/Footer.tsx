export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl tracking-wider">
              <span className="text-brand">INSTA</span>
              <span className="text-white">FOOD</span>
            </span>
            <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xs">
              Restaurant halal a Aix-les-Bains. Burgers, sandwiches steaks,
              Hummer et bien plus. Ouvert 7j/7.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#accueil" className="text-sm text-white/40 hover:text-brand transition-colors">
                Accueil
              </a>
              <a href="#menu" className="text-sm text-white/40 hover:text-brand transition-colors">
                Menu
              </a>
              <a href="#hummer" className="text-sm text-white/40 hover:text-brand transition-colors">
                Hummer
              </a>
              <a href="#concept" className="text-sm text-white/40 hover:text-brand transition-colors">
                Notre histoire
              </a>
              <a href="#location" className="text-sm text-white/40 hover:text-brand transition-colors">
                Nous trouver
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <p>543 Bd President Wilson</p>
              <p>73100 Aix-les-Bains</p>
              <a
                href="tel:+33456572670"
                className="text-brand hover:text-brand-light transition-colors"
              >
                04 56 57 26 70
              </a>
              <p className="mt-2">Ouvert 7j/7 de 11h a minuit</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Insta Food — Aix-les-Bains. Tous droits reserves.
          </p>
          <p className="text-xs text-white/20">
            Site realise par{" "}
            <a
              href="https://www.system-agency.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand/50 hover:text-brand transition-colors"
            >
              System
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
