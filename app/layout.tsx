import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { site, reviews, openingHoursSchema, faq } from "@/lib/data";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Chikano — Kebab, Tacos & Sandwichs à La Barre-de-Monts (85550)",
  description:
    "Kebab, tacos et sandwichs faits maison à La Barre-de-Monts, Vendée (85550), près de Fromentine, Notre-Dame-de-Monts et Saint-Jean-de-Monts. Noté 4,9/5 sur Google. Ouvert dès 17h — 07 75 71 68 85.",
  keywords: [
    "kebab La Barre-de-Monts",
    "tacos kebab La Barre-de-Monts",
    "Chikano La Barre-de-Monts",
    "restaurant snack Vendée 85550",
    "kebab 85550",
    "kebab Vendée",
    "tacos 85550",
    "snack La Barre-de-Monts",
    "sandwich La Barre-de-Monts",
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
    title: "Chikano — Kebab, Tacos & Sandwichs à La Barre-de-Monts",
    description:
      "Kebab, tacos et sandwichs maison à La Barre-de-Monts (85550), Vendée. 4,9/5 sur Google (18 avis). Ouvert dès 17h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chikano — Kebab, Tacos & Sandwichs à La Barre-de-Monts",
    description:
      "Kebab, tacos et sandwichs maison à La Barre-de-Monts (85550). 4,9/5 sur Google. Appelez le 07 75 71 68 85.",
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
    // Geo tags — signal de pertinence locale pour les moteurs et
    // certains agrégateurs qui les lisent encore (Bing, annuaires).
    "geo.region": "FR-85",
    "geo.placename": "La Barre-de-Monts",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

// Schema.org LocalBusiness (Restaurant) — données structurées pour Google
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  servesCuisine: ["Tacos", "Kebab", "Sandwichs", "Street food"],
  url: site.url,
  image: `${site.url}/opengraph-image`,
  telephone: site.phoneE164,
  priceRange: site.priceRange,
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
  areaServed: site.areaServed.map((name) => ({
    "@type": "City",
    name,
  })),
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
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
  })),
  sameAs: [site.facebookUrl],
  hasMap: site.directionsUrl,
};

// FAQPage — reprend le contenu visible de la section #faq (voir
// components/sections/Faq.tsx) pour rester éligible aux rich snippets.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
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
      </body>
    </html>
  );
}
