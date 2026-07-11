import { site } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";
import PhoneLink from "@/components/PhoneLink";

const navLinks = [
  { href: "#carte", label: "La carte" },
  { href: "#avis", label: "Avis" },
  { href: "#horaires", label: "Horaires" },
  { href: "#localisation", label: "Nous trouver" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-line/70 bg-ink/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a
          href="#accueil"
          className="font-display text-2xl uppercase tracking-widest text-gold"
        >
          Chikano
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-bone/75 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <PhoneLink className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright">
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Appeler</span>
        </PhoneLink>
      </div>
    </header>
  );
}
