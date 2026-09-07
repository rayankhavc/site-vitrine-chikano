import Script from "next/script";

const GA_ID = "G-Q933CDS71R";

/**
 * Google Analytics 4 (gtag.js), sous consentement.
 *
 * L'ordre des deux scripts n'est pas cosmétique, c'est ce qui rend le site
 * conforme : le mode consentement de Google est posé à « refusé » AVANT que
 * la balise ne se charge (strategy "beforeInteractive"), si bien qu'aucun
 * cookie de mesure n'est déposé tant que le visiteur n'a pas répondu au
 * bandeau (components/Consent.tsx). Sans cette première balise, gtag.js
 * dépose son cookie dès la première page — ce que la CNIL sanctionne.
 *
 * Le choix du visiteur est relevé par Consent.tsx, qui envoie le
 * « consent update » correspondant. Un refus est mémorisé comme une
 * acceptation, et reste modifiable par le lien « Cookies » du pied de page.
 */
export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Refus par défaut, posé avant tout chargement de balise. */}
      <Script id="ga4-consent-defaut" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          try {
            if (localStorage.getItem('chikano-mesure') === 'oui') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
