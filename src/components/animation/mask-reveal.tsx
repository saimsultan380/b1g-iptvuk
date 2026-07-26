"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type MaskRevealPart = {
  text: string;
  className?: string;
};

interface MaskRevealProps {
  /** Plain text — split into words for the skew mask reveal */
  text?: string;
  /** Styled segments (e.g. brand gradient words) — each segment is split into words */
  parts?: MaskRevealPart[];
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: React.ElementType;
  /** `mount` for hero titles (load-in); `inView` for scroll sections */
  trigger?: "mount" | "inView";
}

type WordToken = {
  word: string;
  className?: string;
};

function toWords(text: string, className?: string): WordToken[] {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => ({ word, className }));
}

export function MaskReveal({
  text,
  parts,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.05,
  duration = 0.85,
  as: Component = "h1",
  trigger = "inView",
}: MaskRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const words: WordToken[] = parts?.length
    ? parts.flatMap((part) => toWords(part.text, part.className))
    : toWords(text ?? "");

  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "100%",
      skewY: shouldReduceMotion ? 0 : 8,
      opacity: 0,
    },
    visible: {
      y: "0%",
      skewY: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: easeCurve,
      },
    },
  };

  const motionProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true },
        };

  return (
    <Component
      className={cn(
        "flex w-full flex-wrap gap-x-[0.25em] gap-y-[0.1em]",
        className,
      )}
      data-no-reveal
    >
      <motion.span
        {...motionProps}
        variants={containerVariants}
        className="contents"
      >
        {words.map((token, index) => (
          <span
            key={`${token.word}-${index}`}
            className="inline-block overflow-hidden py-[0.05em] px-[0.02em] -my-[0.05em] -mx-[0.02em]"
          >
            <motion.span
              variants={wordVariants}
              className={cn(
                "inline-block origin-bottom-left transform-gpu",
                wordClassName,
                token.className,
              )}
            >
              {token.word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
