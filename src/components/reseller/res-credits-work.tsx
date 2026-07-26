"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Coins, AlertCircle } from "lucide-react";

const purchaseChecks = [
  "Credit quantity",
  "Package price",
  "Credit expiry rules",
  "Trial-credit rules",
  "Renewal-credit cost",
  "Connection charges",
  "Minimum top-up limit",
  "Refund policy terms",
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

export function ResCreditsWork() {
  return (
    <section
      id="credits-work"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Card Box Container with Border and no shadow */}
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
          
          <div>
            {/* Header Icon + Title */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Coins className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                How Reseller Credits Work
              </h3>
            </div>

            {/* Split Grid for Copy and Checklist */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Copy explanations) */}
              <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                <p>
                  Each customer account uses a set number of credits.
                </p>
                <p>
                  The amount may depend on: subscription duration, number of connections, account type, and current reseller rules.
                </p>
                <p>
                  For example, a one-month account may use fewer credits than a twelve-month account.
                </p>
              </div>

              {/* Right Column (Checklist of items) */}
              <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                  Before purchasing a package, check:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {purchaseChecks.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom disclaimer */}
          <div className="border-t border-slate-100 pt-5 mt-8 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Monitor the credit balance regularly so new activations are not delayed.
            </p>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}
