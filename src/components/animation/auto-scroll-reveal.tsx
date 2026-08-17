"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TelvisCard, TelvisReveal } from "@/components/animation/telvis-motion";

interface AutoScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
  yOffset?: number;
  duration?: number;
  asCards?: boolean;
}

export function AutoScrollReveal({
  children,
  className,
  asCards = true,
}: AutoScrollRevealProps) {
  if (!asCards) {
    return <TelvisReveal className={className}>{children}</TelvisReveal>;
  }

  return (
    <div className={cn(className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <TelvisCard key={child.key ?? index} index={index} className="h-full">
            {child}
          </TelvisCard>
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
  index?: number;
}

export function ScrollRevealItem({
  children,
  className,
  index = 0,
}: ScrollRevealItemProps) {
  return (
    <TelvisCard className={className} index={index}>
      {children}
    </TelvisCard>
  );
}
