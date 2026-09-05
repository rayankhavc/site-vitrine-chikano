/**
 * ==============================================================
 *  DONNEES DU SITE O'DINNER
 *  Contenu releve sur la fiche Google Business de l'etablissement
 *  (nom, logo, adresse, coordonnees GPS, telephone, categories) et
 *  horaires transmis par le restaurant.
 *  Tout ce qui est modifiable est centralise ici.
 * ==============================================================
 */

export const site = {
  name: "O'dinner",
  tagline: "Kebab · Pizza · Tacos · Burger · Couscous",
  city: "Mareuil-sur-Lay-Dissais",
  department: "Vendée",
  zip: "85320",

  // A remplacer par le vrai domaine au moment de la mise en ligne
  // (une seule ligne a changer : tout le SEO, le sitemap et les
  //  donnees structurees se mettent a jour automatiquement).
  url: "https://odinner.vercel.app",

  phoneDisplay: "06 25 86 93 17",
  phoneHref: "tel:+33625869317",
  phoneE164: "+33625869317",

  address: {
    street: "51 Rue Hervé de Mareuil",
    zip: "85320",
    city: "Mareuil-sur-Lay-Dissais",
    full: "51 Rue Hervé de Mareuil, 85320 Mareuil-sur-Lay-Dissais",
  },

  // Coordonnees exactes relevees sur la fiche Google Maps
  geo: {
    lat: 46.5358215,
    lng: -1.2247702,
  },

  // Identifiants Google Maps de l'etablissement (aucune cle API necessaire)
  placeId: "ChIJzch7-W-fBkgR1owUiDzmAUk",

  // Communes voisines de la zone de chalandise (maillage SEO local)
  areaServed: [
    "Mareuil-sur-Lay-Dissais",
    "Luçon",
    "Sainte-Hermine",
    "Moutiers-sur-le-Lay",
    "Château-Guibert",
    "Les Pineaux",
    "Bessay",
    "Corpe",
    "Les Magnils-Reigniers",
  ],

  // Services confirmes sur la fiche Google
  // (la livraison et le service traiteur sont annonces par certains annuaires
  //  mais pas par la fiche officielle : a activer une fois confirme par Ali)
  services: ["Sur place", "À emporter"],

  // Regimes alimentaires
  dietary: {
    halal: true,
    vegetarian: false,
  },

  facebookUrl: "https://www.facebook.com/p/Odinner-100094451359855/",

  // Liens Google Maps construits sur le place_id : ils resteront valides
  // meme si le nom ou l'adresse changent sur la fiche.
  googleReviewsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJzch7-W-fBkgR1owUiDzmAUk",
  writeReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJzch7-W-fBkgR1owUiDzmAUk",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=51%20Rue%20Herv%C3%A9%20de%20Mareuil%2C%2085320%20Mareuil-sur-Lay-Dissais&destination_place_id=ChIJzch7-W-fBkgR1owUiDzmAUk",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=51+Rue+Herv%C3%A9+de+Mareuil%2C+85320+Mareuil-sur-Lay-Dissais&output=embed",
};

export const areaServedDisplay = site.areaServed
  .filter((name) => name !== site.city)
  .join(", ");

// Visuels reels de l'etablissement (fiche Google) stockes en local
export const photos = {
  logo: "/photos/logo.png",
  patisseries: "/photos/patisseries-orientales.jpg",
};

/* ============================================================
   LA CARTE
   ------------------------------------------------------------
   Les categories ci-dessous sont celles annoncees par le
   restaurant sur sa fiche Google. Les prix et le detail des
   produits ne sont PAS publies par l'etablissement : ils ne sont
   donc volontairement pas inventes ici.

   >>> POUR AJOUTER LES PRIX : remplir le tableau "items" d'une
       categorie, par exemple :

       items: [
         { name: "Kebab", price: "8 €" },
         { name: "Kebab Royal", description: "Cheddar + œuf", price: "9,50 €" },
       ]

   Les cartes s'affichent automatiquement avec les prix des qu'un
   "items" est rempli, et le bandeau "prix par telephone" dispa-
   rait de lui-meme quand toutes les categories sont completees.
   ============================================================ */

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note: string;
  items?: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "kebabs",
    title: "Kebabs & Sandwichs",
    note: "La spécialité de la maison, viande grillée à la commande, crudités et sauce au choix.",
  },
  {
    id: "tacos",
    title: "Tacos",
    note: "Tacos français généreux, viandes au choix et sauce fromagère.",
  },
  {
    id: "burgers",
    title: "Burgers",
    note: "Burgers préparés à la commande, viande grillée minute.",
  },
  {
    id: "pizzas",
    title: "Pizzas",
    note: "Pizzas cuites à la commande, à emporter ou à déguster sur place.",
  },
  {
    id: "couscous",
    title: "Couscous",
    note: "Semoule, légumes et viandes : le plat qui change du fast-food.",
  },
  {
    id: "paninis",
    title: "Paninis",
    note: "Pain pressé, fromage fondu, garniture au choix.",
  },
  {
    id: "assiettes",
    title: "Assiettes & Salades",
    note: "Assiettes complètes et salades fraîches pour les plus grosses faims.",
  },
  {
    id: "patisseries",
    title: "Pâtisseries orientales",
    note: "Baklava, cornes de gazelle, makrouts : la vitrine change au fil des jours.",
  },
  {
    id: "boissons",
    title: "Boissons",
    note: "Sodas, boissons fraîches et eaux minérales.",
  },
];

