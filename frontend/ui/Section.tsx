import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("bg-background py-20 md:py-28", className)}
      {...props}
    />
  );
}
