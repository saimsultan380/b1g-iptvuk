"use client";

import React from "react";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, Calendar } from "lucide-react";

interface B1GHeroContentProps {
  showFullBodyCopy?: boolean;
}

export function B1GHeroContent({ showFullBodyCopy = true }: B1GHeroContentProps) {
  return (
    <div className="flex flex-col items-start text-left w-full">
      {/* Hero title — word-by-word skew mask reveal on load */}
      <div className="w-full" data-no-reveal>
        <MaskReveal
          trigger="mount"
          as="h1"
          className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
          parts={[
            { text: "B1G Player – Official" },
            { text: "IPTV App", className: "text-brand-gradient font-bold" },
            { text: "with" },
            { text: "B1G IPTV", className: "text-brand-gradient font-bold" },
            { text: "Subscription" },
          ]}
        />
      </div>

      {/* Body copy — fade/slide in on load */}
      <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-[90%] sm:w-full sm:max-w-xl lg:max-w-[34rem]">
        <div className="mt-3 sm:mt-6 space-y-2 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-[1.5] sm:leading-relaxed">
          <p>
            Enjoy live television, sports, movies and television series through B1G Player, the official application supplied with every active B1G IPTV subscription.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            The app is designed for compatible Android Smart TVs, Android TV boxes, Amazon Firestick, Fire TV, Android smartphones and tablets. Once your account has been activated, enter the supplied username, password and server information to access the available entertainment through one organised interface.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Every active plan includes secure account access, the official app, fast activation and support for customers across the United Kingdom.
          </p>

          <p className={showFullBodyCopy ? "block" : "hidden sm:block"}>
            Choose a subscription that suits your viewing habits, request a free trial where available or follow the installation guide to set up the app on your preferred device.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export function B1GHeroCTAs({ className }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-2 sm:gap-4 w-full ${className || ""}`}>
      <Button
        variant="primary"
        size="lg"
        className="flex-1 sm:flex-initial rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-3 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
      >
        <Tv className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
        <span className="hidden sm:inline">Start Your Free Trial</span>
        <span className="inline sm:hidden">Start Free Trial</span>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="flex-1 sm:flex-initial rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-3 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
      >
        <Calendar className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#E01E26] shrink-0 stroke-[2.5]" />
        <span className="hidden sm:inline">View B1G IPTV Subscription Plans</span>
        <span className="inline sm:hidden">Subscription Plans</span>
      </Button>
    </div>
  );
}
