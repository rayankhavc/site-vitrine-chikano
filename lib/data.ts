/**
 * ==============================================================
 *  DONNEES DU SITE CHIKANO
 *  Contenu reel releve sur la fiche Google + les panneaux menu
 *  du restaurant (photos dans /public/photos).
 *  Tout ce qui est modifiable est centralise ici.
 * ==============================================================
 */

export const site = {
  name: "Chikano",
  tagline: "Burger · Tacos · Kebab · Panini",
  city: "La Barre-de-Monts",
  department: "Vendée",
  zip: "85550",

  // A remplacer par le vrai domaine au moment de la mise en ligne
  url: "https://chikano.fr",

  phoneDisplay: "07 75 71 68 85",
  phoneHref: "tel:+33775716885",
  phoneE164: "+33775716885",

  address: {
    street: "2 Bis Rte du Marais",
    zip: "85550",
    city: "La Barre-de-Monts",
    full: "2 Bis Rte du Marais, 85550 La Barre-de-Monts",
  },

  // Coordonnees exactes relevees sur la fiche Google Maps
  geo: {
    lat: 46.8838228,
    lng: -2.1184426,
  },

  // Communes voisines de la zone de chalandise (maillage SEO local)
  areaServed: [
    "La Barre-de-Monts",
    "Fromentine",
    "Notre-Dame-de-Monts",
    "Saint-Jean-de-Monts",
    "Beauvoir-sur-Mer",
    "Île de Noirmoutier",
  ],

  // Services confirmes sur la fiche Google
  services: ["Sur place", "À emporter"],

  // Regimes alimentaires acceptes
  dietary: {
    halal: true,
    vegetarian: true,
  },

  facebookUrl:
    "https://www.facebook.com/p/Chikano-La-Barre-De-Monts-61574288112446/",

  // Liens Google Maps (aucune cle API necessaire)
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chikano+2+Bis+Rte+du+Marais+85550+La+Barre-de-Monts",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Chikano%2C+2+Bis+Rte+du+Marais%2C+85550+La+Barre-de-Monts",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=2+Bis+Rte+du+Marais%2C+85550+La+Barre-de-Monts&output=embed",

  rating: {
    value: 4.9,
    display: "4,9",
    count: 18,
  },

  priceRange: "1 à 10 €",
};

export const areaServedDisplay = site.areaServed
  .filter((name) => name !== site.city)
  .join(", ");

// Photos reelles du restaurant (fiche Google) stockees en local
export const photos = {
  logo: "/photos/logo.jpg",
  facade: "/photos/facade.jpg",
  cheeseburger: "/photos/cheeseburger.jpg",
  chikano1: "/photos/chikano-1.jpg",
  painBuns: "/photos/pain-maison-buns.jpg",
  painBaguettes: "/photos/pain-maison-baguettes.jpg",
  menuBoards: [
    { src: "/photos/menu-tacos.jpg", label: "Tacos, maxis, assiettes & bowls" },
    { src: "/photos/menu-sandwichs.jpg", label: "Sandwichs & paninis" },
    { src: "/photos/menu-burgers.jpg", label: "Burgers" },
    { src: "/photos/menu-salades.jpg", label: "Salades, snacks & desserts" },
  ],
};

