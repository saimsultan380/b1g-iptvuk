"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { RefreshCw } from "lucide-react";

const renewChecks = [
  "Confirm the current price.",
  "Confirm the required duration.",
  "Check whether the username remains the same.",
  "Ask whether the server address has changed.",
  "Keep the existing application installed.",
  "Avoid creating a second account unless instructed.",
];

export function SubRenew() {
  return (
    <section id="renewing" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Renewing Your <span className="text-brand-gradient font-bold">Account</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <RefreshCw className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Before renewal:
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {renewChecks.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Unless automatic renewal is clearly accepted, the account ends at expiry.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
