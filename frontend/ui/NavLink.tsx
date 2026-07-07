import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof Link>;

export default function NavLink({
  href,
  children,
  className,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        `
        text-text-primary
        transition-colors
        duration-300
        hover:text-primary
        `,
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
