import { openingHours, formatRange, hoursSummary, site } from "@/lib/data";
import { ClockIcon, PhoneIcon } from "@/components/icons";
import PhoneLink from "@/components/PhoneLink";

export default function Hours() {
  return (
    <section id="horaires" className="border-t border-slate-line/60 bg-slate py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">On vous attend</p>
          <h2 className="h-section">Horaires</h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
            <ClockIcon className="h-4 w-4" />
            {hoursSummary}
          </p>
        </div>

        <div className="mx-auto max-w-xl overflow-hidden plate">
          <ul className="divide-y divide-slate-line/60">
            {openingHours.map((entry) => {
              const isFriday = entry.day === "Vendredi";
              return (
                <li
                  key={entry.day}
                  className="flex items-center justify-between px-6 py-3.5"
                >
                  <span className="font-semibold text-bone">{entry.day}</span>
                  <span
                    className={
                      isFriday ? "font-semibold text-gold" : "text-bone/80"
                    }
                  >
                    {formatRange(entry)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-bone/60">
          Un doute sur un créneau ? Appelez le{" "}
          <PhoneLink className="inline-flex items-center gap-1 font-semibold text-gold hover:underline">
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phoneDisplay}
          </PhoneLink>
        </p>
      </div>
    </section>
  );
}
