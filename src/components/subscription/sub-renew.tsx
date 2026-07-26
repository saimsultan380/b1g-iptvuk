"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { RefreshCw } from "lucide-react";

const renewCheckList = [
  "Confirm the current plan.",
  "Check the current price.",
  "Confirm whether the username remains the same.",
  "Ask whether the server URL has changed.",
  "Keep the app installed.",
  "Do not create a second account unless instructed.",
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

export function SubRenew() {
  return (
    <section
      id="renewal"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Renewing Your <span className="text-brand-gradient font-bold">Subscription</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Contact support before the account expires when you want to continue using the service. A renewal extends access for the selected duration.
          </p>
        </FadeIn>

        {/* Card box with border and no shadow */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <RefreshCw className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  When renewing:
                </h3>
              </div>

              {/* 2-Column Grid on desktop for checklist */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
                {renewCheckList.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-5 mt-8">
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Ensure timely contact prior to expiration to maintain uninterrupted stream compilation services.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
