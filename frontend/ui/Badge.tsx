import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        border border-border
        bg-card
        px-4
        py-2
        text-small
        font-medium
        text-text-primary
        `,
        className,
      )}
      {...props}
    />
  );
}
