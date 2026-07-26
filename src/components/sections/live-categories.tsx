"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Trophy,
  Film,
  Newspaper,
  MonitorPlay,
  Users,
} from "lucide-react";

const liveTvCategories = [
  "UK entertainment",
  "News",
  "Lifestyle",
  "Children’s programming",
  "Documentaries",
  "International television",
  "Regional channels",
];

const liveSportsCategories = [
  "Football",
  "Cricket",
  "Rugby",
  "Formula 1 and motorsport",
  "Boxing",
  "UFC and combat sports",
  "Other international sporting events",
];

const moviesCategories = [
  "Action",
  "Drama",
  "Comedy",
  "Thriller",
  "Documentary",
  "Family",
  "British cinema",
  "European cinema",
  "Asian cinema",
  "International films",
];

const newsDocCategories = [
  "Current affairs",
  "History",
  "Nature",
  "Science",
  "Technology",
  "Travel",
  "Culture",
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

export function LiveCategories() {
  return (
    <section
      id="live-categories"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Live Television, Sports,{" "}
            <span className="text-brand-gradient font-bold">Movies and Series</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            B1G IPTV brings several entertainment categories together through the official app or another supported application.
          </p>
        </FadeIn>

        {/* ── Grid Layout: 3 Columns on Desktop, items-stretch ── */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            
            {/* Card 1: Live Television */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Tv className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Live Television
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Browse available channels across categories such as:
                </p>
                <ul className="space-y-2.5">
                  {liveTvCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  The categories displayed depend on the active package and current channel list.
                </p>
              </div>
            </div>

            {/* Card 2: Live Sports */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Trophy className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Live Sports
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Available sports coverage may include channels showing:
                </p>
                <ul className="space-y-2.5">
                  {liveSportsCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  Schedules, broadcasting rights and event availability can change. Check the current package or contact support when access to a particular event is important.
                </p>
              </div>
            </div>

            {/* Card 3: Movies */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Film className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Movies
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  The available movie library may include:
                </p>
                <ul className="space-y-2.5">
                  {moviesCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  Movies are arranged into categories to make browsing easier.
                </p>
              </div>
            </div>

            {/* Card 4: News and Documentaries (Aligned FIRST in row 2 on desktop) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Newspaper className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    News and Documentaries
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Browse news and documentary content covering subjects such as:
                </p>
                <ul className="space-y-2.5">
                  {newsDocCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  Includes international and local current affairs, lifestyle, history, nature, science and travel networks.
                </p>
              </div>
            </div>

            {/* Card 5: Television Series (Middle on desktop, content vertically centered to match left card height) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <MonitorPlay className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Television Series
                    </h3>
                  </div>
                </div>
                {/* Vertically centered body content on desktop, compact on mobile */}
                <div className="lg:flex-1 lg:flex lg:items-center py-2 lg:py-8">
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    Available series are organised into clear sections.
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-4 lg:mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  The library may contain complete seasons as well as recently added programmes, depending on current availability.
                </p>
              </div>
            </div>

            {/* Card 6: Family Entertainment (Right on desktop, content vertically centered to match left card height) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Users className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Family Entertainment
                    </h3>
                  </div>
                </div>
                {/* Vertically centered body content on desktop, compact on mobile */}
                <div className="lg:flex-1 lg:flex lg:items-center py-2 lg:py-8">
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    Family and children’s categories may be available within the subscription.
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-4 lg:mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  Parents and guardians should check programme suitability and use any parental-control options provided by the selected application.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
