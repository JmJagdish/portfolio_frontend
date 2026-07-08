import Link from "next/link";
import { cn } from "@/lib/utils";

type SocialIconProps = {
  href: string;
  icon: React.ElementType;
  label: string;
  iconClassName?: string;
};

export default function SocialIcon({
  href,
  icon: Icon,
  label,
  iconClassName,
}: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full",
        "border border-border/70",
        "bg-background/60 backdrop-blur-xl",
        "hover:bg-background/80",
        "shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "hover:shadow-[0_0_25px_rgba(34,211,238,0.30)]",
      )}
    >
      {/* Glow */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-primary/10
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <Icon
        size={18}
        className={cn(
          "relative z-10 text-text-primary transition-all duration-300",
          "group-hover:scale-110 group-hover:text-primary",
          iconClassName,
        )}
      />
    </Link>
  );
}