/* ============================================================
   MENU REEL (releve sur les panneaux du restaurant)
   ============================================================ */

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "tacos",
    title: "Tacos",
    note: "Sauce fromagère maison, servis avec des frites",
    items: [
      { name: "1 viande", price: "9 €" },
      { name: "2 viandes", price: "10,50 €" },
      { name: "3 viandes", price: "12 €" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    note: "Viande hachée fraîche 100% bœuf, pain maison, crudités",
    items: [
      { name: "P'tit Cheese", description: "Steak 50g + cheddar", price: "5 €" },
      { name: "Double P'tit Cheese", description: "2 steaks 50g + cheddar", price: "7 €" },
      { name: "Cheeseburger", description: "Steak 130g + cheddar", price: "8 €" },
      { name: "Double Cheeseburger", description: "2 steaks 130g + cheddar", price: "10 €" },
      { name: "Raclette", description: "Steak 130g + cheddar + fromage à raclette", price: "9 €" },
      { name: "Royal", description: "Steak 130g + cheddar + filet de poulet pané", price: "10 €" },
      { name: "Farmer", description: "Steak 130g + cheddar + rösti de pomme de terre", price: "9,50 €" },
      { name: "Fish", description: "Poisson pané + cheddar", price: "8 €" },
      { name: "Chicken", description: "Poulet pané + cheddar", price: "8 €" },
    ],
  },
  {
    id: "maxis",
    title: "Sandwichs Maxis",
    note: "Double tortilla, crudités + frites",
    items: [
      { name: "1 viande", price: "11 €" },
      { name: "2 viandes", price: "13 €" },
      { name: "3 viandes", price: "15 €" },
    ],
  },
  {
    id: "classiques",
    title: "Sandwichs Classiques",
    note: "Pain maison ou tortilla, crudités + frites",
    items: [
      { name: "Kebab", price: "8 €" },
      { name: "Américain", price: "8,50 €" },
      { name: "Chicken", price: "8,50 €" },
      { name: "Cordon bleu", price: "8,50 €" },
      { name: "Escalope", price: "8,50 €" },
      { name: "Falafel", price: "8,50 €" },
      { name: "Merguez", price: "8,50 €" },
      { name: "Kefta", price: "8,50 €" },
      { name: "Kebab Royal", description: "Kebab + cheddar + œuf au plat", price: "9,50 €" },
    ],
  },
  {
    id: "speciaux",
    title: "Sandwichs Spéciaux",
    note: "Pain maison ou tortilla, crudités",
    items: [
      { name: "Triplex", description: "3 steaks + cheddar + œuf au plat", price: "11 €" },
      { name: "Radical", description: "2 steaks + cheddar + merguez + œuf au plat", price: "11 €" },
      { name: "Blindé", description: "3 steaks + cheddar + rösti de pomme de terre", price: "11 €" },
      { name: "Boursin", description: "Escalope poulet + poivron + sauce fromagère Boursin", price: "11 €" },
      { name: "Chikano", description: "2 steaks + cheddar + cordon bleu", price: "11 €" },
    ],
  },
  {
    id: "assiettes",
    title: "Assiettes",
    note: "Servies avec crudités + frites",
    items: [
      { name: "1 viande", price: "11 €" },
      { name: "2 viandes", price: "13 €" },
      { name: "3 viandes", price: "15 €" },
    ],
  },
  {
    id: "bowls",
    title: "Bowls",
    note: "Base frites + sauce fromagère + oignons croustillants + cheddar fondu",
    items: [
      { name: "1 viande", price: "11 €" },
      { name: "2 viandes", price: "13 €" },
      { name: "3 viandes", price: "15 €" },
    ],
  },
  {
    id: "paninis",
    title: "Paninis",
    note: "À base de mozzarella",
    items: [
      { name: "Viande", description: "1 viande au choix (sauf cordon bleu)", price: "7 €" },
      { name: "3 Fromages", description: "Mozzarella + gorgonzola + chèvre", price: "7 €" },
      { name: "Chèvre Miel", description: "Fromage de chèvre + miel", price: "7 €" },
    ],
  },
  {
    id: "salades",
    title: "Salades",
    note: "Base salade verte + tomates + olives",
    items: [
      { name: "Végane", description: "Falafel + poivron + chou rouge", price: "7 €" },
      { name: "Mixte", description: "Fromage de chèvre", price: "6 €" },
      { name: "Poulet", description: "Poulet + gruyère", price: "7 €" },
      { name: "Fermière", description: "Poulet + poivron + chèvre", price: "7 €" },
    ],
  },
  {
    id: "petites-faims",
    title: "Petites Faims",
    items: [
      { name: "Mozza sticks", description: "4 pièces / 7 / 10", price: "5 · 8 · 11 €" },
      { name: "Onion rings", description: "6 pièces / 9 / 12", price: "5 · 7 · 9 €" },
      { name: "Tenders", description: "3 pièces / 6 / 9", price: "6,50 · 9,50 · 13 €" },
      { name: "Nuggets", description: "6 pièces / 10", price: "6 · 9 €" },
      { name: "Camemberts panés", description: "4 pièces / 7 / 10", price: "5 · 8 · 11 €" },
      { name: "Frites", description: "Moyenne / grande", price: "3 · 5 €" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Boissons",
    items: [
      { name: "Tiramisu", price: "3 €" },
      { name: "Panini Nutella", price: "4,50 €" },
      { name: "Tarte au Daim", price: "3 €" },
      { name: "Pâtisserie orientale", price: "2 €" },
      { name: "Soda", description: "Canette 33cl / 50cl / 1,25L", price: "2 · 2,50 · 4 €" },
      { name: "Red Bull / Eau", description: "25cl / bouteille", price: "2,50 · 1,50 €" },
    ],
  },
];

// Formules mises en avant
export const menus = [
  {
    name: "Menu Duo",
    price: "15 €",
    description:
      "Sandwich kebab frites & cheddar + P'tit Cheese steak 50g + boisson 33cl",
  },
  {
    name: "Menu Enfant",
    price: "7,50 €",
    description:
      "P'tit Cheese 50g ou 5 nuggets ou kébab ou 1 tender + frites + Capri-Sun",
  },
];

// Viandes proposees pour tacos, maxis, assiettes et bowls
export const viandes = [
  "Steak 100% bœuf",
  "Kebab",
  "Merguez",
  "Escalope",
  "Poulet curry",
  "Cordon bleu",
  "Tenders",
  "Nuggets",
  "Kefta",
  "Falafels (végétarien)",
];

// Sauces maison au choix
export const sauces = [
  "Curry",
  "Andalouse",
  "Harissa",
  "Biggy Burger",
  "Samouraï",
  "Mayonnaise",
  "Ketchup",
  "Moutarde",
  "Barbecue",
  "Algérienne",
  "Blanche",
];

/* ============================================================
   AVIS GOOGLE (contenu reel, 5/5)
   ============================================================ */

export type Review = {
  author: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    author: "Kim Charpentier",
    rating: 5,
    text: "Excellent ! Les kebabs étaient très bons, le pain est maison ce qui est très rare. Le personnel était très accueillant et très gentil !",
  },
  {
    author: "Nicolas Hoarau",
    rating: 5,
    text: "Si vous passez par là n'hésitez pas à goûter leurs tacos, kebab etc. Ils sont excellents, et surtout très bon accueil, merci.",
  },
  {
    author: "nicolas pinier",
    rating: 5,
    text: "Superbe accueil. Un établissement très bien agencé. La cuisine au top, on y mange très bien et c'est au calme. Je vous recommande à 100%.",
  },
];

/* ============================================================
   HORAIRES REELS
   Ouvert 7j/7 de 11h a 23h, sauf vendredi (ouverture a 17h).
   ============================================================ */

export type DayHours = {
  day: string;
  schemaDay: string;
  open: string; // format "11:00", ou "" si ferme
  close: string;
};

export const openingHours: DayHours[] = [
  { day: "Lundi", schemaDay: "Monday", open: "11:00", close: "23:00" },
  { day: "Mardi", schemaDay: "Tuesday", open: "11:00", close: "23:00" },
  { day: "Mercredi", schemaDay: "Wednesday", open: "11:00", close: "23:00" },
  { day: "Jeudi", schemaDay: "Thursday", open: "11:00", close: "23:00" },
  { day: "Vendredi", schemaDay: "Friday", open: "17:00", close: "23:00" },
  { day: "Samedi", schemaDay: "Saturday", open: "11:00", close: "23:00" },
  { day: "Dimanche", schemaDay: "Sunday", open: "11:00", close: "23:00" },
];

// "11:00" -> "11h00" pour l'affichage
export function formatHour(value: string): string {
  return value.replace(":", "h");
}

export function formatRange(entry: DayHours): string {
  if (!entry.open) return "Fermé";
  return `${formatHour(entry.open)} à ${formatHour(entry.close)}`;
}

export const hoursSummary = "Ouvert 7j/7 · 11h à 23h (vendredi dès 17h)";

// schema.org openingHoursSpecification (consomme par app/layout.tsx)
export const openingHoursSchema = openingHours
  .filter((entry) => entry.open)
  .map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${entry.schemaDay}`,
    opens: entry.open,
    closes: entry.close,
  }));

/* ============================================================
   FAQ (visible + schema FAQPage)
   ============================================================ */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Où manger un kebab à La Barre-de-Monts ?",
    answer:
      "Chez Chikano, au 2 Bis Rte du Marais à La Barre-de-Monts (85550). On y prépare kebabs, tacos, burgers, paninis et sandwichs avec un pain fait maison, à deux pas de Fromentine et de la pointe de Noirmoutier.",
  },
  {
    question: "Quels sont les horaires d'ouverture de Chikano ?",
    answer:
      "Chikano est ouvert 7j/7, de 11h00 à 23h00. Le vendredi, l'ouverture se fait à partir de 17h00.",
  },
  {
    question: "Peut-on manger sur place ou à emporter chez Chikano ?",
    answer:
      "Oui. Chikano propose le repas sur place et la vente à emporter. Pour commander, appelez le 07 75 71 68 85.",
  },
  {
    question: "Le pain est-il vraiment fait maison ?",
    answer:
      "Oui, le pain des burgers et des sandwichs est préparé maison sur place, ce que les clients soulignent régulièrement dans leurs avis. La viande des burgers est hachée fraîche, 100% bœuf.",
  },
  {
    question: "Chikano propose-t-il de la viande halal et des plats végétariens ?",
    answer:
      "Oui. Les viandes servies chez Chikano sont halal, et des options végétariennes sont disponibles (falafel, salade végane). De quoi convenir à tous les régimes alimentaires.",
  },
];
