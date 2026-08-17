"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import { ROUTES, buildPlanWhatsAppUrl } from "@/lib/seo";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  ctaText: string;
  features: string[];
  recommended?: boolean;
}

const sharedFeatures = [
  "One active connection",
  "35,000+ live television channels",
  "50,000+ movies",
  "10,000+ television series",
  "Sports and entertainment categories",
  "HD, Full HD and 4K where supported",
  "Electronic Programme Guide (EPG) where available",
  "Catch-Up where available",
  "Official B1G Player app access",
  "Instant account activation",
  "UK customer support",
];

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    price: "£10",
    period: "total",
    description: "A flexible option for customers who prefer short-term access.",
    ctaText: "Choose 1 Month",
    features: ["Access period: 1 month", ...sharedFeatures],
  },
  {
    id: "3-months",
    name: "3 Months",
    price: "£20",
    period: "total",
    description: "A practical choice for customers who want greater value without making a long-term commitment.",
    ctaText: "Choose 3 Months",
    features: ["Access period: 3 months", ...sharedFeatures],
  },
  {
    id: "6-months",
    name: "6 Months",
    price: "£30",
    period: "total",
    description: "A better-value option for regular viewers who want six months of uninterrupted account access.",
    ctaText: "Choose 6 Months",
    features: ["Access period: 6 months", ...sharedFeatures],
  },
  {
    id: "12-months",
    name: "12 Months + 1 Month Free",
    price: "£45",
    period: "total",
    description: "Our best long-term value, providing a full year of access plus one additional month at no extra cost.",
    ctaText: "Choose Annual Plan",
    recommended: true,
    features: ["Access period: 13 months in total — 12 months plus 1 month free", ...sharedFeatures],
  },
];

const NormalTick = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] mt-0.5">
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const RecommendedTick = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E01E26] text-white mt-0.5">
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export function B1GPricing() {
  return (
    <section id="pricing" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Choose Your{" "}
            <span className="text-brand-gradient font-bold">B1G IPTV Subscription</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              Every standard plan includes one active connection, private login details, the same core catalogue and setup guidance. The main difference is the subscription duration and effective monthly cost.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full mb-10">
            {pricingPlans.map((plan, i) => (
              <TelvisCard
                key={plan.id}
                index={i}
                className={`rounded-[12px] border bg-white p-6 flex flex-col justify-between h-full relative transition-all duration-200 ${
                  plan.recommended ? "border-[#E01E26]" : "border-slate-200"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#E01E26] text-[#E01E26] px-3.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none">
                    Recommended
                  </span>
                )}

                <div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[10px] mb-4 shrink-0 ${
                      plan.recommended ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <Calendar className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#12141F] mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 font-semibold leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span
                      className={`font-heading text-[42px] leading-none sm:text-4xl font-extrabold tracking-tight ${
                        plan.recommended ? "text-[#E01E26]" : "text-[#12141F]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="font-heading text-[10px] sm:text-[11px] font-semibold text-slate-400 ml-1.5">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        {plan.recommended ? <RecommendedTick /> : <NormalTick />}
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={buildPlanWhatsAppUrl(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="primary"
                      className="w-full justify-between rounded-[12px] font-bold text-xs py-3 px-4 flex items-center bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white hover:opacity-95 border-0"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
                    </Button>
                  </a>
                </div>
              </TelvisCard>
            ))}
          </div>

        <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col gap-4">
            <FadeIn>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                All prices displayed above are total package prices, not recurring monthly charges. Every B1G IPTV Subscription includes the same catalogue, app access and core service features. Only the subscription duration and total price change.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mt-3">
                One active stream is included unless your order states otherwise. HD, Full HD and 4K quality, EPG information and Catch-Up availability can vary according to the selected channel, programme, device and internet connection. Any separate fee charged by an optional third-party player or app store is not included in the subscription price.
              </p>
            </FadeIn>
            <Link href={ROUTES.subscription} className="shrink-0 w-full md:w-auto self-start">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
              >
                <span>Compare all B1G IPTV subscription plans</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
      </div>
    </section>
  );
}
