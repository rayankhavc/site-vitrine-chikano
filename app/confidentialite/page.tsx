import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Chikano",
  description:
    "Politique de confidentialité et gestion des cookies du site Chikano, La Barre-de-Monts.",
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <main className="wrap max-w-3xl py-20">
      <Link href="/" className="text-sm font-semibold text-gold hover:underline">
        ← Retour à l&apos;accueil
      </Link>
      <h1 className="mt-6 font-display text-4xl uppercase tracking-wide text-bone">
        Politique de confidentialité
      </h1>

      <div className="mt-8 space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Données collectées
          </h2>
          <p className="mt-2 leading-relaxed">
            Ce site est un site vitrine. Il ne propose pas de formulaire de
            contact, de compte client ni de paiement en ligne : aucune donnée
            personnelle n&apos;est demandée ni enregistrée par le site.
            Lorsque vous appelez le {site.phoneDisplay}, l&apos;échange se fait
            directement par téléphone, hors du site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Cookies
          </h2>
          <p className="mt-2 leading-relaxed">
            Le site ne dépose aucun cookie publicitaire ni de mesure
            d&apos;audience. La carte Google Maps n&apos;est chargée que si vous
            cliquez sur « Afficher la carte » : ce n&apos;est qu&apos;à ce
            moment, et avec votre action, que Google peut déposer ses propres
            cookies. Tant que vous ne cliquez pas, aucun cookie tiers
            n&apos;est déposé.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Hébergement et journaux techniques
          </h2>
          <p className="mt-2 leading-relaxed">
            L&apos;hébergeur (Vercel) peut conserver des journaux techniques
            (adresse IP, type de navigateur) à des fins de sécurité et de bon
            fonctionnement, conformément à sa propre politique.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Vos droits
          </h2>
          <p className="mt-2 leading-relaxed">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification et de suppression de vos données. Pour toute demande,
            contactez le restaurant au {site.phoneDisplay} ou à
            l&apos;adresse : {site.address.full}.
          </p>
        </section>
      </div>
    </main>
  );
}
