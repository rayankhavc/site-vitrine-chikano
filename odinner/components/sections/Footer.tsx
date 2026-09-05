import Link from "next/link";
import { site } from "@/lib/data";
import { FacebookIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";
import PhoneLink from "@/components/PhoneLink";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-coal-line/60 bg-ink">
      <div className="wrap py-16">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          {/* Marque + appel */}
          <div>
            <Wordmark className="justify-center sm:justify-start" />
            <p className="mt-2 text-sm text-bone/60">{site.tagline}</p>
            <PhoneLink className="btn-red mt-5 w-full text-lg sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </PhoneLink>
            <p className="mt-3 text-xs text-bone/50">
              {site.services.join(" · ")}
            </p>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="mb-3 flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest text-bone/70 sm:justify-start">
              <PinIcon className="h-4 w-4 text-red" />
              Adresse
            </h4>
            <address className="not-italic leading-relaxed text-bone/80">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              Vendée, France
            </address>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bone/70 transition-colors hover:text-red"
            >
              <FacebookIcon className="h-4 w-4" />
              Suivez-nous sur Facebook
            </a>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="mb-3 flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest text-bone/70 sm:justify-start">
              <ClockIcon className="h-4 w-4 text-red" />
              Horaires
            </h4>
            <p className="leading-relaxed text-bone/80">
              Ouvert 7j/7
              <br />
              Midi &amp; soir
              <br />
              <span className="text-sm text-bone/50">
                Lundi et vendredi : le soir uniquement
              </span>
            </p>
            <a
              href="#horaires"
              className="mt-3 inline-block text-sm font-semibold text-red hover:underline"
            >
              Voir le détail
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-coal-line/60 pt-6 text-center text-xs text-bone/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.address.city} (
            {site.zip}). Tous droits réservés.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-red">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-red">
              Confidentialité
            </Link>
          </nav>
        </div>

        {site.dietary.halal && (
          <p className="mt-4 text-center text-[11px] text-bone/30">
            Viandes halal
          </p>
        )}

        {/* Crédit agence. Lien suivi volontairement (rel sans nofollow) :
            c'est un lien éditorial légitime entre le site livré et son auteur. */}
        <p className="mt-4 text-center text-[11px] text-bone/40">
          Site conçu et réalisé par{" "}
          <a
            href="https://raythan.fr"
            target="_blank"
            rel="noopener"
            className="font-semibold text-bone/60 underline decoration-red/40 underline-offset-2 transition-colors hover:text-red"
          >
            Raythan Web Design
          </a>
        </p>
      </div>
    </footer>
  );
}
