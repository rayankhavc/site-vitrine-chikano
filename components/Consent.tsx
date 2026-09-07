"use client";

/**
 * Bandeau de consentement à la mesure d'audience.
 *
 * Trois règles de la CNIL, et elles se voient dans le code :
 *
 * - rien n'est déposé avant la réponse. Le mode consentement de Google est
 *   posé à « refusé » dans components/Analytics.tsx, avant le chargement de
 *   la balise. Ce fichier ne fait que relever la réponse et la transmettre ;
 * - refuser doit être aussi simple qu'accepter. Les deux boutons ont donc la
 *   même taille, la même place et le même poids visuel — pas un bouton plein
 *   contre un lien gris ;
 * - le choix doit pouvoir être retiré aussi facilement qu'il a été donné.
 *   D'où le lien « Cookies » du pied de page, qui rouvre le bandeau.
 *
 * Le refus est mémorisé comme l'acceptation. Redemander à chaque visite à
 * quelqu'un qui a déjà dit non, c'est le harceler jusqu'à ce qu'il cède — et
 * c'est précisément ce que la CNIL sanctionne.
 */

import { useEffect, useState } from "react";
import Link from "next/link";

export const CLE = "chikano-mesure";

/** La réponse déjà donnée, ou null si la question n'a jamais été posée. */
function reponseEnregistree(): "oui" | "non" | null {
  try {
    const v = localStorage.getItem(CLE);
    return v === "oui" || v === "non" ? v : null;
  } catch {
    return null; // stockage refusé par le navigateur
  }
}

export default function Consent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reponseEnregistree() === null) setVisible(true);

    // Le lien « Cookies » du pied de page pointe sur #cookies. Il peut changer
    // de page (on arrive avec l'ancre) ou non (on est déjà sur la page, et
    // seul le hash change) : les deux cas doivent rouvrir le choix.
    const ouvrirSiAncre = () => {
      if (window.location.hash === "#cookies") setVisible(true);
    };
    ouvrirSiAncre();
    window.addEventListener("hashchange", ouvrirSiAncre);
    return () => window.removeEventListener("hashchange", ouvrirSiAncre);
  }, []);

  function repondre(valeur: "oui" | "non") {
    try {
      localStorage.setItem(CLE, valeur);
    } catch {
      /* stockage refusé : le choix vaut pour cette visite seulement */
    }
    window.gtag?.("consent", "update", {
      analytics_storage: valeur === "oui" ? "granted" : "denied",
    });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-titre"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-line/60 bg-slate-card/95 p-4 backdrop-blur sm:inset-x-auto sm:bottom-4 sm:left-4 sm:max-w-sm sm:rounded-lg sm:border"
    >
      <p
        id="consent-titre"
        className="font-display text-sm uppercase tracking-widest text-gold"
      >
        Mesure d&apos;audience
      </p>
      <p className="mt-2 text-sm leading-relaxed text-bone/80">
        Nous aimerions compter les visites pour savoir ce qui est utile sur ce
        site. Cela dépose un cookie. Le site fonctionne exactement pareil si
        vous refusez.{" "}
        <Link
          href="/confidentialite#cookies"
          className="underline decoration-gold/40 underline-offset-2 hover:text-gold"
        >
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => repondre("non")}
          className="rounded border border-slate-line px-4 py-2 text-sm font-semibold text-bone transition-colors hover:border-gold hover:text-gold"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => repondre("oui")}
          className="rounded border border-slate-line px-4 py-2 text-sm font-semibold text-bone transition-colors hover:border-gold hover:text-gold"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
