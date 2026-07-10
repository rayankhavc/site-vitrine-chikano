import { site } from "@/lib/data";
import { FacebookIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-night-border/50 bg-night-soft">
      <div className="container-page py-16">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          {/* Contact */}
          <div>
            <h3 className="font-heading text-2xl font-extrabold uppercase">
              Chik<span className="text-ember">a</span>no
            </h3>
            <p className="mt-2 text-sm text-cream/60">{site.tagline}</p>
            <a
              href={site.phoneHref}
              className="btn-flame mt-5 w-full text-lg sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="mb-3 flex items-center justify-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-cream/70 sm:justify-start">
              <PinIcon className="h-4 w-4 text-ember" />
              Adresse
            </h4>
            <address className="not-italic leading-relaxed text-cream/80">
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
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream/70 transition-colors hover:text-ember"
            >
              <FacebookIcon className="h-4 w-4" />
              Suivez-nous sur Facebook
            </a>
          </div>

          {/* Horaires résumés */}
          <div>
            <h4 className="mb-3 flex items-center justify-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-cream/70 sm:justify-start">
              <ClockIcon className="h-4 w-4 text-ember" />
              Horaires
            </h4>
            <p className="leading-relaxed text-cream/80">
              Ouvert dès 17h00
              <br />
              <span className="text-sm text-cream/50">
                Appelez-nous pour confirmer les horaires du jour.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-night-border/60 pt-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} {site.name} — {site.address.city} ({site.zip}).
          Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
