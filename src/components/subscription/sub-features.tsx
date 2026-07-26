"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Trophy,
  Film,
  MonitorPlay,
  CalendarDays,
  History,
  Activity,
} from "lucide-react";

const liveTvCategories = [
  "Entertainment",
  "News",
  "Children’s channels",
  "Documentaries",
  "Lifestyle",
  "International television",
  "Regional programming",
];

const sportsList = [
  "Football",
  "Formula 1",
  "Cricket",
  "Rugby",
  "Boxing",
  "UFC",
  "Other sporting events",
];

const qualityFormats = ["SD", "HD", "Full HD", "4K"];

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

export function SubFeatures() {
  return (
    <section
      id="features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Your <span className="text-brand-gradient font-bold">Subscription Includes</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            A B1G IPTV subscription gives you secure access to the currently available entertainment categories.
          </p>
        </FadeIn>

        {/* Features 3-Column Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            
            {/* CARD 1: Live Television (lg:col-span-2) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Tv className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Live Television
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  Browse more than 35,000 live television channels from the UK and other regions.
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                    Categories may include:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {liveTvCategories.map((cat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {cat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 2: Live Sports (lg:col-span-1) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Trophy className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Live Sports
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                  Available sports coverage may include:
                </p>

                <ul className="space-y-2 mb-6">
                  {sportsList.map((sport, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {sport}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                  Specific competitions or events depend on broadcasting schedules and current package availability.
                </p>
              </div>
            </div>

            {/* CARD 3: Movies */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Film className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Movies
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                  Access a movie library containing more than 50,000 titles across a range of genres.
                </p>
              </div>
            </div>

            {/* CARD 4: Television Series */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <MonitorPlay className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Television Series
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                  Browse more than 10,000 available television series.
                </p>
              </div>
            </div>

            {/* CARD 5: Electronic Programme Guide */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <CalendarDays className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Programme Guide
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                  Use the programme guide to view available channel schedules where guide information is supplied.
                </p>
              </div>
            </div>

            {/* CARD 6: Catch-Up TV */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <History className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Catch-Up TV
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                  Catch-Up may be available for selected channels and programmes.
                </p>
              </div>
            </div>

            {/* CARD 7: Picture Quality (lg:col-span-2) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Activity className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Picture Quality
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {qualityFormats.map((format, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-[#E01E26] bg-red-50 px-3 py-1 rounded-full border border-red-100"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-100 pt-4">
                  Actual quality depends on the source, device, display, application and internet connection.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
