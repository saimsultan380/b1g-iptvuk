"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  /** Delay in seconds before the enter animation starts */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  className?: string;
  once?: boolean;
  /** Vertical offset in px (positive = rises up into place) */
  yOffset?: number;
}

/**
 * Mount fade/slide enter — CSS-only, for hero description & images on load.
 * Does not use scroll observers (avoids blank-until-scroll).
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.45,
  className,
  yOffset = 18,
}: FadeInProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setActive(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <div
      className={cn("hero-enter", active && "hero-enter--active", className)}
      style={
        {
          "--hero-enter-delay": `${Math.round(delay * 1000)}ms`,
          "--hero-enter-duration": `${Math.round(duration * 1000)}ms`,
          "--hero-enter-y": `${yOffset}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
