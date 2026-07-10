import { faq } from "@/lib/data";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-night-border/50 bg-night-soft py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="section-kicker">Questions fréquentes</p>
          <h2 className="section-title">Foire aux questions</h2>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-night-border bg-night-card p-5 shadow-card open:border-ember/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-cream marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-ember transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-cream/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
