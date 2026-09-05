import { site, areaServedDisplay } from "@/lib/data";
import { PinIcon, RouteIcon, ClockIcon, PhoneIcon } from "@/components/icons";
import MapEmbed from "@/components/MapEmbed";
import PhoneLink from "@/components/PhoneLink";

export default function Location() {
  return (
    <section id="localisation" className="py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">Au cœur du bourg</p>
          <h2 className="h-section">Nous trouver</h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-bone/80">
            <PinIcon className="h-5 w-5 shrink-0 text-red" />
            {site.address.full}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Infos pratiques */}
          <div className="plate flex flex-col justify-center gap-6 p-8">
            <div className="flex gap-4">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <div>
                <h3 className="font-display text-lg uppercase tracking-wide text-bone">
                  Adresse
                </h3>
                <address className="mt-1 not-italic leading-relaxed text-bone/70">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                  <br />
                  Vendée, France
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <div>
                <h3 className="font-display text-lg uppercase tracking-wide text-bone">
                  Sur place & à emporter
                </h3>
                <p className="mt-1 text-bone/70">
                  Stationnement gratuit dans la rue, parking accessible en
                  fauteuil roulant.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <div>
                <h3 className="font-display text-lg uppercase tracking-wide text-bone">
                  Commander
                </h3>
                <p className="mt-1 text-bone/70">
                  Appelez le{" "}
                  <PhoneLink className="font-semibold text-red hover:underline">
                    {site.phoneDisplay}
                  </PhoneLink>{" "}
                  et passez récupérer.
                </p>
              </div>
            </div>
          </div>

          {/* Carte (chargee au clic, sans cookie avant consentement) */}
          <div className="overflow-hidden rounded-2xl border border-coal-line/70">
            <MapEmbed />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            <RouteIcon className="h-5 w-5" />
            Itinéraire
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-bone/60">
          O&apos;dinner régale aussi les gourmands de {areaServedDisplay}, à
          quelques minutes en voiture.
        </p>
      </div>
    </section>
  );
}
