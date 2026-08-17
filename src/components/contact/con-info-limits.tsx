"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { ClipboardList, AlertCircle } from "lucide-react";

const infoItems = [
  "Device manufacturer and model",
  "Operating system",
  "Current player",
  "Country",
  "Number of connections required",
  "Preferred contact method",
  "What you want to test",
];

const notGuaranteed = [
  "Permanent availability of every item",
  "Universal 4K",
  "Interruption-free internet delivery",
  "Continued access after expiry",
  "Permission to share or redistribute access",
  "Unlimited simultaneous connections",
];

export function ConInfoLimits() {
  return (
    <>
      <section id="information-to-provide" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Information to <span className="text-brand-gradient font-bold">Provide</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <ClipboardList className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Include these details
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {infoItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-100 pt-4 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
                <p className="text-xs sm:text-sm text-[#E01E26] font-semibold leading-relaxed">
                  Never post login details publicly.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="trial-limits" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              What a Trial Does{" "}
              <span className="text-brand-gradient font-bold">Not Guarantee</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">A trial does not guarantee:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {notGuaranteed.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
