"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Headphones, Users } from "lucide-react";

const upstream = [
  "Panel availability",
  "Credit-balance errors",
  "Confirmed platform faults",
  "Server-side account issues",
];

const resellerHandles = [
  "Customer onboarding",
  "Device setup",
  "Incorrect credentials",
  "Retail refunds",
  "Customer communication",
  "Retail website and payments",
];

export function ResSupport() {
  return (
    <section id="support-split" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Support <span className="text-brand-gradient font-bold">Responsibilities</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Headphones className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Upstream support may cover
                </h3>
              </div>
              <ul className="space-y-2.5">
                {upstream.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Users className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  The reseller normally handles
                </h3>
              </div>
              <ul className="space-y-2.5">
                {resellerHandles.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
            The agreement must define the exact division.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
