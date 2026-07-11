"use client";

import { useCallback, useState } from "react";
import { site } from "@/lib/data";

/**
 * Lien telephone intelligent :
 *  - sur mobile / tablette tactile : declenche l'appel via tel:
 *  - sur ordinateur (ou tel: inutile) : copie le numero dans le presse-papier
 *    et affiche une confirmation.
 */
export default function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const isTouch =
        typeof window !== "undefined" &&
        window.matchMedia("(hover: none), (pointer: coarse)").matches;

      // Sur un appareil tactile, on laisse tel: lancer l'appel.
      if (isTouch || !navigator.clipboard) return;

      // Sur ordinateur, tel: n'ouvre rien : on copie le numero a la place.
      e.preventDefault();
      navigator.clipboard
        .writeText(site.phoneDisplay)
        .then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2400);
        })
        .catch(() => {});
    },
    []
  );

  return (
    <>
      <a
        href={site.phoneHref}
        onClick={handleClick}
        className={className}
        aria-label={`Appeler Chikano au ${site.phoneDisplay}`}
      >
        {children}
      </a>
      {copied ? (
        <span
          role="status"
          className="fixed inset-x-0 bottom-6 z-[70] mx-auto flex w-max items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-plate"
        >
          ✓ Numéro copié : {site.phoneDisplay}
        </span>
      ) : null}
    </>
  );
}
