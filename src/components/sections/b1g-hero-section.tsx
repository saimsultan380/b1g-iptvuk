"use client";

import React from "react";
import { B1GHeroContent, B1GHeroCTAs } from "./b1g-hero-content";
import { B1GHeroMockup } from "./b1g-hero-mockup";
import { B1GTrustRow } from "./b1g-trust-row";
import { FadeIn } from "@/components/animation/fade-in";

export function B1GHeroSection() {
  return (
    <div className="relative bg-white text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Title excluded from FadeIn — body/CTAs animate */}
            <B1GHeroContent showFullBodyCopy={true} />

            <FadeIn delay={0.08} className="mt-8 w-full">
              <B1GHeroCTAs />
            </FadeIn>

            <FadeIn delay={0.12} className="mt-10 w-full max-w-xl">
              <B1GTrustRow />
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.08}>
              <B1GHeroMockup />
            </FadeIn>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          <div className="w-full">
            <B1GHeroContent showFullBodyCopy={true} />
          </div>

          <FadeIn delay={0.04} className="w-full my-2">
            <B1GHeroMockup />
          </FadeIn>

          <FadeIn delay={0.08} className="w-full">
            <B1GHeroCTAs />
          </FadeIn>

          <FadeIn delay={0.12} className="w-full mt-2">
            <B1GTrustRow />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
