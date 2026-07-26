"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { ShieldAlert, AlertTriangle } from "lucide-react";

const responsibilitiesList = [
  "Customer communication",
  "Retail pricing structures",
  "Payment transactions",
  "Refund policy handling",
  "First-line client support",
  "Customer record management",
  "Marketing & Advertising",
  "Data privacy compliance",
  "Consumer protection laws",
  "Accurate service descriptions",
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

export function ResResponsibilities() {
  return (
    <section
      id="reseller-responsibilities"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Reseller <span className="text-brand-gradient font-bold">Responsibilities</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Eligible resellers remain responsible for setting up their business models in compliance with legal and operational guidelines.
          </p>
        </FadeIn>

        {/* Card Box Container with Border and no shadow */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <ShieldAlert className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                  Compliance & Obligations
                </h3>
              </div>

              {/* 2-Column Grid on desktop */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
                {responsibilitiesList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Caution Alert */}
            <div className="border-t border-slate-100 pt-5 mt-8 flex items-start gap-2.5">
              <AlertTriangle className="h-4.5 w-4.5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
              <p className="text-xs sm:text-sm text-[#E01E26] font-semibold leading-relaxed">
                Do not present yourself as an official broadcaster or claim a relationship with third-party brands unless authorised.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
