"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { AppWindow, KeyRound, Package, Tv, Search } from "lucide-react";

const explanations = [
  {
    title: "B1G Player",
    icon: AppWindow,
    body: "B1G Player is the application used to access an active B1G IPTV account on supported devices.",
  },
  {
    title: "B1G IPTV",
    icon: KeyRound,
    body: "B1G IPTV is the subscription/account that provides the available catalogue and login details.",
  },
  {
    title: "B1G APK",
    icon: Package,
    body: "B1G APK refers to an Android application package used when an Android-compatible installation requires an APK.",
  },
  {
    title: "B1GTV or B1G TV",
    icon: Tv,
    body: "B1GTV or B1G TV may be used as a search variation by people looking for B1G television or the B1G Player service.",
  },
  {
    title: "b1gplayer and big player",
    icon: Search,
    body: "“b1gplayer” and “big player” are alternative search phrases users may enter when looking for the B1G Player app.",
  },
];

export function SearchTermsExplained() {
  return (
    <section id="search-terms-explained" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            B1G Player, B1GTV and{" "}
            <span className="text-brand-gradient font-bold">B1G APK Explained</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              Several different search terms can lead users to the same B1G IPTV topic. You may see searches such as “b1gplayer”, “big player”, “bigtv”, “B1G TV”, “B1G APK,” or “B1G Player”.
            </p>
            <p>Here is the simple difference:</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full mb-8">
          {explanations.map((item, index) => {
            const Icon = item.icon;
            return (
              <TelvisCard
                key={item.title}
                index={index}
                className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {item.body}
                </p>
              </TelvisCard>
            );
          })}
        </div>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Using the correct app and installation method for your device is more important than the search term you use.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
