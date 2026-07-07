import { cn } from "@/lib/utils";

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

export default function Text({ className, ...props }: TextProps) {
  return (
    <p
      className={cn("text-body leading-relaxed text-text-secondary", className)}
      {...props}
    />
  );
}
