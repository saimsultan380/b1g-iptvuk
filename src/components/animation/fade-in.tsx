"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  yOffset?: number;
}

/**
 * Layout wrapper only. Scroll animation is handled globally by ScrollReveal
 * via [data-reveal] on headings, cards, list items, buttons, and paragraphs.
 * Keeping this free of opacity avoids nested reveals being swallowed.
 */
export function FadeIn({ children, className }: FadeInProps) {
  return <div className={cn(className)}>{children}</div>;
}
