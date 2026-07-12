import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import { site, reviews, openingHoursSchema, faq } from "@/lib/data";
import Analytics from "@/components/Analytics";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E1216",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Chikano · Kebab Halal, Burger, Tacos & Panini à La Barre-de-Monts (85550)",
  description:
    "Kebab halal, burgers, tacos et paninis faits maison à La Barre-de-Monts, Vendée (85550), près de Fromentine et Saint-Jean-de-Monts. Pain maison, viande 100% bœuf halal, options végétariennes disponibles. Convient à tous les régimes alimentaires. Noté 4,9/5 sur Google, ouvert 7j/7. 07 75 71 68 85.",
  keywords: [
    "kebab halal La Barre-de-Monts",
    "kebab La Barre-de-Monts",
    "burger halal La Barre-de-Monts",
    "restaurant halal Vendée 85",
    "tacos La Barre-de-Monts",
    "Chikano La Barre-de-Monts",
    "restaurant snack Vendée 85550",
    "kebab 85550",
    "kebab halal Vendée",
    "fast food halal La Barre-de-Monts",
    "restaurant végétarien La Barre-de-Monts",
    "kebab Fromentine",
    "kebab Notre-Dame-de-Monts",
    "kebab Saint-Jean-de-Monts",
    "restaurant Île de Noirmoutier",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: "Chikano",
    title: "Chikano · Kebab Halal, Burger, Tacos & Panini à La Barre-de-Monts",
    description:
      "Street food halal maison à La Barre-de-Monts (85550), Vendée. Pain maison, viande 100% bœuf halal, options végétariennes. 4,9/5 sur Google, ouvert 7j/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chikano · Kebab Halal, Burger, Tacos & Panini à La Barre-de-Monts",
    description:
      "Street food halal maison à La Barre-de-Monts (85550). Pain maison, options végétariennes, 4,9/5 sur Google. Appelez le 07 75 71 68 85.",
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
    "geo.placename": "La Barre-de-Monts",
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
    "Restaurant de street food halal à La Barre-de-Monts : kebab, burger, tacos, panini. Viandes 100% halal, options végétariennes disponibles.",
  servesCuisine: ["Kebab", "Burger", "Tacos", "Panini", "Sandwichs", "Street food", "Halal"],
  url: site.url,
  image: `${site.url}/opengraph-image`,
  telephone: site.phoneE164,
  priceRange: "€€",
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
  hasDeliveryMethod: [
    "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
  ],
  openingHoursSpecification: openingHoursSchema,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: 5,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
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
    <html lang="fr" className={`${anton.variable} ${inter.variable}`}>
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
