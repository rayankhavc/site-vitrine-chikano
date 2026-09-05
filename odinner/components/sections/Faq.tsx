import { faq } from "@/lib/data";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-coal-line/60 bg-coal py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">Bon à savoir</p>
          <h2 className="h-section">Questions fréquentes</h2>
        </div>

        <div className="mx-auto max-w-2xl space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group plate p-5 open:ring-red-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-bone marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-xl text-red transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-bone/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
