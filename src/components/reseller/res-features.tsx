"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Layout } from "lucide-react";

const panelItems = [
  "Customer-account creation",
  "Plan and duration selection",
  "Connection assignment",
  "Account extension",
  "Expiry information",
  "Credit balance",
  "Account disabling",
  "Activation history",
  "Customer-login generation",
];

export function ResFeatures() {
  return (
    <section id="panel-includes" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What the Panel <span className="text-brand-gradient font-bold">May Include</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Layout className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Panel tools
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {panelItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              The current demonstration and reseller agreement take priority over general website descriptions.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
