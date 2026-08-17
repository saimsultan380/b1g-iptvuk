"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TELVIS_EASE = [0.22, 1, 0.36, 1] as const;

export const TELVIS_VIEWPORT = {
  once: true,
  amount: 0.14,
  margin: "0px 0px -3% 0px",
} as const;

const REVEAL_CLASS = "telvis-motion-reveal";

export const sectionPresets = {
  text: { y: 22, blur: 8, duration: 0.62 },
  cta: { y: 16, blur: 6, duration: 0.52 },
  media: { y: 28, blur: 10, duration: 0.68 },
} as const;

export type SectionPreset = keyof typeof sectionPresets;

const TelvisParentContext = createContext(false);

export function useTelvisParent() {
  return useContext(TelvisParentContext);
}

function sectionVariants(preset: SectionPreset) {
  const { y, blur, duration } = sectionPresets[preset];
  return {
    hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: TELVIS_EASE,
      },
    }),
  };
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span";
};

export function TelvisReveal({
  children,
  className,
  delay = 0,
  preset = "text",
  as = "div",
}: RevealProps & { preset?: SectionPreset }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = as === "span" ? motion.span : as === "section" ? motion.section : motion.div;

  if (shouldReduceMotion) {
    const StaticTag = as === "span" ? "span" : as === "section" ? "section" : "div";
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <TelvisParentContext.Provider value={true}>
      <MotionTag
        className={cn(REVEAL_CLASS, className)}
        variants={sectionVariants(preset)}
        initial="hidden"
        whileInView="visible"
        viewport={TELVIS_VIEWPORT}
        custom={delay}
      >
        {children}
      </MotionTag>
    </TelvisParentContext.Provider>
  );
}

type TelvisCardProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
} & (
  | ({ as?: "div" } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export function TelvisCard({
  children,
  className,
  index = 0,
  as = "div",
  ...rest
}: TelvisCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = {
    className: cn(REVEAL_CLASS, className),
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: TELVIS_VIEWPORT,
    transition: {
      duration: 0.56,
      delay: index * 0.05,
      ease: TELVIS_EASE,
    },
  };

  if (shouldReduceMotion) {
    if (as === "button") {
      return (
        <button className={className} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
          {children}
        </button>
      );
    }
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <TelvisParentContext.Provider value={true}>
      {as === "button" ? (
        <motion.button
          {...motionProps}
          {...(rest as React.ComponentPropsWithoutRef<typeof motion.button>)}
        >
          {children}
        </motion.button>
      ) : (
        <motion.div
          {...motionProps}
          {...(rest as React.ComponentPropsWithoutRef<typeof motion.div>)}
        >
          {children}
        </motion.div>
      )}
    </TelvisParentContext.Provider>
  );
}

export function TelvisHero({
  children,
  className,
  delay = 0,
  cta = false,
}: RevealProps & { cta?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <TelvisParentContext.Provider value={true}>
      <motion.div
        className={cn(REVEAL_CLASS, className)}
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: cta ? 0.52 : 0.72,
          delay,
          ease: TELVIS_EASE,
        }}
      >
        {children}
      </motion.div>
    </TelvisParentContext.Provider>
  );
}

export const heroTitleLine = {
  hidden: { y: "112%", skewY: 7, opacity: 0, filter: "blur(10px)" },
  visible: (index: number) => ({
    y: "0%",
    skewY: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      delay: 0.12 + index * 0.1,
      ease: TELVIS_EASE,
    },
  }),
};

export function TelvisHeroTitleLine({
  children,
  index,
  className,
  trigger = "mount",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
  trigger?: "mount" | "inView";
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={cn("block", className)}>{children}</span>;
  }

  return (
    <span className="block overflow-hidden py-[0.06em] -my-[0.06em]">
      <motion.span
        className={cn(REVEAL_CLASS, "block origin-left", className)}
        variants={heroTitleLine}
        initial="hidden"
        animate={trigger === "mount" ? "visible" : undefined}
        whileInView={trigger === "inView" ? "visible" : undefined}
        viewport={trigger === "inView" ? TELVIS_VIEWPORT : undefined}
        custom={index}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function TelvisNativeButton({
  children,
  className,
  kind = "cta",
  index = 0,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "cta" | "card" | "hero";
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const nested = useTelvisParent();

  if (shouldReduceMotion || nested) {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }

  if (kind === "hero") {
    return (
      <motion.button
        className={cn(REVEAL_CLASS, className)}
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.52, ease: TELVIS_EASE }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }

  if (kind === "card") {
    return (
      <motion.button
        className={cn(REVEAL_CLASS, className)}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={TELVIS_VIEWPORT}
        transition={{ duration: 0.56, delay: index * 0.05, ease: TELVIS_EASE }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }

  const { y, blur, duration } = sectionPresets.cta;
  return (
    <motion.button
      className={cn(REVEAL_CLASS, className)}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={TELVIS_VIEWPORT}
      transition={{ duration, ease: TELVIS_EASE }}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}

export function telvisButtonMotion(args: {
  reduced: boolean | null;
  nested: boolean;
  hero?: boolean;
}) {
  if (args.reduced || args.nested) {
    return {
      className: "",
      props: {} as Record<string, unknown>,
    };
  }

  if (args.hero) {
    return {
      className: REVEAL_CLASS,
      props: {
        initial: { opacity: 0, y: 18, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.52, ease: TELVIS_EASE },
      },
    };
  }

  const { y, blur, duration } = sectionPresets.cta;
  return {
    className: REVEAL_CLASS,
    props: {
      initial: { opacity: 0, y, filter: `blur(${blur}px)` },
      whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
      viewport: TELVIS_VIEWPORT,
      transition: { duration, ease: TELVIS_EASE },
    },
  };
}
