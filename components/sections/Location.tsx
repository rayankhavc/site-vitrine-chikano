import Image from "next/image";
import { site, areaServedDisplay, photos } from "@/lib/data";
import { PinIcon, RouteIcon } from "@/components/icons";
import MapEmbed from "@/components/MapEmbed";

export default function Location() {
  return (
    <section id="localisation" className="py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">À deux pas de la plage</p>
          <h2 className="h-section">Nous trouver</h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-bone/80">
            <PinIcon className="h-5 w-5 shrink-0 text-gold" />
            {site.address.full}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Devanture reelle */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-line/70">
            <Image
              src={photos.facade}
              alt="Devanture du restaurant Chikano à La Barre-de-Monts"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Carte (chargee au clic, sans cookie avant consentement) */}
          <div className="overflow-hidden rounded-2xl border border-slate-line/70">
            <MapEmbed />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <RouteIcon className="h-5 w-5" />
            Itinéraire
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-bone/60">
          Chikano régale aussi les gourmands de {areaServedDisplay}, à quelques
          minutes en voiture.
        </p>
      </div>
    </section>
  );
}
