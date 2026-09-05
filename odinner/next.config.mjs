/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Une seule forme d'URL canonique : pas de variante avec slash final
  // (evite les doublons "Page avec redirection" dans la Search Console).
  trailingSlash: false,

  // Formats modernes servis automatiquement par next/image :
  // AVIF/WebP a la place des JPEG/PNG d'origine (jusqu'a -70% de poids).
  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,
  poweredByHeader: false,

  // En-tetes de securite. Ils ne changent rien a l'affichage mais evitent
  // les avertissements des outils d'audit (Lighthouse, observatory) et
  // empechent qu'un tiers encadre le site dans une iframe.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
