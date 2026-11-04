"use client";

import { forwardRef } from "react";

const variants = {
  primary:
    "bg-gold text-obsidian font-semibold hover:bg-gold-highlight shadow-gold-glow border border-transparent",
  secondary:
    "bg-obsidian-light text-ivory font-medium border border-stone/20 hover:border-gold/40 hover:bg-obsidian-card",
  outline:
    "bg-stone/10 text-ivory font-medium border border-stone/20 hover:bg-stone/20 border-stone/30",
  ghost:
    "bg-transparent text-stone hover:text-ivory hover:bg-stone/10 border border-transparent",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-4 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-6 py-3.5 text-base rounded-lg gap-2",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      icon: Icon,
      iconPosition = "right",
      disabled = false,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {Icon && iconPosition === "left" && (
          <Icon className="w-4 h-4 flex-shrink-0" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === "right" && (
          <Icon className="w-4 h-4 flex-shrink-0" />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
