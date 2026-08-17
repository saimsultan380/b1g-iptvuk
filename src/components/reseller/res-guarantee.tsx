"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertCircle } from "lucide-react";

export function ResGuarantee() {
  return (
    <section id="no-earnings-guarantee" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            No Earnings <span className="text-brand-gradient font-bold">Guarantee</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="h-5 w-5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
              <div className="space-y-3">
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  Profit depends on demand, lawful marketing, retail pricing, payment costs, refunds, support workload and customer retention.
                </p>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  No particular revenue, margin or customer number is guaranteed.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
