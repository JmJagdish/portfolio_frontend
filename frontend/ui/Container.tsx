import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 mt-16 flex flex-col items-center text-center",
        className,
      )}
      {...props}
    />
  );
}
