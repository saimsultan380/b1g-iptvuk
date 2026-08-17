"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight } from "lucide-react";
import { buildPlanWhatsAppUrl } from "@/lib/seo";

const plans = [
  {
    name: "One Month — £10",
    price: "£10",
    shortName: "1 Month",
    description: "The shortest paid option for customers who prefer flexibility.",
    cta: "Choose One Month",
  },
  {
    name: "Three Months — £20",
    price: "£20",
    shortName: "3 Months",
    description: "A shorter multi-month option with a lower effective cost.",
    cta: "Choose Three Months",
  },
  {
    name: "Six Months — £30",
    price: "£30",
    shortName: "6 Months",
    description: "Suitable for regular customers who have already checked compatibility.",
    cta: "Choose Six Months",
  },
  {
    name: "Twelve Months Plus One Month Free — £45",
    price: "£45",
    shortName: "Annual Plan",
    description: "The lowest effective monthly cost, providing thirteen months of account access.",
    cta: "Choose the Annual Plan",
    recommended: true,
  },
];

export function SubPricing() {
  return (
    <section id="pricing-plans" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Choose a <span className="text-brand-gradient font-bold">Duration</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 items-stretch">
            {plans.map((plan, index) => (
              <TelvisCard
                key={plan.name}
                index={index}
                className={`rounded-[12px] border bg-white p-5 sm:p-6 lg:p-5 xl:p-6 flex min-w-0 flex-col justify-between ${
                  plan.recommended ? "border-[#E01E26]" : "border-slate-200"
                }`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] mb-4 bg-red-50 text-[#E01E26]">
                    <Calendar className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-[15px] xl:text-base font-bold text-[#12141F] mb-2 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
                    {plan.description}
                  </p>
                </div>
                <a
                  href={buildPlanWhatsAppUrl(plan.shortName, plan.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    className="w-full justify-between rounded-[12px] font-bold text-[11px] sm:text-xs py-3 px-3 xl:px-4 flex items-center gap-2 bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white"
                  >
                    <span className="text-left leading-tight">{plan.cta}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
                  </Button>
                </a>
              </TelvisCard>
            ))}
          </div>
      </div>
    </section>
  );
}
