import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales · Chikano",
  description: "Mentions légales du site Chikano, La Barre-de-Monts (85550).",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="wrap max-w-3xl py-20">
      <Link href="/" className="text-sm font-semibold text-gold hover:underline">
        ← Retour à l&apos;accueil
      </Link>
      <h1 className="mt-6 font-display text-4xl uppercase tracking-wide text-bone">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Éditeur du site
          </h2>
          <p className="mt-2 leading-relaxed">
            {site.name}
            <br />
            {site.address.full}
            <br />
            Téléphone : {site.phoneDisplay}
            <br />
            Statut / raison sociale : [À COMPLÉTER par le restaurant]
            <br />
            SIRET : [À COMPLÉTER]
            <br />
            Responsable de la publication : [À COMPLÉTER : nom du gérant]
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Hébergement
          </h2>
          <p className="mt-2 leading-relaxed">
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            vercel.com
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Conception
          </h2>
          <p className="mt-2 leading-relaxed">
            Site conçu et développé par Raythan. Contact : [À COMPLÉTER : email].
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Propriété intellectuelle
          </h2>
          <p className="mt-2 leading-relaxed">
            L&apos;ensemble des contenus de ce site (textes, photographies, logo,
            mise en page) est protégé. Les photographies proviennent de la fiche
            de l&apos;établissement. Toute reproduction, même partielle, sans
            autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Données personnelles
          </h2>
          <p className="mt-2 leading-relaxed">
            Ce site ne recueille aucune donnée personnelle via un formulaire.
            Pour en savoir plus, consultez notre{" "}
            <Link href="/confidentialite" className="text-gold hover:underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
