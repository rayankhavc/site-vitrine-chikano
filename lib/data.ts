/**
 * ─────────────────────────────────────────────────────────────
 *  DONNÉES DU SITE CHIKANO
 *  Tout le contenu modifiable est centralisé ici :
 *  coordonnées, menu, avis, horaires.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Chikano",
  tagline: "Tacos · Kebabs · Sandwichs",
  city: "La Barre-de-Monts",
  department: "Vendée",
  zip: "85550",

  // ⚠️ À remplacer par le vrai domaine au moment de la mise en ligne
  url: "https://chikano-labarredemonts.fr",

  phoneDisplay: "07 75 71 68 85",
  phoneHref: "tel:+33775716885",
  phoneE164: "+33775716885",

  address: {
    street: "2 Bis Rte du Marais",
    zip: "85550",
    city: "La Barre-de-Monts",
    full: "2 Bis Rte du Marais, 85550 La Barre-de-Monts",
  },

  // Géocodage du secteur Fromentine / La Barre-de-Monts (Nominatim/OSM)
  geo: {
    lat: 46.883857,
    lng: -2.11839,
  },

  // Communes voisines couvertes par la zone de chalandise — utile pour le
  // maillage sémantique local (areaServed) et les requêtes "kebab près de moi"
  areaServed: [
    "La Barre-de-Monts",
    "Fromentine",
    "Notre-Dame-de-Monts",
    "Saint-Jean-de-Monts",
    "Beauvoir-sur-Mer",
    "Île de Noirmoutier",
  ],

  facebookUrl:
    "https://www.facebook.com/p/Chikano-La-Barre-De-Monts-61574288112446/",

  // Liens Google Maps (aucune clé API nécessaire)
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

  priceRange: "1–10 €",
};

export const areaServedDisplay = site.areaServed
  .filter((name) => name !== site.city)
  .join(", ");

/* ────────────────────────────────────────────
   MENU — PLACEHOLDERS
   Remplacer les items par la carte réelle
   (nom, description, prix) dès réception.
   ──────────────────────────────────────────── */

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "tacos",
    title: "Tacos",
    emoji: "🌮",
    items: [
      { name: "Tacos 1 viande", description: "Viande au choix, sauce fromagère maison, frites", price: "—" },
      { name: "Tacos 2 viandes", description: "Deux viandes au choix, sauce fromagère maison, frites", price: "—" },
      { name: "Tacos 3 viandes", description: "Trois viandes au choix, sauce fromagère maison, frites", price: "—" },
    ],
  },
  {
    id: "kebabs",
    title: "Kebabs",
    emoji: "🥙",
    items: [
      { name: "Kebab classique", description: "Pain, viande grillée, crudités, sauce au choix", price: "—" },
      { name: "Menu kebab", description: "Kebab + frites + boisson", price: "—" },
      { name: "Assiette kebab", description: "Viande, frites, crudités, sauce au choix", price: "—" },
    ],
  },
  {
    id: "sandwichs",
    title: "Sandwichs",
    emoji: "🥪",
    items: [
      { name: "Sandwich poulet", description: "Pain frais, poulet mariné, crudités, sauce au choix", price: "—" },
      { name: "Sandwich mixte", description: "Pain frais, deux viandes, crudités, sauce au choix", price: "—" },
      { name: "Panini", description: "Garniture au choix, pain grillé", price: "—" },
    ],
  },
  {
    id: "sides",
    title: "Extras & Boissons",
    emoji: "🍟",
    items: [
      { name: "Frites maison", price: "—" },
      { name: "Boissons 33 cl", description: "Coca-Cola, Oasis, Ice Tea…", price: "—" },
      { name: "Desserts", description: "Tiramisu, pâtisseries…", price: "—" },
    ],
  },
];

/* ────────────────────────────────────────────
   AVIS GOOGLE — contenu réel (5/5 chacun)
   ──────────────────────────────────────────── */

export type Review = {
  author: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    author: "Nicolas Hoarau",
    rating: 5,
    text: "Si vous passez par là n'hésitez pas à goûter leurs tacos, kebab etc. Ils sont excellents, et surtout très bonne accueil merci.",
  },
  {
    author: "Tymilou Harb",
    rating: 5,
    text: "Super bien accueilli ! Grand choix de produits de bonnes qualités les sandwichs sont bien garni. On reviendra !",
  },
  {
    author: "Armelle Jouan",
    rating: 5,
    text: "Super top ! Accueil parfait des gens très souriants et très serviables le pain est délicieux et la viande de très bonne qualité établissement très propre je recommande cet établissement",
  },
];

/* ────────────────────────────────────────────
   HORAIRES — PLACEHOLDERS
   Seule certitude actuelle : ouverture à 17h.
   Compléter les créneaux exacts dès confirmation.
   ──────────────────────────────────────────── */

export type DayHours = {
  day: string;
  hours: string; // "Fermé" ou créneau, ex. "17h00 – 22h30"
};

export const openingHours: DayHours[] = [
  { day: "Lundi", hours: "17h00 – 22h00" },
  { day: "Mardi", hours: "17h00 – 22h00" },
  { day: "Mercredi", hours: "17h00 – 22h00" },
  { day: "Jeudi", hours: "17h00 – 22h00" },
  { day: "Vendredi", hours: "17h00 – 22h00" },
  { day: "Samedi", hours: "17h00 – 22h00" },
  { day: "Dimanche", hours: "17h00 – 22h00" },
];

export const hoursNote =
  "Horaires en cours de confirmation — appelez-nous pour vérifier avant de passer.";

const dayNameToSchema: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
};

function toSchemaTime(value: string): string {
  // "17h00" → "17:00"
  return value.trim().replace("h", ":");
}

// Traduction des horaires (lib/data.ts) au format schema.org
// openingHoursSpecification, consommé par app/layout.tsx (JSON-LD).
export const openingHoursSchema = openingHours
  .filter((entry) => entry.hours.toLowerCase() !== "fermé")
  .map((entry) => {
    const [opens, closes] = entry.hours.split("–").map((part) => part.trim());
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNameToSchema[entry.day]}`,
      opens: toSchemaTime(opens),
      closes: toSchemaTime(closes),
    };
  });

/* ────────────────────────────────────────────
   FAQ — contenu visible + support du schema
   FAQPage. Rédigé pour couvrir les requêtes
   locales ("kebab La Barre-de-Monts", "85550"…).
   ──────────────────────────────────────────── */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Où manger un kebab à La Barre-de-Monts ?",
    answer:
      "Chez Chikano, au 2 Bis Rte du Marais à La Barre-de-Monts (85550). Nous préparons des kebabs, tacos et sandwichs faits maison, à deux pas de Fromentine et de la pointe de Noirmoutier.",
  },
  {
    question: "Quels sont les horaires d'ouverture de Chikano ?",
    answer:
      "Le restaurant ouvre ses portes à partir de 17h00. Pour connaître les horaires précis du jour, le plus sûr est de nous appeler au 07 75 71 68 85.",
  },
  {
    question: "Chikano livre-t-il ou est-ce uniquement à emporter/sur place ?",
    answer:
      "Pour connaître nos options de service (sur place, à emporter) et passer commande, contactez-nous directement par téléphone au 07 75 71 68 85.",
  },
  {
    question: "Chikano est-il proche de Saint-Jean-de-Monts et Notre-Dame-de-Monts ?",
    answer:
      "Oui, Chikano se trouve à La Barre-de-Monts en Vendée, à quelques minutes de Notre-Dame-de-Monts, Saint-Jean-de-Monts, Fromentine et de l'île de Noirmoutier.",
  },
];
