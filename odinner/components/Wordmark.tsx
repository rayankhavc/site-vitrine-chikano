import Image from "next/image";
import { photos } from "@/lib/data";

/**
 * Signature de marque : le logo reel de la fiche Google + le nom ecrit
 * dans une cursive proche de celle du logo ("Dinner").
 */
export default function Wordmark({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  // Le logo est un badge circulaire tres detaille : en dessous de ~40px il
  // devient illisible. Dans la barre de navigation on garde donc la seule
  // cursive, qui reste identifiable a petite taille.
  const showMark = size === "md";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {showMark ? (
        <span className="relative h-11 w-11 shrink-0">
          <Image
            src={photos.logo}
            alt=""
            fill
            sizes="44px"
            className="object-contain"
          />
        </span>
      ) : null}
      <span
        className={`font-script leading-none text-red ${
          size === "sm" ? "text-2xl" : "text-3xl"
        }`}
      >
        O&apos;dinner
      </span>
    </span>
  );
}
