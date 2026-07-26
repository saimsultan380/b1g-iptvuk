"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  KeyRound,
  Tv,
  CalendarDays,
  History,
  Activity,
  AlertCircle,
} from "lucide-react";

const loginDetailsList = [
  "Private username",
  "Private password",
  "Server URL",
  "B1G Player app access",
  "Setup instructions",
  "Customer-support information",
];

const streamingFormats = ["SD", "HD", "Full HD", "4K"];

const playbackFactors = [
  "Selected channel or title",
  "Device capability",
  "Internet connection",
  "Home network",
  "App performance",
  "Available source quality",
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

export function WhatIsIncluded() {
  return (
    <section
      id="what-is-included"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is Included with a{" "}
            <span className="text-brand-gradient font-bold">B1G IPTV Subscription?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Every subscription includes access to the features and available entertainment listed for the selected package.
          </p>
        </FadeIn>

        {/* ── Asymmetric Layout Grid: 2 Columns on Desktop ── */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
            
            {/* LEFT COLUMN: Login Details, Live Content, Programme Guide */}
            <div className="flex flex-col gap-6 w-full">
              
              {/* Card 1: Secure Login Details */}
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <KeyRound className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Secure Login Details
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                    Customers receive:
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {loginDetailsList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer Warning Box inside the card */}
                <div className="border-t border-slate-100 pt-4 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                    Keep these details private and do not post them publicly.
                  </p>
                </div>
              </div>

              {/* Card 2: Live and On-Demand Content */}
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Tv className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Live and On-Demand Content
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                    The subscription may include live television alongside movies, television series and other on-demand categories.
                  </p>
                </div>
              </div>

              {/* Card 3: Programme Guide */}
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <CalendarDays className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Programme Guide
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                    An Electronic Programme Guide can display available channel schedules and programme information.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Guide accuracy depends on the data supplied for each channel.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Catch-Up Support, Streaming Quality */}
            <div className="flex flex-col gap-6 w-full">
              
              {/* Card 4: Catch-Up Support */}
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <History className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Catch-Up Support
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                    Selected channels may support Catch-Up, allowing viewers to access certain programmes after their original broadcast time.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Not every programme or channel includes this feature.
                  </p>
                </div>
              </div>

              {/* Card 5: Streaming Quality */}
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Activity className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Streaming Quality
                    </h3>
                  </div>
                  
                  {/* Streaming Formats Grid */}
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-slate-500 mb-2 font-semibold">
                      Available streams may include:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {streamingFormats.map((format, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-bold text-[#E01E26] bg-red-50 px-3 py-1 rounded-full border border-red-100"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Playback Factors List */}
                  <p className="text-xs sm:text-sm text-slate-500 mb-3 font-semibold">
                    Actual playback quality depends on:
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {playbackFactors.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Higher quality streams require faster connection speeds and capable client hardware.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
