import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insta Food | Burgers & Sandwiches — Aix-les-Bains",
  description:
    "Restaurant halal a Aix-les-Bains. Burgers, sandwiches steaks, Hummer geant, galettes et bien plus. Produits frais, livraison et sur place. 543 Bd President Wilson.",
  keywords: [
    "Insta Food",
    "restaurant Aix-les-Bains",
    "burger Aix-les-Bains",
    "sandwich Aix-les-Bains",
    "halal Aix-les-Bains",
    "fast food Aix-les-Bains",
    "restaurant halal 73",
    "livraison Aix-les-Bains",
    "Hummer burger",
    "sandwiches steaks",
  ],
  openGraph: {
    title: "Insta Food | Burgers & Sandwiches — Aix-les-Bains",
    description:
      "Restaurant halal a Aix-les-Bains. Burgers, sandwiches steaks, Hummer geant et galettes. Produits frais, sur place ou livres.",
    locale: "fr_FR",
    type: "website",
  },
  other: {
    "geo.region": "FR-73",
    "geo.placename": "Aix-les-Bains",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-white font-body antialiased grain">
        {children}
      </body>
    </html>
  );
}
