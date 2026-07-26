"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageSquare, CreditCard, CheckCircle2, ShieldCheck, Settings } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";

export function ConHero() {
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
                    { text: "Contact B1G Player –" },
                    { text: "Trial, Setup", className: "text-brand-gradient font-bold" },
                    { text: "& Support" },
                  ]}
                />
              </div>

              {/* Body Copy */}
              <FadeIn delay={0.22} duration={0.45} yOffset={14}>
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                  <p>
                    Contact the B1G Player team when you want to request a free trial, compare subscription options, install the app, renew an account or apply for reseller access.
                  </p>
                  <p>
                    Include your device type and a clear description of your enquiry so the support team can provide relevant instructions.
                  </p>
                  <p>
                    Assistance is available for B1G IPTV subscription questions, B1G Player installation, login problems, renewals and reseller enquiries.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* CTAs */}
            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                {/* Primary CTA */}
                <Link href="#contact-form" className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap shine-effect"
                  >
                    <MessageSquare className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
                    <span>Send Your Enquiry</span>
                  </Button>
                </Link>

                {/* Secondary CTA */}
                <Link href="/b1g-iptv-subscription" className="flex-1 sm:flex-initial">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap hover:bg-red-50"
                  >
                    <CreditCard className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#E01E26] shrink-0 stroke-[2.5]" />
                    <span>View B1G IPTV Plans</span>
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
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                      Trial Requests
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-4">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                      <Settings className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                      Setup Assistance
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-4">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                      <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                      Reseller Support
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
                  { text: "Contact B1G Player –" },
                  { text: "Trial, Setup", className: "text-brand-gradient font-bold" },
                  { text: "& Support" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-black leading-relaxed">
                <p>
                  Contact the B1G Player team when you want to request a free trial, compare subscription options, install the app, renew an account or apply for reseller access.
                </p>
                <p>
                  Include your device type and a clear description of your enquiry so the support team can provide relevant instructions.
                </p>
                <p>
                  Assistance is available for B1G IPTV subscription questions, B1G Player installation, login problems, renewals and reseller enquiries.
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
              <Link href="#contact-form" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <MessageSquare className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>Send Your Enquiry</span>
                </Button>
              </Link>

              <Link href="/b1g-iptv-subscription" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  <CreditCard className="mr-2 h-4 w-4 text-[#E01E26] shrink-0 stroke-[2.5]" />
                  <span>View B1G IPTV Plans</span>
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
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight leading-tight">
                    Trial Requests
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                    <Settings className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight leading-tight">
                    Setup Help
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                    <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight leading-tight">
                    Resellers
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
