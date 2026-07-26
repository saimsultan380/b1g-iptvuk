"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Layout, Users, ShieldCheck, Headphones, Calendar } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";

export function ResHero() {
  return (
    <div className="relative bg-white text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      {/* Hero Section Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        
        {/* DESKTOP LAYOUT (lg:grid lg:grid-cols-12) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Left Column (Headline + Paragraphs + CTAs + Trust Row) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex flex-col items-start text-left">
              {/* Main H1 Headline with Skew Reveal — outside FadeIn */}
              <div className="w-full" data-no-reveal>
                <MaskReveal
                  trigger="mount"
                  as="h1"
                  className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                  parts={[
                    { text: "B1G Player Reseller Panel –" },
                    { text: "Manage B1G IPTV", className: "text-brand-gradient font-bold" },
                    { text: "Subscriptions" },
                  ]}
                />
              </div>

              {/* Body Copy */}
              <FadeIn delay={0} duration={0.4}>
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-[#4A4A4A] leading-relaxed">
                  <p>
                    Start or expand your reseller business through the B1G Player Reseller Panel.
                  </p>
                  <p>
                    Create customer accounts, manage credits, monitor subscription durations and provide eligible customers with access to the official app on supported Android and Fire TV devices.
                  </p>
                  <p>
                    The programme is designed for resellers managing B1G IPTV subscriptions for customers across the United Kingdom and other supported markets.
                  </p>
                  <p>
                    Choose a reseller package, receive secure panel access and manage customer accounts through one organised dashboard.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* CTAs */}
            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                {/* Primary CTA */}
                <Link href="#reseller-packages" className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap shine-effect"
                  >
                    <Users className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
                    <span>Become a B1G Player Reseller</span>
                  </Button>
                </Link>

                {/* Secondary CTA */}
                <Link href="#faq" className="flex-1 sm:flex-initial">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap hover:bg-red-50"
                  >
                    <Headphones className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#E01E26] shrink-0 stroke-[2.5]" />
                    <span>Contact the Reseller Team</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Trust Row */}
            <FadeIn delay={0.25} duration={0.4} className="mt-10 w-full max-w-xl">
              <div className="w-full rounded-2xl sm:rounded-full border border-slate-200 bg-white p-3 sm:p-4">
                <div className="grid grid-cols-3 divide-x divide-slate-200/90 text-center items-center">
                  
                  {/* Item 1 */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-4">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                      <Layout className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                      Reseller Dashboard
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-4">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                      Flexible Credits
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-4">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                      <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                      B1G Player Access
                    </span>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (App Preview Mockup Image) — no entrance animation */}
          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg breakpoint, matching Mobile Reference exactly) */}
        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          
          {/* 1. Headline + Body Copy */}
          <div className="flex flex-col items-start text-left w-full">
            {/* Main H1 Headline with Skew Reveal — outside FadeIn */}
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "B1G Player Reseller Panel –" },
                  { text: "Manage B1G IPTV", className: "text-brand-gradient font-bold" },
                  { text: "Subscriptions" },
                ]}
              />
            </div>

            <FadeIn delay={0} duration={0.35} className="w-full">
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                <p>
                  Start or expand your reseller business through the B1G Player Reseller Panel.
                </p>
                <p>
                  Create customer accounts, manage credits, monitor subscription durations and provide eligible customers with access to the official app on supported Android and Fire TV devices.
                </p>
                <p>
                  The programme is designed for resellers managing B1G IPTV subscriptions for customers across the United Kingdom and other supported markets.
                </p>
                <p>
                  Choose a reseller package, receive secure panel access and manage customer accounts through one organised dashboard.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 2. App Preview Mockup Image — visible on load */}
          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>

          {/* 3. Stacked Full-Width CTA Buttons */}
          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <div className="flex flex-col gap-3 w-full">
              <Link href="#reseller-packages" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <Users className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>Become a Reseller</span>
                </Button>
              </Link>

              <Link href="#faq" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  <Headphones className="mr-2 h-4 w-4 text-[#E01E26] shrink-0 stroke-[2.5]" />
                  <span>Contact the Team</span>
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* 4. Compact Trust Row */}
          <FadeIn delay={0.2} duration={0.35} className="w-full mt-2">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-3">
              <div className="grid grid-cols-3 divide-x divide-slate-200/90 text-center items-center">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                    <Layout className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight leading-tight">
                    Dashboard
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                    <Calendar className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight leading-tight">
                    Credits
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                    <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight leading-tight">
                    Player Access
                  </span>
                </div>

              </div>
            </div>
          </FadeIn>

        </div>

      </main>
    </div>
  );
}
