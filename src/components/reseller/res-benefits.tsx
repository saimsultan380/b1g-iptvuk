"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  DollarSign,
  Layout,
  Smartphone,
  Laptop,
  TrendingUp,
  Headphones,
} from "lucide-react";

interface BenefitCard {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
  list?: string[];
}

const benefitsList: BenefitCard[] = [
  {
    title: "Control Your Pricing",
    icon: DollarSign,
    list: [
      "Credit cost",
      "Subscription duration",
      "Payment processing fees",
      "Marketing and setup costs",
      "Customer-support requirements",
      "Preferred profit margin",
    ],
  },
  {
    title: "Manage Accounts Directly",
    icon: Layout,
    desc: "Create and renew eligible subscriptions without waiting for every request to be processed manually by our main activation team.",
  },
  {
    title: "Offer the Official App",
    icon: Smartphone,
    desc: "Customers using compatible Android or Firestick devices can use the official B1G Player application to access their subscription features.",
  },
  {
    title: "Serve More Devices",
    icon: Laptop,
    desc: "Customers using Samsung, LG, Apple, Windows or Mac devices can connect to their account through compatible alternative player applications.",
  },
  {
    title: "Grow Gradually",
    icon: TrendingUp,
    desc: "Begin with a smaller credit package to test your local demand, and purchase additional top-up credits as your customer base develops.",
  },
  {
    title: "Receive Reseller Support",
    icon: Headphones,
    list: [
      "Panel access and setup",
      "Credit usage rules",
      "Customer activation assistance",
      "Renewal and expiry questions",
      "B1G Player installation guides",
    ],
  },
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

export function ResBenefits() {
  return (
    <section
      id="benefits"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Why Become a <span className="text-brand-gradient font-bold">B1G Player Reseller?</span>
          </h2>
        </FadeIn>

        {/* Benefits Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {benefitsList.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full transition-colors hover:border-slate-300"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                        {card.title}
                      </h3>
                    </div>

                    {card.desc && (
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mt-2">
                        {card.desc}
                      </p>
                    )}

                    {card.list && (
                      <ul className="space-y-2 mt-4 border-t border-slate-100 pt-4">
                        {card.list.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <Tick />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
