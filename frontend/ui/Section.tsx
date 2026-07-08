import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("bg-background w-[98%]", className)}
      {...props}
    />
  );
}
