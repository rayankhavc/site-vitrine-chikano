import { site } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";

const navLinks = [
  { href: "#carte", label: "La carte" },
  { href: "#avis", label: "Avis" },
  { href: "#horaires", label: "Horaires" },
  { href: "#localisation", label: "Nous trouver" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-night-border/60 bg-night/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#accueil"
          className="font-heading text-xl font-extrabold uppercase tracking-wide"
        >
          Chik<span className="text-ember">a</span>no
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cream/80 transition-colors hover:text-ember"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-flame-gradient px-4 py-2 text-sm font-bold text-white shadow-glow transition-transform active:scale-95"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}
