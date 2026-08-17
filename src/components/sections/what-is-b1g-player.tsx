"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animation/fade-in";
import { ROUTES } from "@/lib/seo";
import {
  Tv,
  Film,
  Search,
  Star,
  History,
  Captions,
  Maximize2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const featureNames = [
  { name: "Live television categories", icon: Tv },
  { name: "Film and TV-series libraries", icon: Film },
  { name: "Electronic Programme Guide", icon: CalendarDays },
  { name: "Search", icon: Search },
  { name: "Favourites", icon: Star },
  { name: "Recently viewed content", icon: History },
  { name: "Selected Catch-Up", icon: History },
  { name: "Audio and subtitle controls where supplied", icon: Captions },
  { name: "SD, HD, Full HD and selected 4K playback", icon: Maximize2 },
];

export function WhatIsB1GPlayer() {
  return (
    <section id="what-is-b1g-player" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is <span className="text-brand-gradient font-bold">B1G Player?</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              B1G Player is the viewing application used to access and organise an active B1G IPTV account on compatible Fire TV and Android devices.
            </p>
            <p>
              After activation, customers enter the username, password and server address supplied with their account. B1G Player then organises the available live channels, films, TV series and programme information into separate sections.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
              The player may provide features such as:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 w-full">
              {featureNames.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} className="flex items-start gap-2.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#E01E26]">
                      <Icon className="h-3.5 w-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeIn>

        <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <FadeIn className="max-w-2xl">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                B1G Player is the application, while B1G IPTV is the subscription account. Installing the app alone does not provide an active catalogue, and purchasing a subscription does not automatically install the app on a device. Customers using Samsung, LG, Apple, Windows or Mac devices normally access the same subscription through a compatible third-party player.
              </p>
            </FadeIn>

            <Link href={ROUTES.installation} className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Open the Installation Guide</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
      </div>
    </section>
  );
}
