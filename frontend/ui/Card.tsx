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
        transition-all
        duration-300
        shadow-[0_20px_50px_rgba(0,168,232,0.25)]
        `,
        className,
      )}
      {...props}
    />
  );
}
