"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { Tv, Trophy, Film, Newspaper, MonitorPlay } from "lucide-react";

const categories = [
  {
    title: "Live television",
    icon: Tv,
    body: "Browse available entertainment, news, lifestyle, documentary, family and international categories without switching between several separate players.",
  },
  {
    title: "Sports categories",
    icon: Trophy,
    body: "Available sports sections may include football, cricket, rugby, motorsport, boxing and other events. Competition schedules and source availability can change, so customers should request a current check when a specific event is important.",
  },
  {
    title: "Films",
    icon: Film,
    body: "Explore available action, comedy, drama, thriller, documentary, family and international films organised by category.",
  },
  {
    title: "TV series",
    icon: MonitorPlay,
    body: "Browse available series, seasons and recently added programmes. The exact titles and number of complete seasons vary over time.",
  },
  {
    title: "News and documentaries",
    icon: Newspaper,
    body: "Access available current-affairs, factual, history, nature, science, technology, culture and travel categories.",
  },
];

export function LiveCategories() {
  return (
    <section id="live-categories" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Live Television, Sports,{" "}
            <span className="text-brand-gradient font-bold">Films and TV Series</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <TelvisCard
                  key={category.title}
                  index={index}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed flex-1">
                    {category.body}
                  </p>
                </TelvisCard>
              );
            })}
            <TelvisCard
              index={categories.length}
              className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-center"
            >
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Parents and guardians should check programme suitability and use parental controls where the chosen player provides them.
              </p>
            </TelvisCard>
          </div>
      </div>
    </section>
  );
}
