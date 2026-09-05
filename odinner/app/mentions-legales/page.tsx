import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales · O'dinner",
  description:
    "Mentions légales du site O'dinner : éditeur, hébergeur et responsable de publication du restaurant de Mareuil-sur-Lay-Dissais (85320).",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <main className="wrap max-w-3xl py-20">
      <Link href="/" className="text-sm font-semibold text-red hover:underline">
        ← Retour à l&apos;accueil
      </Link>
      <h1 className="mt-6 font-display text-4xl uppercase tracking-wide text-bone">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-red">
            Éditeur du site
          </h2>
          <p className="mt-2 leading-relaxed">
            {site.name}
            <br />
            {site.address.full}
            <br />
            Téléphone : {site.phoneDisplay}
            <br />
            SIRET : 979 527 447 00010
            <br />
            Code APE : 56.10C — Restauration de type rapide
            <br />
            Responsable de la publication : Ali Yahiaoui, gérant
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-red">
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
          <h2 className="font-display text-xl uppercase tracking-wide text-red">
            Conception
          </h2>
          <p className="mt-2 leading-relaxed">
            Site conçu et développé par Raythan Web Design. Contact :
            raythanwebdesign@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-red">
            Propriété intellectuelle
          </h2>
          <p className="mt-2 leading-relaxed">
            L&apos;ensemble des contenus de ce site (textes, photographies,
            logo, mise en page) est protégé. Le logo et les photographies
            proviennent de la fiche de l&apos;établissement. Toute
            reproduction, même partielle, sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-red">
            Données personnelles
          </h2>
          <p className="mt-2 leading-relaxed">
            Ce site ne recueille aucune donnée personnelle via un formulaire.
            Pour en savoir plus, consultez notre{" "}
            <Link href="/confidentialite" className="text-red hover:underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
