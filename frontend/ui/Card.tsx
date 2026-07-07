import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border border-border
        bg-card
        shadow-card
        transition-all
        duration-300
        `,
        className,
      )}
      {...props}
    />
  );
}
