"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { PinIcon } from "@/components/icons";

/**
 * Carte Google chargee uniquement apres clic de l'utilisateur.
 * Tant qu'on ne clique pas, aucun cookie tiers Google n'est depose :
 * cela evite d'avoir a afficher un bandeau cookies (conforme CNIL).
 */
export default function MapEmbed() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={site.mapsEmbedUrl}
        title={`Localisation de ${site.name}, ${site.address.full}`}
        className="h-full min-h-[280px] w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShow(true)}
      className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 bg-slate-soft p-6 text-center transition-colors hover:bg-slate-card"
    >
      <PinIcon className="h-8 w-8 text-gold" />
      <span className="font-display text-lg uppercase tracking-wide text-bone">
        Afficher la carte
      </span>
      <span className="max-w-xs text-xs text-bone/50">
        La carte Google se charge à votre clic. Un cookie Google peut alors être
        déposé.
      </span>
    </button>
  );
}
