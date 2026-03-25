import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Hummer from "@/components/Hummer";
import Concept from "@/components/Concept";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import MobileCTA from "@/components/MobileCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Insta Food",
  description:
    "Restaurant halal a Aix-les-Bains. Burgers genereux, sandwiches steaks, Hummer geant, galettes et desserts. Produits frais, ouvert 7j/7.",
  url: "https://instafood-aix.vercel.app",
  telephone: "+33456572670",
  address: {
    "@type": "PostalAddress",
    streetAddress: "543 Boulevard President Wilson",
    addressLocality: "Aix-les-Bains",
    postalCode: "73100",
    addressRegion: "Savoie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.6889,
    longitude: 5.9153,
  },
  servesCuisine: ["Halal", "Burgers", "Fast food", "Sandwiches"],
  priceRange: "10-20 EUR",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "00:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "67",
  },
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Burgers",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Double Cheese",
            description: "Double steak, double cheddar, salade, tomate, oignons, sauce secrete",
            offers: { "@type": "Offer", price: "7.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Gourmand",
            description: "Steak hache, raclette fondue, oignons caramelises, bacon, sauce miel-moutarde",
            offers: { "@type": "Offer", price: "8.50", priceCurrency: "EUR" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Hummer",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Hummer 1 Viande",
            offers: { "@type": "Offer", price: "9.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Hummer 2 Viandes",
            offers: { "@type": "Offer", price: "11.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Hummer 3 Viandes",
            offers: { "@type": "Offer", price: "13.50", priceCurrency: "EUR" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Sandwiches Steaks",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Le 73",
            description: "Pain artisanal, steak, reblochon fondu, pommes de terre, lardons",
            offers: { "@type": "Offer", price: "8.00", priceCurrency: "EUR" },
          },
        ],
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Hummer />
        <Concept />
        <Location />
      </main>
      <Footer />
      <FloatingCall />
      <MobileCTA />
    </>
  );
}
