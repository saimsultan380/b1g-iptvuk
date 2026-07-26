"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Smartphone,
  Tablet,
  Monitor,
  Cpu,
  Cast,
  ArrowRight,
} from "lucide-react";

const devices = [
  { name: "Android Smart TVs", icon: Tv },
  { name: "Android TV boxes", icon: Monitor },
  { name: "Amazon Firestick", icon: Cast },
  { name: "Fire TV devices", icon: Tv },
  { name: "Android smartphones", icon: Smartphone },
  { name: "Android tablets", icon: Tablet },
  { name: "Compatible Google TV devices", icon: Cast },
  { name: "NVIDIA Shield", icon: Cpu },
];

const featureNames = [
  "Secure account login",
  "Fast category loading",
  "Live television navigation",
  "Movie and television-series sections",
  "Electronic Programme Guide",
  "Catch-Up where available",
  "Search",
  "Favourites",
  "HD, Full HD and 4K streams where supported",
  "Regular performance updates",
];

export function WhatIsB1GPlayer() {
  return (
    <section id="what-is-b1g-player" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading & Intro Paragraphs */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is <span className="text-brand-gradient font-bold">B1G Player?</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              B1G Player is the official IPTV application developed for customers with an active B1G IPTV subscription.
            </p>
            <p>
              It provides a straightforward way to sign in using the private username, password and server URL supplied after activation. Once the account has loaded, the application organises available live television, sports, movies, television series and programme-guide information into clear sections.
            </p>
          </div>
        </FadeIn>

        {/* MAIN DESKTOP ROW: Perfectly Level Top & Bottom Alignment via items-stretch */}
        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            
            {/* LEFT COLUMN: The player is optimised for: */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4 shrink-0">
                The player is optimised for:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-3 w-full flex-1">
                {devices.map((device, idx) => {
                  const Icon = device.icon;
                  return (
                    <div
                      key={idx}
                      data-reveal
                      data-delay={String((idx % 4) * 50)}
                      className="flex flex-col items-center justify-center text-center p-3 rounded-[12px] border border-slate-200 bg-white min-h-[90px] w-full"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] mb-1.5 shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-snug">
                        {device.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Height stretched (flex-1) so bottom aligns exactly with left cards */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              {/* Spacer matching left heading baseline */}
              <div className="hidden lg:block h-[28px] mb-4 shrink-0" />
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between flex-1">
                
                {/* Heading INSIDE Card */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
                    Features may include:
                  </h3>
                  
                  {/* Features Bullet Points List */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full">
                    {featureNames.map((name, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E01E26] font-bold text-base leading-none select-none">•</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                          {name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation Explanation Paragraph at Card Bottom */}
                <div className="border-t border-slate-100 pt-4 mt-6">
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    The app is designed to make everyday navigation simple. Viewers can move between live channels, films, series and other available categories without repeatedly entering their account information or switching between several separate applications.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </FadeIn>

        {/* Subscription Explanation & Internal Link CTA Card */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed max-w-2xl">
              The player works together with the subscription. It provides the interface, while the active B1G IPTV account supplies the available channels and on-demand categories.
            </p>

            <Link href="#installation" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Install B1G Player on Firestick or Android</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
