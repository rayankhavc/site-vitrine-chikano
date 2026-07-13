import Link from "next/link";
import { site, hoursSummary } from "@/lib/data";
import { FacebookIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";
import PhoneLink from "@/components/PhoneLink";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-line/60 bg-ink">
      <div className="wrap py-16">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          {/* Marque + appel */}
          <div>
            <h3 className="font-display text-3xl uppercase tracking-widest text-gold">
              Chikano
            </h3>
            <p className="mt-2 text-sm text-bone/60">{site.tagline}</p>
            <PhoneLink className="btn-gold mt-5 w-full text-lg sm:w-auto">
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
              <PinIcon className="h-4 w-4 text-gold" />
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
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bone/70 transition-colors hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
              Suivez-nous sur Facebook
            </a>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="mb-3 flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest text-bone/70 sm:justify-start">
              <ClockIcon className="h-4 w-4 text-gold" />
              Horaires
            </h4>
            <p className="leading-relaxed text-bone/80">
              Ouvert 7j/7
              <br />
              11h00 à 23h00
              <br />
              <span className="text-sm text-bone/50">Vendredi dès 17h00</span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-line/60 pt-6 text-center text-xs text-bone/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.address.city} ({site.zip}).
            Tous droits réservés.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-gold">
              Confidentialité
            </Link>
          </nav>
        </div>

        {(site.dietary.halal || site.dietary.vegetarian) && (
          <p className="mt-4 text-center text-[11px] text-bone/30">
            {site.dietary.halal && "Viandes halal"}
            {site.dietary.halal && site.dietary.vegetarian && " · "}
            {site.dietary.vegetarian && "options végétariennes disponibles"}
          </p>
        )}
      </div>
    </footer>
  );
}
