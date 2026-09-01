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
};

export default nextConfig;
