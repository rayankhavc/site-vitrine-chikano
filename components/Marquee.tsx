const DEFAULT_ITEMS = [
  "Kebab",
  "Burger",
  "Tacos",
  "Panini",
  "Pain maison",
  "100% bœuf",
  "Fait à la commande",
];

export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  // On duplique la liste pour un defilement continu (translateX -50%)
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-gold py-2.5 select-none">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-display text-lg uppercase tracking-wide text-ink"
          >
            {item}
            <span className="mx-4 text-ink/70" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
