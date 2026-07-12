declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Envoie un evenement a Google Analytics 4 (format gtag.js standard :
 * dataLayer.push(['event', nom, params])). Ne fait rien si le tag
 * n'est pas charge (voir components/Analytics.tsx), y compris en local
 * tant que NEXT_PUBLIC_GA_ID n'est pas configure.
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push(["event", name, params]);
}
