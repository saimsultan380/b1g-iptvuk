"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckSquare } from "lucide-react";

const prepareList = [
  "Active B1G IPTV subscription or trial",
  "Compatible device",
  "Stable internet connection",
  "Username",
  "Password",
  "Server URL",
  "Available device storage",
  "Access to installation permissions",
];

const doNotList = [
  "Add spaces before or after the login",
  "Change capital letters",
  "Shorten the server URL",
  "Post the information publicly",
  "Enter the login into unknown websites",
  "Download unofficial copies of the app",
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

const WarningDot = () => (
  <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E01E26] mt-2" />
);

export function InstBeforeBegin() {
  return (
    <section
      id="before-begin"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Column: Preparation checklist */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
                Before You <span className="text-brand-gradient font-bold">Begin</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                Prepare the following parameters before starting the installation:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 w-full">
                {prepareList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6 leading-relaxed">
                Your account details should be entered exactly as supplied.
              </p>

              <div className="border-t border-slate-100 pt-6 w-full">
                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  Have you not selected a subscription package yet?
                </p>
                <Link href="/subscription-plan/">
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                  >
                    <span>Visit Subscription Plans page</span>
                    <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Precaution Warning Card */}
          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-[#E01E26]/20 bg-red-50/10 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <AlertTriangle className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#E01E26] leading-none">
                      Do Not:
                    </h3>
                  </div>

                  <ul className="space-y-3.5">
                    {doNotList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <WarningDot />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {item}
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
