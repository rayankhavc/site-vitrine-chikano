import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Volontairement inactif tant que la variable d'environnement
 * NEXT_PUBLIC_GA_ID n'est pas renseignee : la mesure d'audience et la
 * Search Console sont mises en place a la livraison du nom de domaine.
 * Pour l'activer : Vercel > Settings > Environment Variables >
 * NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX, puis redeployer.
 *
 * Tant qu'aucun ID n'est defini, aucun script tiers n'est charge et
 * aucun cookie de mesure n'est depose : pas de bandeau cookies requis.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
