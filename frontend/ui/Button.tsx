import React from "react";
import { cn } from "../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
};

const Button = ({
  children,
  className,
  loading = false,
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "rounded-full px-7 py-2 cursor-pointer",
        "text-white",
        "bg-linear-to-r from-cyan-400 to-blue-600",
        "border-2",
        "transition-all duration-300",
        "hover:bg-none hover:bg-white",
        "hover:border-2",
        "hover:text-primary",
        "hover:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;