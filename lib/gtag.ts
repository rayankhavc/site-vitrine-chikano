declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envoie un evenement a Google Analytics 4 via la fonction gtag()
 * officielle (definie par components/Analytics.tsx). C'est la seule
 * methode fiable : pousser un tableau brut dans dataLayer n'est PAS
 * traite par gtag.js. Ne fait rien si le tag n'est pas encore charge.
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params);
}
