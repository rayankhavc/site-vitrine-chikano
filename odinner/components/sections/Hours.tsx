import { openingHours, formatSlot, hoursSummary, site } from "@/lib/data";
import { ClockIcon, PhoneIcon } from "@/components/icons";
import PhoneLink from "@/components/PhoneLink";

export default function Hours() {
  return (
    <section id="horaires" className="border-t border-coal-line/60 bg-coal py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">On vous attend</p>
          <h2 className="h-section">Horaires</h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
            <ClockIcon className="h-4 w-4" />
            {hoursSummary}
          </p>
        </div>

        <div className="plate mx-auto max-w-xl overflow-hidden">
          <ul className="divide-y divide-coal-line/60">
            {openingHours.map((entry) => {
              const eveningOnly = entry.slots.length === 1;
              return (
                <li
                  key={entry.day}
                  className="flex items-center justify-between gap-4 px-6 py-3.5"
                >
                  <span className="font-semibold text-bone">{entry.day}</span>
                  {entry.slots.length === 0 ? (
                    <span className="text-bone/50">Fermé</span>
                  ) : (
                    <span className="flex flex-col items-end gap-0.5 text-right sm:flex-row sm:items-center sm:gap-3">
                      {entry.slots.map((slot) => (
                        <span
                          key={slot.open}
                          className={
                            eveningOnly
                              ? "font-semibold text-red"
                              : "text-bone/80"
                          }
                        >
                          {formatSlot(slot)}
                        </span>
                      ))}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-bone/60">
          Le lundi et le vendredi, le restaurant ouvre uniquement le soir. Un
          doute sur un créneau ? Appelez le{" "}
          <PhoneLink className="inline-flex items-center gap-1 font-semibold text-red hover:underline">
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phoneDisplay}
          </PhoneLink>
        </p>
      </div>
    </section>
  );
}
