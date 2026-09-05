import type { Metadata, Viewport } from "next";
import { Inter, Anton, Kaushan_Script } from "next/font/google";
import { site, reviews, openingHoursSchema, faq, menu } from "@/lib/data";
import Analytics from "@/components/Analytics";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090A",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Titre court volontairement : Google tronque au-dela de ~60 caracteres,
  // un titre coupe fait chuter le taux de clic.
  title: "Kebab, Pizza & Tacos Halal à Mareuil-sur-Lay · O'dinner",
  // Description tenue sous ~160 caracteres pour s'afficher en entier dans les
  // resultats, avec les arguments de clic en premier.
  description:
    "Kebab, pizza, tacos, burger et couscous halal à Mareuil-sur-Lay-Dissais (85320). Préparé à la commande, sur place ou à emporter. Ouvert 7j/7, midi et soir.",
  keywords: [
    "kebab Mareuil-sur-Lay-Dissais",
    "kebab halal Mareuil-sur-Lay",
    "pizza Mareuil-sur-Lay-Dissais",
    "tacos Mareuil-sur-Lay",
    "burger Mareuil-sur-Lay-Dissais",
    "couscous Vendée 85",
    "fast food Mareuil-sur-Lay",
    "restaurant halal Sud Vendée",
    "kebab 85320",
    "kebab Luçon",
    "pizza à emporter Luçon",
    "kebab Sainte-Hermine",
    "pâtisseries orientales Vendée",
    "O'dinner Mareuil-sur-Lay",
    "restauration rapide Mareuil-sur-Lay-Dissais",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "O'dinner · Kebab, Pizza, Tacos & Couscous à Mareuil-sur-Lay",
    description:
      "Fast-food halal à Mareuil-sur-Lay-Dissais (85320), Vendée. Kebabs, pizzas, tacos, burgers, couscous et pâtisseries orientales. Sur place ou à emporter, 7j/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "O'dinner · Kebab, Pizza, Tacos & Couscous à Mareuil-sur-Lay",
    description:
      "Fast-food halal à Mareuil-sur-Lay-Dissais (85320). Préparé à la commande, sur place ou à emporter. Appelez le 06 25 86 93 17.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  other: {
    "geo.region": "FR-85",
    "geo.placename": "Mareuil-sur-Lay-Dissais",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
  // Renseigné via la variable d'environnement Vercel GOOGLE_SITE_VERIFICATION
  // (copier le code fourni par Search Console lors de la vérification "balise HTML").
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  description:
    "Restauration rapide halal à Mareuil-sur-Lay-Dissais : kebab, pizza, tacos, burger, panini, couscous et pâtisseries orientales. Sur place ou à emporter.",
  servesCuisine: [
    "Kebab",
    "Pizza",
    "Tacos",
    "Burger",
    "Panini",
    "Couscous",
    "Street food",
    "Halal",
  ],
  url: site.url,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/photos/logo.png`,
  telephone: site.phoneE164,
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: "Vendée",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
  hasDeliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
  openingHoursSpecification: openingHoursSchema,
  // La carte est décrite par catégories : les prix ne sont pas publiés par
  // le restaurant, on ne les invente pas dans les données structurées.
  hasMenu: {
    "@type": "Menu",
    name: `Carte ${site.name}`,
    hasMenuSection: menu.map((category) => ({
      "@type": "MenuSection",
      name: category.title,
      description: category.note,
      ...(category.items && category.items.length > 0
        ? {
            hasMenuItem: category.items.map((item) => ({
              "@type": "MenuItem",
              name: item.name,
              ...(item.description ? { description: item.description } : {}),
              offers: { "@type": "Offer", price: item.price, priceCurrency: "EUR" },
            })),
          }
        : {}),
    })),
  },
  ...(reviews.length > 0
    ? {
        review: reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: 5,
          },
          reviewBody: r.text,
        })),
      }
    : {}),
  sameAs: [site.facebookUrl],
  hasMap: site.directionsUrl,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${kaushan.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