export const menuHasPrices = menu.some((c) => c.items && c.items.length > 0);

/* ============================================================
   AVIS GOOGLE
   ------------------------------------------------------------
   Volontairement vide : aucun avis n'est invente. Des qu'Ali
   valide 3 avis reels (auteur + texte), les ajouter ici et ils
   apparaissent sur le site ET dans les donnees structurees.
   ============================================================ */

export type Review = {
  author: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [];

/* ============================================================
   HORAIRES REELS
   Ouvert 7j/7. Service midi + soir, sauf lundi et vendredi
   (ouverture le soir uniquement).
   ============================================================ */

export type Slot = {
  open: string; // "11:00"
  close: string; // "14:30"
};

export type DayHours = {
  day: string;
  schemaDay: string;
  slots: Slot[]; // tableau vide = ferme ce jour-la
};

export const openingHours: DayHours[] = [
  {
    day: "Lundi",
    schemaDay: "Monday",
    slots: [{ open: "18:30", close: "22:00" }],
  },
  {
    day: "Mardi",
    schemaDay: "Tuesday",
    slots: [
      { open: "11:00", close: "14:30" },
      { open: "18:00", close: "22:00" },
    ],
  },
  {
    day: "Mercredi",
    schemaDay: "Wednesday",
    slots: [
      { open: "11:00", close: "14:30" },
      { open: "18:00", close: "22:00" },
    ],
  },
  {
    day: "Jeudi",
    schemaDay: "Thursday",
    slots: [
      { open: "11:00", close: "14:30" },
      { open: "18:00", close: "22:00" },
    ],
  },
  {
    day: "Vendredi",
    schemaDay: "Friday",
    slots: [{ open: "18:00", close: "23:00" }],
  },
  {
    day: "Samedi",
    schemaDay: "Saturday",
    slots: [
      { open: "11:00", close: "14:30" },
      { open: "18:00", close: "23:00" },
    ],
  },
  {
    day: "Dimanche",
    schemaDay: "Sunday",
    slots: [
      { open: "12:00", close: "14:30" },
      { open: "17:00", close: "22:00" },
    ],
  },
];

// "11:00" -> "11h00" pour l'affichage
export function formatHour(value: string): string {
  return value.replace(":", "h");
}

export function formatSlot(slot: Slot): string {
  return `${formatHour(slot.open)} – ${formatHour(slot.close)}`;
}

export function formatDay(entry: DayHours): string {
  if (entry.slots.length === 0) return "Fermé";
  return entry.slots.map(formatSlot).join(" · ");
}

// Jours ouverts le midi (sert a la phrase de resume et a la FAQ)
export const eveningOnlyDays = openingHours
  .filter((d) => d.slots.length === 1)
  .map((d) => d.day.toLowerCase());

export const hoursSummary =
  "Ouvert 7j/7 · midi et soir (lundi et vendredi : le soir uniquement)";

// schema.org openingHoursSpecification : une entree par creneau
export const openingHoursSchema = openingHours.flatMap((entry) =>
  entry.slots.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${entry.schemaDay}`,
    opens: slot.open,
    closes: slot.close,
  }))
);

/* ============================================================
   FAQ (visible + schema FAQPage)
   ============================================================ */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Où manger un kebab à Mareuil-sur-Lay-Dissais ?",
    answer:
      "Chez O'dinner, au 51 Rue Hervé de Mareuil à Mareuil-sur-Lay-Dissais (85320). On y sert kebabs, pizzas, tacos, burgers, paninis et couscous, sur place ou à emporter, à quelques minutes de Luçon et de Sainte-Hermine.",
  },
  {
    question: "Quels sont les horaires d'ouverture d'O'dinner ?",
    answer:
      "O'dinner est ouvert 7j/7. Du mardi au jeudi de 11h00 à 14h30 et de 18h00 à 22h00, le vendredi de 18h00 à 23h00, le samedi de 11h00 à 14h30 et de 18h00 à 23h00, le dimanche de 12h00 à 14h30 et de 17h00 à 22h00, et le lundi de 18h30 à 22h00.",
  },
  {
    question: "O'dinner est-il ouvert le midi ?",
    answer:
      "Oui, du mardi au jeudi et le samedi de 11h00 à 14h30, et le dimanche de 12h00 à 14h30. Le lundi et le vendredi, le restaurant ouvre uniquement le soir.",
  },
  {
    question: "Peut-on manger sur place ou à emporter chez O'dinner ?",
    answer:
      "Les deux. O'dinner propose le repas sur place et la vente à emporter. Pour commander, appelez le 06 25 86 93 17.",
  },
  {
    question: "La viande servie chez O'dinner est-elle halal ?",
    answer:
      "Oui, les viandes servies chez O'dinner sont halal. Le restaurant propose aussi une vitrine de pâtisseries orientales préparées maison.",
  },
  {
    question: "O'dinner fait-il aussi des pizzas et du couscous ?",
    answer:
      "Oui. En plus des kebabs, tacos et burgers, la carte comprend des pizzas et du couscous, ce qui est rare pour un fast-food en Sud-Vendée.",
  },
];
