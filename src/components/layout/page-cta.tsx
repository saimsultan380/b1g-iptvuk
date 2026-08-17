"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";

type CtaLink = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

type PageCtaProps = {
  id?: string;
  title: React.ReactNode;
  description: string;
  primary: CtaLink;
  secondary: CtaLink;
};

function CtaButton({ cta, variant }: { cta: CtaLink; variant: "primary" | "outline" }) {
  const Icon = cta.icon;
  const className =
    variant === "primary"
      ? "w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
      : "w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-8 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50";

  const inner = (
    <Button variant={variant === "primary" ? "primary" : "outline"} size="lg" className={className}>
      <Icon className={`mr-2 h-4 w-4 stroke-[2.5] ${variant === "outline" ? "text-[#E01E26]" : ""}`} />
      <span>{cta.label}</span>
    </Button>
  );

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        {inner}
      </a>
    );
  }

  return (
    <Link href={cta.href} className="w-full sm:w-auto">
      {inner}
    </Link>
  );
}

export function PageCta({ id = "cta", title, description, primary, secondary }: PageCtaProps) {
  return (
    <section id={id} className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <FadeIn preset="cta">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] max-w-2xl font-heading mb-4">
              {title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
              {description}
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <CtaButton cta={primary} variant="primary" />
            <CtaButton cta={secondary} variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}
