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
        <div className="grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start order-1">
            <B1GHeroContent showFullBodyCopy={true} />

            <div className="mt-8 w-full hidden lg:block">
              <B1GHeroCTAs />
            </div>

            <div className="mt-10 w-full max-w-xl hidden lg:block">
              <FadeIn trigger="mount">
                <B1GTrustRow />
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-6 order-2 my-1 lg:my-0">
            <B1GHeroMockup />
          </div>

          <div className="order-3 w-full lg:hidden">
            <B1GHeroCTAs />
          </div>

          <div className="order-4 w-full mt-2 lg:hidden">
            <FadeIn trigger="mount">
              <B1GTrustRow />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
