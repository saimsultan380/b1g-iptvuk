"use client";

import React from "react";
import { TelvisHero, TelvisReveal, type SectionPreset } from "@/components/animation/telvis-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  yOffset?: number;
  /** mount = hero load-in; inView = scroll sections */
  trigger?: "mount" | "inView";
  preset?: SectionPreset | "hero" | "heroCta";
}

/**
 * Telvis blur-reveal: hero mount or scroll-in section animation.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  trigger = "inView",
  preset,
}: FadeInProps) {
  if (trigger === "mount" || preset === "hero" || preset === "heroCta") {
    return (
      <TelvisHero className={className} delay={delay} cta={preset === "heroCta"}>
        {children}
      </TelvisHero>
    );
  }

  const sectionPreset: SectionPreset =
    preset === "cta" || preset === "media" || preset === "text" ? preset : "text";

  return (
    <TelvisReveal className={className} delay={delay} preset={sectionPreset}>
      {children}
    </TelvisReveal>
  );
}
