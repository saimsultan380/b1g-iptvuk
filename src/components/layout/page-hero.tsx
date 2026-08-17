"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MaskReveal, type MaskRevealPart } from "@/components/animation/mask-reveal";

export type PageHeroCta = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

export type PageHeroTrustItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

type PageHeroProps = {
  titleParts: MaskRevealPart[];
  paragraphs: string[];
  primaryCta: PageHeroCta;
  secondaryCta: PageHeroCta;
  trustItems: [PageHeroTrustItem, PageHeroTrustItem, PageHeroTrustItem];
};

function HeroCtaButton({
  cta,
  variant,
}: {
  cta: PageHeroCta;
  variant: "primary" | "outline";
}) {
  const Icon = cta.icon;
  const className =
    variant === "primary"
      ? "w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap shine-effect"
      : "w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap hover:bg-red-50";

  const inner = (
    <Button
      variant={variant === "primary" ? "primary" : "outline"}
      size="lg"
      reveal="hero"
      className={className}
    >
      <Icon
        className={`mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5] ${
          variant === "outline" ? "text-[#E01E26]" : ""
        }`}
      />
      <span>{cta.label}</span>
    </Button>
  );

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
        {inner}
      </a>
    );
  }

  return (
    <Link href={cta.href} className="flex-1 sm:flex-initial">
      {inner}
    </Link>
  );
}

function TrustRow({ items, compact }: { items: PageHeroTrustItem[]; compact?: boolean }) {
  return (
    <div className={`w-full rounded-2xl ${compact ? "" : "sm:rounded-full"} border border-slate-200 bg-white p-3 ${compact ? "" : "sm:p-4"}`}>
      <div className="grid grid-cols-3 divide-x divide-slate-200/90 text-center items-center">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex ${compact ? "flex-col" : "flex-col sm:flex-row"} items-center justify-center gap-1.5 ${compact ? "" : "sm:gap-2"} px-1 ${compact ? "" : "sm:px-4"}`}
            >
              <div className={`flex ${compact ? "h-7 w-7" : "h-7 w-7 sm:h-8 sm:w-8"} shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]`}>
                <Icon className={`${compact ? "h-3.5 w-3.5" : "h-3.5 w-3.5 sm:h-4 sm:w-4"} stroke-[2.5]`} />
              </div>
              <span className={`${compact ? "text-xs" : "text-xs lg:text-sm"} font-semibold text-slate-800 tracking-tight leading-tight`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PageHero({
  titleParts,
  paragraphs,
  primaryCta,
  secondaryCta,
  trustItems,
}: PageHeroProps) {
  return (
    <div className="relative bg-white text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex flex-col items-start text-left w-full">
              <div className="w-full" data-no-reveal>
                <MaskReveal
                  trigger="mount"
                  as="h1"
                  className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                  parts={titleParts}
                />
              </div>
              <FadeIn trigger="mount">
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="mt-8 flex flex-row items-center gap-2 sm:gap-4 w-full">
              <HeroCtaButton cta={primaryCta} variant="primary" />
              <HeroCtaButton cta={secondaryCta} variant="outline" />
            </div>

            <FadeIn trigger="mount" className="mt-10 w-full max-w-xl">
              <TrustRow items={trustItems} />
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          <div className="flex flex-col items-start text-left w-full">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={titleParts}
              />
            </div>
            <FadeIn trigger="mount" className="w-full">
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-black leading-relaxed">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <HeroCtaButton cta={primaryCta} variant="primary" />
            <HeroCtaButton cta={secondaryCta} variant="outline" />
          </div>

          <FadeIn trigger="mount" className="w-full mt-2">
            <TrustRow items={trustItems} compact />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
