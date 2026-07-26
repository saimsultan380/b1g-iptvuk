"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { KeyRound, ShieldAlert, BadgeInfo, HelpCircle, ArrowRight, Settings } from "lucide-react";

const trialChecks = [
  "Device compatibility",
  "B1G Player navigation",
  "Channel loading speed",
  "Available content categories",
  "EPG functionality",
  "Picture and stream quality",
  "General playback stability",
];

const subExplains = [
  "1, 3, 6, and 12-month durations",
  "Current package pricing",
  "Official B1G Player app access",
  "Supported hardware devices",
  "Client account renewal cycles",
  "Trial status availability",
];

const setupDevices = [
  "Firestick & Fire TV",
  "Android TV & Google TV",
  "Android TV Boxes & tablets",
  "Samsung & LG Smart TVs",
  "Apple TV & iOS Devices",
  "Windows & Mac Computers",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function ConHelpOptions() {
  return (
    <section
      id="help-options"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              Support Areas
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            How Can We <span className="text-brand-gradient font-bold">Help?</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed">
            Contact support for free-trial requests, subscription-plan questions, activations, installation, login issues, renewals, or reseller enquiries. Choose the correct enquiry type on the contact form below.
          </p>
        </FadeIn>

        {/* 3-Column Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
            
            {/* Card 1: Request a Free Trial */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <KeyRound className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                    Request a Free Trial
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  A trial allows you to check:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {trialChecks.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6 pt-4 border-t border-slate-100">
                  Use the same device and internet connection that you intend to use with a paid plan. Trial availability depends on current support demand.
                </p>
              </div>

              <Link href="#contact-form" className="w-full">
                <Button
                  variant="primary"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Request Your Free Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Card 2: Subscription Assistance */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <BadgeInfo className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                    Subscription Help
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  The support team can explain:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {subExplains.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/subscription-plan/" className="w-full">
                <Button
                  variant="outline"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  <span>Compare B1G IPTV Subscription Plans</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-[#E01E26]" />
                </Button>
              </Link>
            </div>

            {/* Card 3: B1G Player Setup Help */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Settings className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                    B1G Player Setup Help
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  Installation support is available for:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {setupDevices.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/installation-guide/" className="w-full">
                <Button
                  variant="outline"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  <span>Follow B1G Player Installation Guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-[#E01E26]" />
                </Button>
              </Link>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
