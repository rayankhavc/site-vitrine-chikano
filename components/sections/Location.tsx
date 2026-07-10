import { site, areaServedDisplay } from "@/lib/data";
import { PinIcon, RouteIcon } from "@/components/icons";

export default function Location() {
  return (
    <section id="localisation" className="py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="section-kicker">À deux pas de la plage</p>
          <h2 className="section-title">Nous trouver</h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-cream/80">
            <PinIcon className="h-5 w-5 shrink-0 text-ember" />
            {site.address.full}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-night-border shadow-card">
          <iframe
            src={site.mapsEmbedUrl}
            title={`Localisation de ${site.name} — ${site.address.full}`}
            className="h-[320px] w-full sm:h-[420px]"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame"
          >
            <RouteIcon className="h-5 w-5" />
            Itinéraire
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-cream/50">
          Chikano accueille aussi les gourmands de {areaServedDisplay} — à
          quelques minutes en voiture.
        </p>
      </div>
    </section>
  );
}
