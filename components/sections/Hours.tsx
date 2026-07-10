import { openingHours, hoursNote, site } from "@/lib/data";
import { ClockIcon, PhoneIcon } from "@/components/icons";

export default function Hours() {
  return (
    <section id="horaires" className="border-t border-night-border/50 bg-night-soft py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="section-kicker">On vous attend</p>
          <h2 className="section-title">Horaires d&apos;ouverture</h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-sm font-semibold text-ember-soft">
            <ClockIcon className="h-4 w-4" />
            Ouvert dès 17h00
          </p>
        </div>

        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-night-border bg-night-card shadow-card">
          <ul className="divide-y divide-night-border/60">
            {openingHours.map((entry) => (
              <li
                key={entry.day}
                className="flex items-center justify-between px-6 py-3.5"
              >
                <span className="font-semibold text-cream">{entry.day}</span>
                <span
                  className={
                    entry.hours.toLowerCase() === "fermé"
                      ? "font-semibold text-flame"
                      : "text-cream/80"
                  }
                >
                  {entry.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-cream/50">
          {hoursNote}{" "}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1 font-semibold text-ember hover:underline"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
