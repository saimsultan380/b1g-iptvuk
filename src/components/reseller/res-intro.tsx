"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Settings, Users } from "lucide-react";

const panelCapabilities = [
  "Create customer accounts",
  "Choose subscription durations",
  "Allocate connections",
  "View active accounts",
  "Track expiry dates",
  "Renew eligible accounts",
  "Manage your credit balance",
  "Create trial accounts where available",
  "Provide B1G Player installation details",
];

const resellerDuties = [
  "Finding customers",
  "Setting retail prices",
  "Processing customer payments",
  "Providing first-line support",
  "Managing renewals",
  "Following applicable laws and advertising rules",
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

export function ResIntro() {
  return (
    <section
      id="programme-intro"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Column: Panel Capabilities */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4 font-heading">
                What Is the B1G Player <span className="text-brand-gradient font-bold">Reseller Programme?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                The reseller programme allows approved individuals and businesses to create and manage customer subscriptions through a credit-based panel. Instead of sending every activation request to the main support team, resellers can perform eligible account actions directly.
              </p>

              <div className="border-t border-slate-100 pt-5 w-full">
                <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-4">
                  Depending on the panel configuration, you may be able to:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {panelCapabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-6 leading-relaxed">
                The panel gives you the tools required to organize account administration.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Duties Card */}
          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Users className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Reseller Duties
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                    You remain responsible for:
                  </p>

                  <ul className="space-y-3.5">
                    {resellerDuties.map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {duty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
