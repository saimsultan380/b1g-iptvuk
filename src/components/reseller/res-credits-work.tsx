"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Coins } from "lucide-react";

const creditExplains = [
  "Number of credits",
  "Total price",
  "Credit cost by plan",
  "Connection-related costs",
  "Expiry rules",
  "Transfer rules",
  "Refund treatment",
  "Minimum purchase",
  "Panel-access duration",
  "Support arrangements",
];

export function ResCreditsWork() {
  return (
    <section id="credits" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            How Credits <span className="text-brand-gradient font-bold">Work</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Credits are internal units used to create or extend eligible accounts.
          </p>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Coins className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Before purchase, the reseller offer must explain:
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {creditExplains.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Credit packages and prices are confirmed during the application and demonstration process rather than listed here as a public offer.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
