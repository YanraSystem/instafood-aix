# Insta Food — Demo Site Vitrine + Agent Vocal IA

## Prospect

- **Nom** : Insta Food
- **Type** : Fast-food halal
- **Adresse** : 543 Boulevard President Wilson, 73100 Aix-les-Bains
- **Telephone** : 04 56 57 26 70
- **Horaires** : 11h-23h30, 7j/7
- **Note Google** : 4.6/5 (67 avis)
- **Presence digitale** : Aucune (pas de site web). Present sur Uber Eats.
- **Uber Eats** : https://www.ubereats.com/fr/store/instafood/7NZ2tATAXf2d41hFmJP2Zw

## Pack propose

**STARTER** (990 EUR setup + 149 EUR/mois) + **Agent vocal IA**

## URLs

| Ressource | URL |
|-----------|-----|
| Site production | https://insta-food-aix.vercel.app |
| Site (domaine Vercel) | https://insta-food-eta.vercel.app |
| GitHub | https://github.com/YanraSystem/instafood-aix |
| Retell AI Agent | agent_1bffb00110489cdd9aeec109e8 |
| Numero demo | +33 1 59 58 06 35 (partage entre demos) |

## Stack technique

- **Framework** : Next.js 16 (App Router) + TypeScript
- **CSS** : Tailwind CSS v4
- **Animations** : GSAP + ScrollTrigger
- **Export** : Statique (`output: "export"`)
- **Deploy** : Vercel
- **Images** : Gemini Imagen 4 (12 images food, WebP 8-24KB)
- **Video hero** : Gemini Imagen -> KIE AI Kling 3.0 (5s) -> ffmpeg boomerang
- **Agent vocal** : Retell AI + Claude 4.5 Sonnet + voix Camille (MiniMax)

## Design

- **Palette** : Gradient Instagram (#833AB4 violet / #E1306C rose / #F77737 orange) sur fond dark (#0A0A0A)
- **Typos** : Bebas Neue (display), Oswald (headings), Inter (body)
- **Hero** : Video boomerang desktop, image Ken Burns mobile (pas de video sur iOS)
- **Responsive** : Mobile-first, verifie Playwright 3 viewports (1440/768/390)

## Menu (74 items, source Uber Eats)

| Categorie | Nb items | Prix range |
|-----------|----------|------------|
| Pizzas Base Creme | 10 | 11,90 EUR |
| Pizzas Base Tomate | 12 | 9-11,90 EUR |
| Sandwiches Classiques | 9 | 7-7,50 EUR |
| Sandwiches Steaks | 10 | 9,50 EUR |
| Sandwiches Gigas | 9 | 8,50-9,50 EUR |
| Tacos | 5 | 7,50-14,50 EUR |
| Hummers (H2/H3/H4) | 3 | 9,80-12,60 EUR |
| Burgers | 6 | 5,50-9,50 EUR |
| Assiettes | 3 | 9,50-12,50 EUR |
| Extras | 7 | 3-6,50 EUR |

## Agent vocal — Yasmine

- **Agent ID** : agent_1bffb00110489cdd9aeec109e8
- **LLM ID** : llm_609433d38e56dbb17029d5de4dd2
- **Modele** : Claude 4.5 Sonnet
- **Voix** : minimax-Camille (feminine, FR)
- **Message d'accueil** : "Insta Food bonjour, c'est Yasmine ! Qu'est-ce qui vous ferait plaisir ?"
- **Capabilities** : Menu complet (pizzas incluses), horaires, prise de commande, halal confirme
- **Post-call analysis** : order_placed (bool), order_summary (string), customer_name (string), call_outcome (string)
- **Numero de demo** : +33 1 59 58 06 35 (partage — reassigner avant chaque demo)

## Structure du projet

```
src/
  app/
    layout.tsx          # SEO, metadata, fonts
    page.tsx            # Assemblage sections + JSON-LD
    globals.css         # Tailwind v4, gradient Instagram, Ken Burns
  components/
    Navbar.tsx          # Nav fixe, logo gradient, burger mobile
    Hero.tsx            # Video boomerang desktop, Ken Burns mobile
    Menu.tsx            # 10 categories, tabs, grille items
    Hummer.tsx          # Layout asymetrique photo + contenu
    Concept.tsx         # 3 piliers + bandeau chiffres
    Location.tsx        # Adresse, tel, horaires, map placeholder
    Footer.tsx          # Liens, contact, credit System
    FloatingCall.tsx    # FAB telephone + itineraire
    MobileCTA.tsx       # Barre sticky mobile Commander + Menu
  data/
    menu.ts             # 74 items, 10 categories, 14 sauces
public/
  hero-loop.mp4         # Video boomerang (2MB)
  images/
    hero-bg.webp        # Image hero fond (100KB)
    menu/               # 12 images food Gemini Imagen
```

## Historique des commits

1. Initial commit : structure + composants + menu estime
2. Images Gemini Imagen (12 food images WebP)
3. Refonte complete : palette Instagram, hero photo, sections uniques, Lenis supprime
4. Hero video boomerang (Kling 3.0 + ffmpeg)
5. Menu reel Uber Eats (74 items, pizzas incluses) + prompt vocal mis a jour
6. Fix iOS video : hidden mobile, Ken Burns fallback
