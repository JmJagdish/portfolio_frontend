import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      loading = false,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          `
          inline-flex
          items-center
          justify-center
          cursor-pointer
          hover:-translate-y-0.5
          hover:scale-105

          rounded-button

          bg-primary
          px-7
          py-2.5

          text-body
          font-semibold
          text-white

          transition-all
          duration-300

          hover:bg-primary/90
          hover:shadow-lg
          shadow-[0_15px_45px_rgba(0,168,232,0.10)]

          active:scale-[0.98]

          disabled:pointer-events-none
          disabled:opacity-50
          `,
          className,
        )}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default React.memo(Button);
