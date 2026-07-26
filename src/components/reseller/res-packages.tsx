"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Layers, Check } from "lucide-react";

interface ResellerPackage {
  id: string;
  name: string;
  price: string;
  credits: string;
  description: string;
  ctaText: string;
  isRecommended?: boolean;
  features: string[];
}

const packagesList: ResellerPackage[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: "£60",
    credits: "30 Credits",
    description: "Suitable for new resellers testing local demand and client setup parameters.",
    ctaText: "Choose Starter Package",
    features: [
      "Panel access",
      "Customer-account creation",
      "B1G Player setup information",
      "Reseller guidance",
    ],
  },
  {
    id: "professional",
    name: "Professional Package",
    price: "£150",
    credits: "100 Credits",
    description: "Suitable for growing resellers with regular customer activations.",
    ctaText: "Choose Professional Package",
    isRecommended: true,
    features: [
      "Higher credit balance",
      "Account and renewal management",
      "Trial creation where available",
      "Standard reseller support",
      "Additional-credit purchasing",
    ],
  },
  {
    id: "business",
    name: "Business Package",
    price: "Custom",
    credits: "Custom Balance",
    description: "Suitable for established resellers or agencies handling higher account volumes.",
    ctaText: "Discuss Business Package",
    features: [
      "Custom credit balance",
      "Higher activation capacity",
      "Priority reseller assistance where available",
      "Account-management tools",
      "Additional-credit purchasing",
    ],
  },
];

export function ResPackages() {
  return (
    <section
      id="reseller-packages"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Reseller <span className="text-brand-gradient font-bold">Packages</span>
          </h2>
        </FadeIn>

        {/* Packages Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
            {packagesList.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-[12px] border bg-white p-6 sm:p-8 transition-all duration-200 ${
                  pkg.isRecommended
                    ? "border-[#E01E26] ring-1 ring-[#E01E26]"
                    : "border-slate-200"
                }`}
              >
                {/* Popular Badge */}
                {pkg.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#E01E26] to-[#EE2830] text-[10px] font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Header Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <Layers
                      className={`h-4 w-4 shrink-0 ${
                        pkg.isRecommended ? "text-[#E01E26]" : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-xs sm:text-sm font-bold text-[#12141F] tracking-wide uppercase">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Pricing and Credits Info */}
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-[#12141F] tracking-tight font-heading block">
                      {pkg.price}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#E01E26] bg-red-50/50 px-2.5 py-0.5 rounded-md border border-red-100 inline-block mt-1">
                      {pkg.credits}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            pkg.isRecommended
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
                  variant={pkg.isRecommended ? "primary" : "outline"}
                  size="lg"
                  className={`w-full rounded-[12px] py-3.5 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    pkg.isRecommended
                      ? "bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white hover:opacity-95 shadow-none"
                      : "border-2 border-[#E01E26] bg-white text-[#12141F] hover:bg-red-50"
                  }`}
                >
                  {pkg.ctaText}
                </Button>

              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
