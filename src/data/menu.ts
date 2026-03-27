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
    id: "pizzas-creme",
    title: "Pizzas Base Creme",
    icon: "pizza",
    items: [
      {
        name: "La Boisee",
        description: "Fromage, poulet, poivrons et sauce fromagere",
        price: "11,90",
        image: "/images/menu/pizza-creme.webp",
      },
      {
        name: "Boursin",
        description: "Mozza, viande hachee, Boursin, pomme de terre et oeuf",
        price: "11,90",
        image: "/images/menu/pizza-boursin.webp",
      },
      {
        name: "Tartiflette",
        description: "Lardon et pomme de terre",
        price: "11,90",
        image: "/images/menu/pizza-tartiflette.webp",
      },
      {
        name: "Tenders",
        description: "Tenders et pomme de terre",
        price: "11,90",
        image: "/images/menu/pizza-tenders.webp",
      },
      {
        name: "Saumon",
        description: "Mozza et saumon",
        price: "11,90",
        image: "/images/menu/pizza-saumon.webp",
      },
      {
        name: "Raclette",
        description: "Emmental mozzarella, raclette et Vache qui rit",
        price: "11,90",
        image: "/images/menu/pizza-raclette.webp",
      },
      {
        name: "Compagnon",
        description: "Merguez, poivrons et oeuf",
        price: "11,90",
        image: "/images/menu/pizza-compagnon.webp",
      },
      {
        name: "Barbecue",
        description: "Viande",
        price: "11,90",
        image: "/images/menu/pizza-barbecue.webp",
      },
      {
        name: "Chicken",
        description: "Mozzarella, chicken pane et pomme de terre",
        price: "11,90",
        image: "/images/menu/pizza-chicken.webp",
      },
      {
        name: "Fermiere",
        description: "Poulet, Boursin, champignons, pommes de terre et lardons",
        price: "11,90",
        image: "/images/menu/pizza-fermiere.webp",
      },
    ],
  },
  {
    id: "pizzas-tomate",
    title: "Pizzas Base Tomate",
    icon: "pizza",
    items: [
      {
        name: "Margarita",
        description: "Fromage et mozza",
        price: "9,00",
        image: "/images/menu/pizza-tomate.webp",
      },
      {
        name: "Regina",
        description: "Jambon de dinde et champignons",
        price: "11,90",
        image: "/images/menu/pizza-regina.webp",
      },
      {
        name: "4 Fromages",
        description: "Mozza, chevre et gorgonzola",
        price: "11,90",
        image: "/images/menu/pizza-4fromages.webp",
      },
      {
        name: "Bolognaise",
        description: "Viande hachee, champignons et oeuf",
        price: "11,90",
        image: "/images/menu/pizza-bolognaise.webp",
      },
      {
        name: "Mexicana",
        description: "Viande hachee, merguez et sauce BBQ",
        price: "11,90",
        image: "/images/menu/pizza-mexicana.webp",
      },
      {
        name: "Algerienne",
        description: "Viande hachee, merguez, poivrons et sauce algerienne",
        price: "11,90",
        image: "/images/menu/pizza-algerienne.webp",
      },
      {
        name: "Kebab",
        description: "Kebab et mozzarella",
        price: "11,90",
        image: "/images/menu/pizza-kebab.webp",
      },
      {
        name: "Chicken",
        description: "Curry, chicken et oeuf",
        price: "11,90",
        image: "/images/menu/pizza-chicken-tomate.webp",
      },
      {
        name: "Tunisienne",
        description: "Mozzarella, thon et capres",
        price: "11,90",
        image: "/images/menu/pizza-tunisienne.webp",
      },
      {
        name: "Oriental",
        description: "Mozzarella, poivrons, merguez, olives, oeuf et oignons",
        price: "11,90",
        image: "/images/menu/pizza-oriental.webp",
      },
      {
        name: "Vegetarienne",
        description: "Aubergine grillees, courgettes grillees, poivrons, olives et oignons",
        price: "11,90",
        image: "/images/menu/pizza-vegetarienne.webp",
      },
      {
        name: "Chili Thai",
        description: "Tandori, oignons et sauce Thai",
        price: "11,90",
        image: "/images/menu/pizza-chili-thai.webp",
      },
    ],
  },
  {
    id: "sandwiches-classiques",
    title: "Sandwiches Classiques",
    icon: "sandwich",
    items: [
      {
        name: "Kebab",
        description: "Kebab et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-classique.webp",
      },
      {
        name: "Kefta",
        description: "Kefta, cheddar et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-kefta.webp",
      },
      {
        name: "Merguez",
        description: "Merguez et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-merguez.webp",
      },
      {
        name: "Texas",
        description: "2 steaks, cheddar et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-texas.webp",
      },
      {
        name: "Cordon Bleu",
        description: "Cordon bleu, cheddar et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-cordon-bleu.webp",
      },
      {
        name: "Escalope",
        description: "Escalope, cheddar et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-escalope.webp",
      },
      {
        name: "Chicken Boursin",
        description: "Cheddar et crudites",
        price: "7,00",
        image: "/images/menu/sandwich-chicken-boursin.webp",
      },
      {
        name: "Chicken Curry",
        description: "Cheddar et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-chicken-curry.webp",
      },
      {
        name: "Chicken Tandori",
        description: "Cheddar et crudites",
        price: "7,50",
        image: "/images/menu/sandwich-chicken-tandori.webp",
      },
    ],
  },
  {
    id: "sandwiches-steaks",
    title: "Sandwiches Steaks",
    icon: "sandwich",
    items: [
      {
        name: "Blinde",
        description: "4 steaks, jambon de dinde, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/blind.webp",
      },
      {
        name: "Mixup",
        description: "2 steaks, cordon bleu, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-mixup.webp",
      },
      {
        name: "Magistral",
        description: "3 steaks, bacon, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-magistral.webp",
      },
      {
        name: "Buffalo",
        description: "3 steaks, oeuf, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/buffalo.webp",
      },
      {
        name: "Chicago",
        description: "2 steaks, escalope, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-chicago.webp",
      },
      {
        name: "Tenders",
        description: "2 steaks, tenders, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-tenders-steak.webp",
      },
      {
        name: "Radical",
        description: "2 steaks, galette pomme de terre, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-radical.webp",
      },
      {
        name: "Chicken Pane",
        description: "2 steaks, chicken pane, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-chicken-pane-steak.webp",
      },
      {
        name: "Istanbul",
        description: "Kefta, merguez, oeuf, cheddar et crudites",
        price: "9,50",
        image: "/images/menu/sandwich-istanbul.webp",
      },
      {
        name: "Le 73",
        description: "3 steaks 90g, oeuf, cheddar et crudites",
        price: "9,50",
        badge: "Specialite locale",
        image: "/images/menu/le-73.webp",
      },
    ],
  },
  {
    id: "sandwiches-gigas",
    title: "Sandwiches Gigas",
    icon: "star",
    items: [
      {
        name: "Miami",
        description: "Escalope, cordon bleu, cheddar et crudites",
        price: "8,50",
        image: "/images/menu/giga-miami.webp",
      },
      {
        name: "742",
        description: "Steak, curry, tandori, cheddar et crudites",
        price: "8,50",
        image: "/images/menu/giga-742.webp",
      },
      {
        name: "Miel",
        description: "Kebab, chevre, miel, cheddar et crudites",
        price: "8,50",
        image: "/images/menu/giga-miel.webp",
      },
      {
        name: "Oriental",
        description: "Kefta, kebab, merguez, oeuf, cheddar et crudites",
        price: "8,50",
        image: "/images/menu/giga-oriental.webp",
      },
      {
        name: "Le Fermier",
        description: "Chicken, Boursin, lardons, emmental et crudites",
        price: "8,50",
        image: "/images/menu/giga-fermier.webp",
      },
      {
        name: "Raclette",
        description: "2 steaks, raclette, bacon et crudites",
        price: "8,50",
        image: "/images/menu/giga-raclette.webp",
      },
      {
        name: "Parisien",
        description: "Steak, merguez, poulet curry, cheddar et crudites",
        price: "8,50",
        image: "/images/menu/giga-parisien.webp",
      },
      {
        name: "Montagnard",
        description: "2 steaks, poulet curry, Vache qui rit, cheddar et crudites",
        price: "8,50",
        image: "/images/menu/giga-montagnard.webp",
      },
      {
        name: "Insta Food",
        description: "1 viande, cheddar, crudites, frites et boisson",
        price: "9,50",
        badge: "Signature",
        image: "/images/menu/giga-instafood.webp",
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    icon: "wrap",
    items: [
      {
        name: "Simple",
        description: "1 viande et 1 sauce au choix",
        price: "7,50",
        image: "/images/menu/tacos-simple.webp",
      },
      {
        name: "Double",
        description: "2 viandes et 1 sauce au choix",
        price: "8,50",
        image: "/images/menu/tacos-double.webp",
      },
      {
        name: "Maxi",
        description: "3 viandes et 1 sauce au choix",
        price: "10,50",
        image: "/images/menu/tacos-maxi.webp",
      },
      {
        name: "Big",
        description: "4 viandes et 1 sauce au choix",
        price: "12,50",
        image: "/images/menu/tacos-big.webp",
      },
      {
        name: "Geant",
        description: "5 viandes et 1 sauce au choix",
        price: "14,50",
        image: "/images/menu/tacos-geant.webp",
      },
    ],
  },
  {
    id: "hummers",
    title: "Hummers",
    icon: "burger",
    items: [
      {
        name: "H2",
        description: "2 steaks et 2 fromages",
        price: "9,80",
        image: "/images/menu/hummer-h2.webp",
      },
      {
        name: "H3",
        description: "3 steaks et 3 fromages",
        price: "11,20",
        badge: "Best-seller",
        image: "/images/menu/hummer-2.webp",
      },
      {
        name: "H4",
        description: "4 steaks et 4 fromages",
        price: "12,60",
        badge: "Challenge",
        image: "/images/menu/hummer-h4.webp",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    icon: "burger",
    items: [
      {
        name: "Cheese Burger",
        description: "1 steak et cheddar",
        price: "5,50",
        image: "/images/menu/cheese-burger.webp",
      },
      {
        name: "Double Cheese",
        description: "2 steaks et cheddar",
        price: "7,50",
        image: "/images/menu/double-cheese.webp",
      },
      {
        name: "Triple Cheese",
        description: "3 steaks et cheddar",
        price: "9,50",
        image: "/images/menu/burger-triple.webp",
      },
      {
        name: "Chicken Pane",
        description: "Poulet pane et cheddar",
        price: "8,00",
        image: "/images/menu/chicken-burger.webp",
      },
      {
        name: "Fish",
        description: "Poisson et cheddar",
        price: "7,00",
        image: "/images/menu/burger-fish.webp",
      },
      {
        name: "Royal Pane",
        description: "2 steaks, oeuf et cheddar",
        price: "8,50",
        image: "/images/menu/burger-royal.webp",
      },
    ],
  },
  {
    id: "assiettes",
    title: "Assiettes",
    icon: "menu",
    items: [
      {
        name: "Assiette 1 Viande",
        description: "Assiette composee de 1 viande au choix",
        price: "9,50",
        image: "/images/menu/assiette-1.webp",
      },
      {
        name: "Assiette 2 Viandes",
        description: "Assiette composee de 2 viandes",
        price: "10,50",
        image: "/images/menu/assiette-2.webp",
      },
      {
        name: "Assiette 3 Viandes",
        description: "Assortiment de 3 viandes",
        price: "12,50",
        image: "/images/menu/assiette-3.webp",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    icon: "fries",
    items: [
      {
        name: "Wings x5",
        price: "6,00",
        image: "/images/menu/wings.webp",
      },
      {
        name: "Nuggets x5",
        price: "6,00",
        image: "/images/menu/nuggets.webp",
      },
      {
        name: "Stick Mozza x5",
        price: "6,00",
        image: "/images/menu/mozzarella-sticks.webp",
      },
      {
        name: "Tenders x5",
        price: "6,00",
        image: "/images/menu/tenders.webp",
      },
      {
        name: "Bouchees Camembert x5",
        price: "6,00",
        image: "/images/menu/bouchees-camembert.webp",
      },
      {
        name: "Frites Maison",
        price: "3,00",
        image: "/images/menu/frites.webp",
      },
      {
        name: "Kid's Menu",
        description: "1 plat au choix, frites, boisson et Kinder",
        price: "6,50",
        image: "/images/menu/kids-menu.webp",
      },
    ],
  },
];

export const sauces = [
  "Mayonnaise",
  "Ketchup",
  "Barbecue",
  "Algerienne",
  "Samourai",
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
