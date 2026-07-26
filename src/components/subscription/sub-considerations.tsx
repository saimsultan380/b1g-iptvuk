"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { HelpCircle } from "lucide-react";

const considerationsList = [
  "Subscription duration",
  "Price",
  "Supported devices",
  "Required login method",
  "Available entertainment categories",
  "Internet connection",
  "Renewal preference",
  "Trial availability",
  "Support requirements",
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

export function SubConsiderations() {
  return (
    <section
      id="considerations"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column (Headers & Copy text) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
                Choose a Subscription That{" "}
                <span className="text-brand-gradient font-bold">Fits Your Viewing</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                The right plan depends on how long you want access and how regularly you expect to use the service.
              </p>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                <p className="p-4 rounded-xl border border-slate-100 bg-slate-50/30">
                  A monthly plan gives you greater flexibility.
                </p>
                <p className="p-4 rounded-xl border border-slate-100 bg-slate-50/30">
                  A longer subscription provides a lower average monthly cost and reduces the need to renew frequently.
                </p>
                <p className="p-4 rounded-xl border border-slate-100 bg-slate-50/30">
                  Each current package provides the same main service categories unless the pricing information states otherwise.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Consideration checklist card, no shadow) */}
          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <HelpCircle className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Before ordering, consider:
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {considerationsList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
