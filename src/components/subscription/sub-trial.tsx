"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

const trialChecks = [
  "Device compatibility",
  "Application navigation",
  "Channel loading",
  "Available content categories",
  "Picture quality",
  "EPG functionality",
  "General playback performance",
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

export function SubTrial() {
  return (
    <section
      id="free-trial"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Banner container with border and no shadow */}
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#12141F] mb-4">
              Try the Service <span className="text-brand-gradient font-bold">Before Choosing a Longer Plan</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              A trial may be available for customers who want to check:
            </p>

            {/* Checks Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {trialChecks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <p className="text-xs text-[#4A4A4A] leading-relaxed">
                Use the same device and connection that you intend to use after subscribing.
              </p>
              <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                A trial may not include every category or feature found in a full account.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href={buildIntentWhatsAppUrl("freeTrial")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full lg:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full lg:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-4 text-xs sm:text-sm font-semibold shine-effect"
              >
                <span>Request a Trial</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </a>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}
