export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  badge?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers",
    icon: "burger",
    items: [
      {
        name: "Cheese Burger Classique",
        description: "Steak haché, cheddar fondu, salade, tomate, oignons, sauce maison",
        price: "5,50",
        image: "/images/menu/cheese-burger.webp",
      },
      {
        name: "Double Cheese",
        description: "Double steak, double cheddar, salade, tomate, oignons, sauce secrète",
        price: "7,50",
        image: "/images/menu/double-cheese.webp",
      },
      {
        name: "Triple Cheese",
        description: "Triple steak, triple cheddar, salade, tomate, oignons, sauce secrète",
        price: "9,50",
        image: "/images/menu/triple-cheese.webp",
      },
      {
        name: "Chicken Burger",
        description: "Filet de poulet pané croustillant, salade, tomate, sauce curry",
        price: "6,50",
        image: "/images/menu/chicken-burger.webp",
      },
      {
        name: "Fish Burger",
        description: "Filet de poisson pané, salade, tomate, sauce tartare maison",
        price: "6,50",
        image: "/images/menu/fish-burger.webp",
      },
      {
        name: "Gourmand",
        description: "Steak haché, raclette fondue, oignons caramélisés, bacon, sauce miel-moutarde",
        price: "8,50",
        badge: "Populaire",
        image: "/images/menu/gourmand.webp",
      },
      {
        name: "Miel",
        description: "Steak haché, chèvre fondant, miel, noix, roquette",
        price: "8,00",
        image: "/images/menu/miel.webp",
      },
      {
        name: "Rings Burger",
        description: "Steak haché, onion rings croustillants, cheddar, sauce barbecue fumée",
        price: "8,00",
        image: "/images/menu/rings-burger.webp",
      },
      {
        name: "Tasty",
        description: "Steak haché, cheddar, tomate confite, roquette, sauce pesto",
        price: "8,00",
        image: "/images/menu/tasty.webp",
      },
      {
        name: "IBO",
        description: "Double steak, emmental, oignons frits, cornichons, sauce IBO maison",
        price: "8,50",
        image: "/images/menu/ibo.webp",
      },
    ],
  },
  {
    id: "sandwiches-steaks",
    title: "Sandwiches Steaks",
    icon: "sandwich",
    items: [
      {
        name: "Blind",
        description: "Pain artisanal, steak haché, fromage fondu, salade, sauce blanche",
        price: "6,50",
        image: "/images/menu/blind.webp",
      },
      {
        name: "Mixup",
        description: "Pain artisanal, steak, poulet, crudités, sauce algérienne",
        price: "7,00",
        image: "/images/menu/mixup.webp",
      },
      {
        name: "Magnetic",
        description: "Pain artisanal, steak, cheddar, oignons caramélisés, sauce moutarde",
        price: "7,00",
        image: "/images/menu/magnetic.webp",
      },
      {
        name: "Buffalo",
        description: "Pain artisanal, steak, sauce buffalo épicée, crudités, ranch",
        price: "7,50",
        badge: "Épicé",
        image: "/images/menu/buffalo.webp",
      },
      {
        name: "Chicago",
        description: "Pain artisanal, steak, cheddar, bacon, oignons frits, sauce BBQ",
        price: "7,50",
        image: "/images/menu/chicago.webp",
      },
      {
        name: "Tenders",
        description: "Pain artisanal, tenders de poulet croustillants, salade, sauce curry",
        price: "7,00",
        image: "/images/menu/tenders.webp",
      },
      {
        name: "Radical",
        description: "Pain artisanal, steak, raclette, champignons, sauce poivre",
        price: "7,50",
        image: "/images/menu/radical.webp",
      },
      {
        name: "Chicken Pané",
        description: "Pain artisanal, escalope de poulet panée, crudités, sauce blanche",
        price: "6,50",
        image: "/images/menu/chicken-pane.webp",
      },
      {
        name: "Istanbul",
        description: "Pain artisanal, viande grillée, oignons, tomate, épices orientales",
        price: "7,00",
        image: "/images/menu/istanbul.webp",
      },
      {
        name: "Le 73",
        description: "Pain artisanal, steak, reblochon fondu, pommes de terre, lardons",
        price: "8,00",
        badge: "Spécialité locale",
        image: "/images/menu/le-73.webp",
      },
    ],
  },
  {
    id: "hummer",
    title: "Hummer",
    icon: "star",
    items: [
      {
        name: "Hummer 1 Viande",
        description: "Le géant d'Insta Food : pain brioché XL, steak haché, cheddar, crudités, sauce signature",
        price: "9,50",
        image: "/images/menu/hummer-1.webp",
      },
      {
        name: "Hummer 2 Viandes",
        description: "Double viande, double fromage, crudités généreuses, sauces au choix",
        price: "11,50",
        badge: "Best-seller",
        image: "/images/menu/hummer-2.webp",
      },
      {
        name: "Hummer 3 Viandes",
        description: "Le défi ultime : triple viande, triple fromage, toutes les garnitures, sauces illimitées",
        price: "13,50",
        badge: "Challenge",
        image: "/images/menu/hummer-3.webp",
      },
    ],
  },
  {
    id: "sandwiches-galette",
    title: "Sandwiches Galette",
    icon: "wrap",
    items: [
      {
        name: "Galette Classique",
        description: "Galette maison, viande hachée, crudités, frites, sauce au choix",
        price: "7,00",
        image: "/images/menu/galette-classique.webp",
      },
      {
        name: "Galette Poulet",
        description: "Galette maison, poulet grillé, crudités, frites, sauce blanche",
        price: "7,00",
        image: "/images/menu/galette-poulet.webp",
      },
      {
        name: "Galette Chaat",
        description: "Galette maison, viande épicée, oignons, herbes fraîches, sauce piquante",
        price: "7,50",
        image: "/images/menu/galette-chaat.webp",
      },
      {
        name: "Galette Cordon Bleu",
        description: "Galette maison, cordon bleu, crudités, frites, sauce fromagère",
        price: "7,50",
        image: "/images/menu/galette-cordon-bleu.webp",
      },
      {
        name: "Galette Nuggets",
        description: "Galette maison, nuggets croustillants, crudités, frites, sauce barbecue",
        price: "7,00",
        image: "/images/menu/galette-nuggets.webp",
      },
    ],
  },
  {
    id: "menus",
    title: "Menus",
    icon: "menu",
    items: [
      {
        name: "Menu M1",
        description: "Sandwich au choix + frites + boisson",
        price: "9,50",
        image: "/images/menu/menu-m1.webp",
      },
      {
        name: "Menu M2",
        description: "Burger au choix + frites + boisson",
        price: "10,50",
        image: "/images/menu/menu-m2.webp",
      },
      {
        name: "Menu M3",
        description: "Hummer au choix + frites + boisson",
        price: "12,50",
        badge: "Meilleur rapport",
        image: "/images/menu/menu-m3.webp",
      },
      {
        name: "Kid Menu",
        description: "Mini burger ou nuggets + petites frites + boisson + surprise",
        price: "6,50",
        image: "/images/menu/kid-menu.webp",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras & Desserts",
    icon: "fries",
    items: [
      {
        name: "Frites Maison",
        description: "Frites fraîches coupées sur place",
        price: "3,00",
        image: "/images/menu/frites.webp",
      },
      {
        name: "Nuggets x6",
        description: "Nuggets de poulet croustillants, sauce au choix",
        price: "4,50",
        image: "/images/menu/nuggets.webp",
      },
      {
        name: "Onion Rings",
        description: "Rondelles d'oignons panées et croustillantes",
        price: "4,00",
        image: "/images/menu/onion-rings.webp",
      },
      {
        name: "Mozzarella Sticks",
        description: "Bâtonnets de mozzarella panés, sauce marinara",
        price: "4,50",
        image: "/images/menu/mozza-sticks.webp",
      },
      {
        name: "Waffle",
        description: "Gaufre tiède, Nutella, chantilly, fruits frais",
        price: "5,00",
        image: "/images/menu/waffle.webp",
      },
      {
        name: "Tiramisu",
        description: "Tiramisu maison au café",
        price: "4,50",
        image: "/images/menu/tiramisu.webp",
      },
    ],
  },
];

export const sauces = [
  "Mayonnaise",
  "Ketchup",
  "Barbecue",
  "Algérienne",
  "Samouraï",
  "Blanche",
  "Curry",
  "Biggy",
  "Moutarde",
  "Poivre",
  "Ranch",
  "Pesto",
  "Harissa",
  "Miel-Moutarde",
];
