"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Tv,
  Monitor,
  Cast,
  Smartphone,
  Tablet,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Globe,
  AlertCircle,
} from "lucide-react";

const supportedDevices = [
  { name: "Android Smart TVs", icon: Tv },
  { name: "Android TV boxes", icon: Monitor },
  { name: "Firestick", icon: Cast },
  { name: "Fire TV", icon: Tv },
  { name: "Android smartphones", icon: Smartphone },
  { name: "Android tablets", icon: Tablet },
];

const playerFeatures = [
  "Live-channel categories",
  "Movie and series sections",
  "Programme-guide information",
  "Search",
  "Favourites",
  "Fast channel navigation",
  "Secure account access",
];

const alternativePlatforms = [
  { name: "Samsung Smart TV", icon: Tv },
  { name: "LG Smart TV", icon: Tv },
  { name: "Apple TV", icon: Cast },
  { name: "iPhone", icon: Smartphone },
  { name: "iPad", icon: Tablet },
  { name: "Windows", icon: Monitor },
  { name: "Mac", icon: Laptop },
];

const loginFormats = ["Xtream Codes API", "M3U playlist"];

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

export function SubAppAccess() {
  return (
    <section
      id="app-access"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* LEFT COLUMN: B1G Player App Included */}
          <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <ShieldCheck className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  B1G Player App Included
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Every active plan includes access to the official app on supported devices.
              </p>

              {/* Supported Devices Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {supportedDevices.map((device, idx) => {
                  const Icon = device.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-[12px] border border-slate-100 bg-slate-50/20"
                    >
                      <Icon className="h-4 w-4 text-[#E01E26] shrink-0 stroke-[2]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {device.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Paragraph details */}
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                After installing the app, enter the private login information received after activation.
              </p>

              {/* Player features list */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                  The player may provide:
                </h4>
                <ul className="space-y-2 mb-6">
                  {playerFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Internal Guide Link button */}
            <div className="border-t border-slate-100 pt-6 mt-6">
              <Link href="/b1g-player-installation-guide/">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Read the B1G Player Installation Guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* RIGHT COLUMN: Alternative Device Access */}
          <FadeIn delay={0.1} className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Globe className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Alternative Device Access
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Customers using another platform can add the subscription to a compatible third-party player.
              </p>

              {/* Alt Platforms Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {alternativePlatforms.map((device, idx) => {
                  const Icon = device.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-[12px] border border-slate-100 bg-slate-50/20"
                    >
                      <Icon className="h-4 w-4 text-[#E01E26] shrink-0 stroke-[2]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {device.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Supported Login formats */}
              <div className="border-t border-slate-100 pt-4 mb-6">
                <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                  Supported login formats may include:
                </h4>
                <ul className="space-y-2">
                  {loginFormats.map((format, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {format}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third-party fee alert box */}
            <div className="border-t border-slate-100 pt-4 mt-6 flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Some alternative applications require a separate activation payment. That charge is set by the application developer and is not included in the subscription price.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
