const DEFAULT_ITEMS = [
  "Kebab",
  "Pizza",
  "Tacos",
  "Burger",
  "Couscous",
  "Panini",
  "Pâtisseries orientales",
  "Halal",
];

export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  // On duplique la liste pour un defilement continu (translateX -50%)
  const loop = [...items, ...items];
  return (
    <div className="select-none overflow-hidden border-y-2 border-ink bg-gradient-to-r from-red-deep via-red to-flame py-2.5">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-display text-lg uppercase tracking-wide text-bone"
          >
            {item}
            <span className="mx-4 text-bone/70" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
