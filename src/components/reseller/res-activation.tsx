"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsList: StepItem[] = [
  {
    number: "01",
    title: "Submit an Enquiry",
    description: "Provide: Name, Business name, Target country, Expected volume, Preferred package, and current reseller experience.",
  },
  {
    number: "02",
    title: "Choose a Package",
    description: "Select a credit package suited to your starting budget and customer expectations.",
  },
  {
    number: "03",
    title: "Receive Panel Access",
    description: "After confirmation, receive your private reseller login details and access credentials.",
  },
  {
    number: "04",
    title: "Review the Panel",
    description: "Learn how to: Create customer accounts, select durations, track credits, view expiry dates, and process renewals.",
  },
  {
    number: "05",
    title: "Start Selling",
    description: "Promote your available plans, set your pricing, and provide customers with clear setup directions.",
  },
];

export function ResActivation() {
  return (
    <section
      id="reseller-activation"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            How to Become a <span className="text-brand-gradient font-bold">Reseller</span>
          </h2>
        </FadeIn>

        {/* Steps Grid */}
        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch w-full relative">
            {stepsList.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between h-full">
                
                {/* Horizontal connection line on desktop */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-slate-200 z-10" />
                )}

                <div className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col justify-between flex-1 relative z-20">
                  <div>
                    {/* Step Number */}
                    <span className="text-4xl font-extrabold text-[#E01E26]/10 mb-3 block leading-none select-none font-heading">
                      {step.number}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5 leading-snug">
                      Step {idx + 1} – {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </FadeIn>

        {/* Subtext redirect banner */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-[#4A4A4A] font-semibold leading-relaxed">
              Would you like to review customer plans before setting up reseller packages?
            </p>
            <Link href="/b1g-iptv-subscription" className="shrink-0 w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
              >
                <span>Review B1G IPTV customer subscription plans</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
