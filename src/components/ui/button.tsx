"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { telvisButtonMotion, useTelvisParent } from "@/components/animation/telvis-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-semibold tracking-tight transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white shine-effect",
        secondary:
          "bg-slate-100 text-slate-900 border border-slate-200",
        outline:
          "border-2 border-[#E01E26] bg-white text-[#12141F]",
        ghost:
          "text-slate-700 hover:text-slate-950",
      },
      size: {
        default: "h-11 px-5 py-2.5 rounded-[12px]",
        sm: "h-9 px-3.5 py-1.5 text-xs rounded-[12px]",
        lg: "h-13 px-6 py-3 text-base rounded-[12px]",
        icon: "h-10 w-10 p-0 rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  enableShine?: boolean;
  /** Hero mount CTA uses 0.52s; scroll CTAs use the cta preset. */
  reveal?: "cta" | "hero" | "none";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      enableShine = true,
      reveal = "cta",
      children,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const nested = useTelvisParent();

    const isPrimary = variant === "primary" || !variant;
    const showShine = isPrimary && enableShine;

    const revealMotion = telvisButtonMotion({
      reduced: shouldReduceMotion,
      nested: nested || reveal === "none",
      hero: reveal === "hero",
    });

    return (
      <motion.button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          showShine && !shouldReduceMotion ? "shine-effect" : "",
          revealMotion.className,
          className
        )}
        {...revealMotion.props}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
