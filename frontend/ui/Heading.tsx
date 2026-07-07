import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export default function Heading({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        `
        font-heading
        text-heading-md
        font-bold
        text-text-primary
        `,
        className,
      )}
      {...props}
    />
  );
}
