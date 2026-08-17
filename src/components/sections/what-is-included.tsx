"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { KeyRound, Tv, Activity, AlertCircle } from "lucide-react";

const catalogueList = [
  "35,000+ live channels",
  "50,000+ films",
  "10,000+ TV series",
  "UK and international television categories",
  "Sports and entertainment sections",
  "News and documentaries",
  "Family and children’s categories",
  "Electronic Programme Guide where supplied",
  "Selected Catch-Up where available",
  "SD, HD, Full HD and 4K sources where available",
  "Private username, password and server details",
  "Installation and login guidance",
  "Customer account support",
];

const Tick = () => (
  <svg className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function WhatIsIncluded() {
  return (
    <section id="what-is-included" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is Included with{" "}
            <span className="text-brand-gradient font-bold">B1G IPTV?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            The current advertised wider catalogue includes:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
            <TelvisCard index={0} className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Tv className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Catalogue and account access
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {catalogueList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </TelvisCard>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <TelvisCard index={1} className="rounded-[12px] border border-slate-200 bg-white p-6 flex-1">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <KeyRound className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Private login details
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  Customers receive a private username, password and server address, plus installation guidance and account support.
                </p>
              </TelvisCard>

              <TelvisCard index={2} className="rounded-[12px] border border-slate-200 bg-white p-6 flex-1">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Activity className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Availability can change
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mb-4">
                  Catalogue totals describe the wider service when published. Channels, titles, languages, EPG information, Catch-Up and picture quality can change because of source availability, maintenance, regional restrictions and applicable rights.
                </p>
                <div className="border-t border-slate-100 pt-4 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                    If one particular category is important, ask support to confirm its current availability before purchasing a longer plan.
                  </p>
                </div>
              </TelvisCard>
            </div>
          </div>
      </div>
    </section>
  );
}
