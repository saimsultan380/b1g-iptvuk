"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Tv, Film, MonitorPlay, Star, Search, CalendarDays, Compass } from "lucide-react";

interface UsageFeature {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const usageFeatures: UsageFeature[] = [
  {
    name: "Live Television",
    desc: "Open the Live TV section and select a category.",
    icon: Tv,
  },
  {
    name: "Movies",
    desc: "Browse the available movie categories.",
    icon: Film,
  },
  {
    name: "Series",
    desc: "Open television-series categories and choose a season or episode.",
    icon: MonitorPlay,
  },
  {
    name: "Favourites",
    desc: "Save regularly watched channels for quicker access.",
    icon: Star,
  },
  {
    name: "Search",
    desc: "Search available channels and on-demand content.",
    icon: Search,
  },
  {
    name: "EPG",
    desc: "View programme schedules where guide information is available.",
    icon: CalendarDays,
  },
];

export function InstUsageGuide() {
  return (
    <section
      id="usage-guide"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <Compass className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              User Navigation
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Using the <span className="text-brand-gradient font-bold">B1G Player App</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Once setup has completed, the home screen displays available content categories and navigation panels.
          </p>
        </FadeIn>

        {/* Features Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {usageFeatures.map((feat, idx) => {
              const Icon = feat.icon;
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
                      <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                        {feat.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mt-2">
                      {feat.desc}
                    </p>
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
