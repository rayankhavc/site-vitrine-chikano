import { StarIcon } from "@/components/icons";

export default function Stars({
  count = 5,
  className = "h-4 w-4",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-0.5 text-ember" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </div>
  );
}
