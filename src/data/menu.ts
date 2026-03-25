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
      },
      {
        name: "Boursin",
        description: "Mozza, viande hachee, Boursin, pomme de terre et oeuf",
        price: "11,90",
      },
      {
        name: "Tartiflette",
        description: "Lardon et pomme de terre",
        price: "11,90",
      },
      {
        name: "Tenders",
        description: "Tenders et pomme de terre",
        price: "11,90",
      },
      {
        name: "Saumon",
        description: "Mozza et saumon",
        price: "11,90",
      },
      {
        name: "Raclette",
        description: "Emmental mozzarella, raclette et Vache qui rit",
        price: "11,90",
      },
      {
        name: "Compagnon",
        description: "Merguez, poivrons et oeuf",
        price: "11,90",
      },
      {
        name: "Barbecue",
        description: "Viande",
        price: "11,90",
      },
      {
        name: "Chicken",
        description: "Mozzarella, chicken pane et pomme de terre",
        price: "11,90",
      },
      {
        name: "Fermiere",
        description: "Poulet, Boursin, champignons, pommes de terre et lardons",
        price: "11,90",
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
      },
      {
        name: "Regina",
        description: "Jambon de dinde et champignons",
        price: "11,90",
      },
      {
        name: "4 Fromages",
        description: "Mozza, chevre et gorgonzola",
        price: "11,90",
      },
      {
        name: "Bolognaise",
        description: "Viande hachee, champignons et oeuf",
        price: "11,90",
      },
      {
        name: "Mexicana",
        description: "Viande hachee, merguez et sauce BBQ",
        price: "11,90",
      },
      {
        name: "Algerienne",
        description: "Viande hachee, merguez, poivrons et sauce algerienne",
        price: "11,90",
      },
      {
        name: "Kebab",
        description: "Kebab et mozzarella",
        price: "11,90",
      },
      {
        name: "Chicken",
        description: "Curry, chicken et oeuf",
        price: "11,90",
      },
      {
        name: "Tunisienne",
        description: "Mozzarella, thon et capres",
        price: "11,90",
      },
      {
        name: "Oriental",
        description: "Mozzarella, poivrons, merguez, olives, oeuf et oignons",
        price: "11,90",
      },
      {
        name: "Vegetarienne",
        description: "Aubergine grillees, courgettes grillees, poivrons, olives et oignons",
        price: "11,90",
      },
      {
        name: "Chili Thai",
        description: "Tandori, oignons et sauce Thai",
        price: "11,90",
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
      },
      {
        name: "Kefta",
        description: "Kefta, cheddar et crudites",
        price: "7,50",
      },
      {
        name: "Merguez",
        description: "Merguez et crudites",
        price: "7,50",
      },
      {
        name: "Texas",
        description: "2 steaks, cheddar et crudites",
        price: "7,50",
      },
      {
        name: "Cordon Bleu",
        description: "Cordon bleu, cheddar et crudites",
        price: "7,50",
      },
      {
        name: "Escalope",
        description: "Escalope, cheddar et crudites",
        price: "7,50",
      },
      {
        name: "Chicken Boursin",
        description: "Cheddar et crudites",
        price: "7,00",
      },
      {
        name: "Chicken Curry",
        description: "Cheddar et crudites",
        price: "7,50",
      },
      {
        name: "Chicken Tandori",
        description: "Cheddar et crudites",
        price: "7,50",
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
      },
      {
        name: "Mixup",
        description: "2 steaks, cordon bleu, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Magistral",
        description: "3 steaks, bacon, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Buffalo",
        description: "3 steaks, oeuf, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Chicago",
        description: "2 steaks, escalope, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Tenders",
        description: "2 steaks, tenders, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Radical",
        description: "2 steaks, galette pomme de terre, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Chicken Pane",
        description: "2 steaks, chicken pane, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Istanbul",
        description: "Kefta, merguez, oeuf, cheddar et crudites",
        price: "9,50",
      },
      {
        name: "Le 73",
        description: "3 steaks 90g, oeuf, cheddar et crudites",
        price: "9,50",
        badge: "Specialite locale",
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
      },
      {
        name: "742",
        description: "Steak, curry, tandori, cheddar et crudites",
        price: "8,50",
      },
      {
        name: "Miel",
        description: "Kebab, chevre, miel, cheddar et crudites",
        price: "8,50",
      },
      {
        name: "Oriental",
        description: "Kefta, kebab, merguez, oeuf, cheddar et crudites",
        price: "8,50",
      },
      {
        name: "Le Fermier",
        description: "Chicken, Boursin, lardons, emmental et crudites",
        price: "8,50",
      },
      {
        name: "Raclette",
        description: "2 steaks, raclette, bacon et crudites",
        price: "8,50",
      },
      {
        name: "Parisien",
        description: "Steak, merguez, poulet curry, cheddar et crudites",
        price: "8,50",
      },
      {
        name: "Montagnard",
        description: "2 steaks, poulet curry, Vache qui rit, cheddar et crudites",
        price: "8,50",
      },
      {
        name: "Insta Food",
        description: "1 viande, cheddar, crudites, frites et boisson",
        price: "9,50",
        badge: "Signature",
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
      },
      {
        name: "Double",
        description: "2 viandes et 1 sauce au choix",
        price: "8,50",
      },
      {
        name: "Maxi",
        description: "3 viandes et 1 sauce au choix",
        price: "10,50",
      },
      {
        name: "Big",
        description: "4 viandes et 1 sauce au choix",
        price: "12,50",
      },
      {
        name: "Geant",
        description: "5 viandes et 1 sauce au choix",
        price: "14,50",
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
      },
      {
        name: "H3",
        description: "3 steaks et 3 fromages",
        price: "11,20",
        badge: "Best-seller",
      },
      {
        name: "H4",
        description: "4 steaks et 4 fromages",
        price: "12,60",
        badge: "Challenge",
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
      },
      {
        name: "Double Cheese",
        description: "2 steaks et cheddar",
        price: "7,50",
      },
      {
        name: "Triple Cheese",
        description: "3 steaks et cheddar",
        price: "9,50",
      },
      {
        name: "Chicken Pane",
        description: "Poulet pane et cheddar",
        price: "8,00",
      },
      {
        name: "Fish",
        description: "Poisson et cheddar",
        price: "7,00",
      },
      {
        name: "Royal Pane",
        description: "2 steaks, oeuf et cheddar",
        price: "8,50",
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
      },
      {
        name: "Assiette 2 Viandes",
        description: "Assiette composee de 2 viandes",
        price: "10,50",
      },
      {
        name: "Assiette 3 Viandes",
        description: "Assortiment de 3 viandes",
        price: "12,50",
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
      },
      {
        name: "Nuggets x5",
        price: "6,00",
      },
      {
        name: "Stick Mozza x5",
        price: "6,00",
      },
      {
        name: "Tenders x5",
        price: "6,00",
      },
      {
        name: "Bouchees Camembert x5",
        price: "6,00",
      },
      {
        name: "Frites Maison",
        price: "3,00",
      },
      {
        name: "Kid's Menu",
        description: "1 plat au choix, frites, boisson et Kinder",
        price: "6,50",
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
