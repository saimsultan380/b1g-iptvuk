"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  isRecommended?: boolean;
  features: string[];
}

const getFeaturesForMonths = (monthsText: string) => [
  `${monthsText} of account access`,
  "More than 35,000 live television channels",
  "More than 50,000 movies",
  "More than 10,000 television series",
  "Sports and entertainment categories",
  "Electronic Programme Guide",
  "Catch-Up where available",
  "HD, Full HD and 4K streams where supported",
  "Official B1G Player App",
  "Private username, password and server URL",
  "Instant activation",
  "UK customer assistance",
];

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month",
    price: "£10",
    description: "A flexible monthly option for new customers or viewers who prefer short-term access.",
    ctaText: "Buy 1 Month",
    features: getFeaturesForMonths("1 month"),
  },
  {
    id: "3-months",
    name: "3 Months",
    price: "£20",
    description: "Suitable for viewers who want a shorter subscription without renewing every month.",
    ctaText: "Buy 3 Months",
    features: getFeaturesForMonths("3 months"),
  },
  {
    id: "6-months",
    name: "6 Months",
    price: "£30",
    description: "A mid-length option for viewers looking for a balance between flexibility and value.",
    ctaText: "Buy 6 Months",
    features: getFeaturesForMonths("6 months"),
  },
  {
    id: "12-months",
    name: "12 Months + 1 Month Free",
    price: "£45",
    description: "A longer-term package for regular viewers.",
    ctaText: "Buy 12 Months + 1 Month Free",
    isRecommended: true,
    features: getFeaturesForMonths("13 months"),
  },
];

export function SubPricing() {
  return (
    <section
      id="pricing-plans"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Title */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Official B1G IPTV{" "}
            <span className="text-brand-gradient font-bold">Subscription Plans</span>
          </h2>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-[12px] border bg-white p-6 transition-all duration-200 ${
                  plan.isRecommended
                    ? "border-[#E01E26] ring-1 ring-[#E01E26]"
                    : "border-slate-200"
                }`}
              >
                {/* Recommended Badge */}
                {plan.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#E01E26] to-[#EE2830] text-[10px] font-bold text-white uppercase tracking-wider">
                    Recommended
                  </span>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar
                      className={`h-4 w-4 shrink-0 ${
                        plan.isRecommended ? "text-[#E01E26]" : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-sm font-bold text-[#12141F] tracking-wide uppercase">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Plan Price */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-extrabold text-[#12141F] tracking-tight font-heading">
                      {plan.price}
                    </span>
                  </div>

                  {/* Plan Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            plan.isRecommended
                              ? "bg-red-50 text-[#E01E26]"
                              : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.isRecommended ? "primary" : "outline"}
                  size="lg"
                  className={`w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    plan.isRecommended
                      ? "bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white hover:opacity-95 shadow-none"
                      : "border-2 border-[#E01E26] bg-white text-[#12141F] hover:bg-red-50"
                  }`}
                >
                  {plan.ctaText}
                </Button>

              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
