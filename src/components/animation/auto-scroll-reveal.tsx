"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AutoScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
  yOffset?: number;
  duration?: number;
}

/**
 * Staggers children via global data-reveal (fast CSS, scroll up + down).
 */
export function AutoScrollReveal({
  children,
  className,
  staggerChildren = 0.04,
  delay = 0,
}: AutoScrollRevealProps) {
  return (
    <div className={cn(className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const ms = Math.round((delay + index * staggerChildren) * 1000);
        const delayAttr =
          ms <= 0 ? undefined :
          ms <= 40 ? "40" :
          ms <= 80 ? "80" :
          ms <= 120 ? "120" :
          ms <= 160 ? "160" :
          "200";

        return (
          <div
            data-reveal
            {...(delayAttr ? { "data-delay": delayAttr } : {})}
            className="transform-gpu"
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

interface ScrollRevealItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export function ScrollRevealItem({
  children,
  className,
  delay = 0,
}: ScrollRevealItemProps) {
  const ms = Math.round(delay * 1000);
  const delayAttr =
    ms <= 0 ? undefined :
    ms <= 40 ? "40" :
    ms <= 80 ? "80" :
    ms <= 120 ? "120" :
    ms <= 160 ? "160" :
    "200";

  return (
    <div
      data-reveal
      {...(delayAttr ? { "data-delay": delayAttr } : {})}
      className={cn("transform-gpu", className)}
    >
      {children}
    </div>
  );
}
