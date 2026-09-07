/**
 * En-têtes de sécurité — ce qu'un site vitrine doit poser, et pourquoi.
 *
 * Ils ne défendent pas contre une faille du site (il n'a ni formulaire ni
 * base) mais contre ce qu'on peut faire AVEC lui : l'encadrer dans une page
 * pirate pour faire croire à une commande, deviner un type de contenu pour
 * faire exécuter une image, ou fuiter l'adresse consultée vers un tiers.
 *
 * Sur la CSP : Next.js injecte ses propres scripts en ligne pour l'hydratation.
 * Les interdire demanderait des « nonces », donc un middleware et un rendu
 * dynamique à chaque requête — on paierait la performance de tout le site
 * pour un gain nul ici, puisque aucune donnée visiteur n'est affichée.
 * 'unsafe-inline' est donc assumé : la CSP sert ici à cloisonner les
 * domaines externes (rien ne peut être chargé depuis un domaine inconnu),
 * pas à bloquer l'inline.
 */
const CSP = [
  "default-src 'self'",
  // googletagmanager : la balise GA4, chargée seulement après consentement.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  // next/font héberge les polices sur notre propre domaine : aucun tiers ici.
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
  // La carte Google Maps, chargée uniquement au clic du visiteur.
  "frame-src https://www.google.com https://maps.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Une seule forme d'URL canonique : pas de variante avec slash final
  // (evite les doublons "Page avec redirection" dans la Search Console).
  trailingSlash: false,

  // Formats modernes servis automatiquement par next/image :
  // AVIF/WebP a la place des JPEG d'origine (jusqu'a -70% de poids).
  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // frame-ancestors ci-dessus fait le vrai travail ; celui-ci couvre
          // les navigateurs qui ne l'appliquent pas.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
