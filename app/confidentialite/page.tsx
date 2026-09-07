import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Chikano",
  description:
    "Politique de confidentialité et gestion des cookies du site Chikano, restaurant à La Barre-de-Monts (85550).",
  alternates: { canonical: "/confidentialite" },
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
            contact, de compte client ni de paiement en ligne :{" "}
            <strong>
              aucune donnée personnelle ne vous est demandée pour le consulter
            </strong>
            . Lorsque vous appelez le {site.phoneDisplay}, l&apos;échange se
            fait directement par téléphone, hors du site. La seule collecte
            possible est celle de la mesure d&apos;audience décrite plus bas,
            qui n&apos;a lieu que si vous l&apos;acceptez.
          </p>
        </section>

        <section id="cookies" className="scroll-mt-24">
          <h2 className="font-display text-xl uppercase tracking-wide text-gold">
            Cookies et mesure d&apos;audience
          </h2>
          <p className="mt-2 leading-relaxed">
            Ce site utilise <strong>Google Analytics 4</strong> pour compter les
            visites et savoir quelles pages sont consultées. Cela nous sert à
            savoir si le site est utile, et à rien d&apos;autre : nous ne
            consultons que des statistiques agrégées, nous ne cherchons pas à
            savoir qui vous êtes, et nous ne recoupons ces données avec aucune
            autre source.
          </p>
          <p className="mt-3 leading-relaxed">
            Cette mesure dépose un cookie sur votre appareil, et{" "}
            <strong>
              rien n&apos;est déposé tant que vous n&apos;avez pas accepté
            </strong>{" "}
            : le bandeau s&apos;affiche à votre première visite, et le refus est
            mémorisé aussi longtemps que l&apos;acceptation. Le site fonctionne
            exactement de la même manière dans les deux cas. Vous pouvez revenir
            sur votre choix à tout moment par le lien « Cookies » du pied de
            page.
          </p>
          <p className="mt-3 leading-relaxed">
            Les données sont traitées par Google, ce qui peut impliquer un
            transfert hors de l&apos;Union européenne. Elles sont conservées
            quatorze mois, puis supprimées.
          </p>
          <p className="mt-3 leading-relaxed">
            Aucun cookie publicitaire n&apos;est déposé. La carte Google Maps
            n&apos;est chargée que si vous cliquez sur « Afficher la carte » :
            ce n&apos;est qu&apos;à ce moment, et avec votre action, que Google
            peut déposer ses propres cookies.
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
