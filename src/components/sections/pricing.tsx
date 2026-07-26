"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";

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

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    price: "£10",
    period: "/mo",
    description: "A flexible option for customers who prefer monthly access.",
    ctaText: "Choose 1 Month",
    features: [
      "1 month of account access",
      "35,000+ live television channels",
      "50,000+ movies",
      "10,000+ television series",
      "Sports and entertainment categories",
      "HD, Full HD and 4K where supported",
      "Electronic Programme Guide",
      "Catch-Up where available",
      "Official app access",
      "Instant activation",
      "UK customer support",
    ],
  },
  {
    id: "3-months",
    name: "3 Month",
    price: "£20",
    period: "/mo",
    description: "Suitable for customers who prefer a shorter commitment.",
    ctaText: "Choose 3 Months",
    features: [
      "3 months of account access",
      "35,000+ live television channels",
      "50,000+ movies",
      "10,000+ television series",
      "Sports and entertainment categories",
      "HD, Full HD and 4K where supported",
      "Electronic Programme Guide",
      "Catch-Up where available",
      "Official app access",
      "Instant activation",
      "UK customer support",
    ],
  },
  {
    id: "6-months",
    name: "6 Month",
    price: "£30",
    period: "/mo",
    description: "A mid-length option for viewers who want a balance between flexibility and value.",
    ctaText: "Choose 6 Months",
    features: [
      "6 months of account access",
      "35,000+ live television channels",
      "50,000+ movies",
      "10,000+ television series",
      "Sports and entertainment categories",
      "HD, Full HD and 4K where supported",
      "Electronic Programme Guide",
      "Catch-Up where available",
      "Official app access",
      "Instant activation",
      "UK customer support",
    ],
  },
  {
    id: "12-months",
    name: "12 Month",
    price: "£45",
    period: "/mo",
    description: "A longer-term option for regular viewers. Includes 1 month free.",
    ctaText: "Choose 12 Months + 1 Month Free",
    recommended: true,
    features: [
      "13 months of account access",
      "35,000+ live television channels",
      "50,000+ movies",
      "10,000+ television series",
      "Sports and entertainment categories",
      "HD, Full HD and 4K where supported",
      "Electronic Programme Guide",
      "Catch-Up where available",
      "Official app access",
      "Instant activation",
      "UK customer support",
    ],
  },
];

const NormalTick = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] mt-0.5">
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const RecommendedTick = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E01E26] text-white mt-0.5">
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export function B1GPricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Official B1G IPTV{" "}
            <span className="text-brand-gradient font-bold">Subscription Plans</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              Choose a plan based on how long you want access and the option that best suits your budget.
            </p>
            <p>
              Every current plan includes access to the B1G Player app on supported devices, secure login information and customer assistance.
            </p>
          </div>
        </FadeIn>

        {/* ── Pricing Cards Grid ── */}
        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.id}
                data-reveal
                data-delay={String(i * 100)}
                className={`rounded-[12px] border bg-white p-6 flex flex-col justify-between h-full relative transition-all duration-200 ${
                  plan.recommended
                    ? "border-[#E01E26]"
                    : "border-slate-200"
                }`}
              >
                {/* Recommended Badge on Top Border */}
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#E01E26] text-[#E01E26] px-3.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none">
                    Recommended
                  </span>
                )}

                {/* Card Top / Header */}
                <div>
                  {/* Icon Box */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[10px] mb-4 shrink-0 ${
                      plan.recommended
                        ? "bg-red-50 text-[#E01E26]"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <Calendar className="h-5 w-5 stroke-[2]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#12141F] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 font-semibold leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
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

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        {plan.recommended ? <RecommendedTick /> : <NormalTick />}
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button / Action — red on all plans */}
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-full justify-between rounded-[12px] font-bold text-xs py-3 px-4 flex items-center bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white hover:opacity-95 border-0"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Pricing Footer / Compare Plans CTA ── */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed max-w-2xl">
              Full plan details, connection rules and current availability should be reviewed before placing an order.
            </p>

            <Link href="/compare-plans" className="shrink-0 w-full md:w-auto">
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
        </FadeIn>

      </div>
    </section>
  );
}
