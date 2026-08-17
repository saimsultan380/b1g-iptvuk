"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TelvisHeroTitleLine } from "@/components/animation/telvis-motion";

export type MaskRevealPart = {
  text: string;
  className?: string;
};

interface MaskRevealProps {
  text?: string;
  /** Each part is one title line */
  parts?: MaskRevealPart[];
  /** Mixed-style segments grouped into title lines */
  lines?: MaskRevealPart[][];
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: React.ElementType;
  trigger?: "mount" | "inView";
}

export function MaskReveal({
  text,
  parts,
  lines,
  className,
  as: Component = "h1",
  trigger = "inView",
}: MaskRevealProps) {
  const resolvedLines: MaskRevealPart[][] = lines?.length
    ? lines
    : parts?.length
      ? parts.map((part) => [part])
      : [[{ text: text ?? "" }]];

  return (
    <Component className={cn("w-full", className)} data-no-reveal>
      <span className="flex w-full flex-col items-start">
        {resolvedLines.map((segments, index) => (
          <TelvisHeroTitleLine key={`${segments.map((s) => s.text).join("")}-${index}`} index={index} trigger={trigger}>
            {segments.map((segment) => (
              <span key={`${segment.text}-${segment.className ?? ""}`} className={segment.className}>
                {segment.text}
              </span>
            ))}
          </TelvisHeroTitleLine>
        ))}
      </span>
    </Component>
  );
}
