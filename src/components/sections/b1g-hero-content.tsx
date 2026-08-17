"use client";

import React from "react";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, Calendar } from "lucide-react";
import { buildIntentWhatsAppUrl, ROUTES } from "@/lib/seo";
import Link from "next/link";

interface B1GHeroContentProps {
  showFullBodyCopy?: boolean;
}

export function B1GHeroContent({ showFullBodyCopy = true }: B1GHeroContentProps) {
  return (
    <div className="flex flex-col items-start text-left w-full">
      <div className="w-full" data-no-reveal>
        <MaskReveal
          trigger="mount"
          as="h1"
          className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
          lines={[
            [
              { text: "B1G Player – " },
              { text: "IPTV App", className: "text-brand-gradient font-bold" },
              { text: " and" },
            ],
            [
              { text: "B1G IPTV Subscription", className: "text-brand-gradient font-bold" },
              { text: " in the UK" },
            ],
          ]}
        />
      </div>

      <FadeIn trigger="mount" className="w-[90%] sm:w-full sm:max-w-xl lg:max-w-[34rem]">
        <div className="mt-3 sm:mt-6 space-y-2 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-[1.5] sm:leading-relaxed">
          <p>
            Install B1G Player on a compatible Firestick, Fire TV or Android device, choose a B1G IPTV Subscription from £10 and receive the private login details and setup guidance needed to get started.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Use one organised interface to explore the available live television, sports, films and TV series, with EPG, selected Catch-Up and SD, HD, Full HD and 4K options where supported by the source, device and connection.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export function B1GHeroCTAs({ className }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-2 sm:gap-4 w-full ${className || ""}`}>
      <Link href={ROUTES.subscription} className="flex-1 sm:flex-initial">
        <Button
          variant="primary"
          size="lg"
          reveal="hero"
          className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-3 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
        >
          <Calendar className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
          <span className="hidden sm:inline">View B1G IPTV Plans</span>
          <span className="inline sm:hidden">View Plans</span>
        </Button>
      </Link>

      <a
        href={buildIntentWhatsAppUrl("freeTrial")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-initial"
      >
        <Button
          variant="outline"
          size="lg"
          reveal="hero"
          className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-3 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
        >
          <Tv className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#E01E26] shrink-0 stroke-[2.5]" />
          <span className="hidden sm:inline">Start Free Trial</span>
          <span className="inline sm:hidden">Free Trial</span>
        </Button>
      </a>
    </div>
  );
}
