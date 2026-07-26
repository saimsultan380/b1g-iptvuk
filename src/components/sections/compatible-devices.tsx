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
  Cpu,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Globe,
  Settings,
  Flame,
} from "lucide-react";

const officialDevices = [
  { name: "Android Smart TVs", icon: Tv },
  { name: "Android TV boxes", icon: Monitor },
  { name: "Amazon Firestick", icon: Cast },
  { name: "Fire TV", icon: Tv },
  { name: "Android smartphones", icon: Smartphone },
  { name: "Android tablets", icon: Tablet },
  { name: "Selected Google TV devices", icon: Cast },
  { name: "NVIDIA Shield", icon: Cpu },
];

const alternativeDevices = [
  { name: "Samsung Smart TVs", icon: Tv },
  { name: "LG Smart TVs", icon: Tv },
  { name: "Windows PCs", icon: Monitor },
  { name: "Mac computers", icon: Laptop },
  { name: "iPhone", icon: Smartphone },
  { name: "iPad", icon: Tablet },
  { name: "Apple TV", icon: Cast },
  { name: "Other compatible Smart TVs", icon: Tv },
];

const loginMethods = ["Xtream Codes API", "M3U playlist URL"];

const compatibleApps = [
  "IBO Player",
  "SmartOne IPTV",
  "CR7 Player",
  "VU IPTV Player",
  "Other supported players",
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

export function CompatibleDevices() {
  return (
    <section
      id="compatible-devices"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Compatible <span className="text-brand-gradient font-bold">Devices</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            The official B1G Player app is designed for Android and Fire TV platforms.
          </p>
        </FadeIn>

        {/* ── Main Devices Row: Level Heights ── */}
        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
            
            {/* LEFT CARD: Officially Supported Devices */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <ShieldCheck className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Officially Supported Devices
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full">
                  {officialDevices.map((device, idx) => {
                    const Icon = device.icon;
                    return (
                      <div
                        key={idx}
                        data-reveal
                        data-delay={String((idx % 2) * 100)}
                        className="flex items-center gap-3 p-3 rounded-[12px] border border-slate-100 bg-white"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {device.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  These devices support direct installation of the official B1G Player client app.
                </p>
              </div>
            </div>

            {/* RIGHT CARD: Alternative Device Support */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Globe className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Alternative Device Support
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold leading-relaxed">
                  A B1G IPTV subscription may also be used through compatible players on:
                </p>

                {/* Alt Devices Grid */}
                <div className="grid grid-cols-2 gap-3 w-full mb-6">
                  {alternativeDevices.map((device, idx) => {
                    const Icon = device.icon;
                    return (
                      <div
                        key={idx}
                        data-reveal
                        data-delay={String((idx % 2) * 100)}
                        className="flex items-center gap-3 p-3.5 rounded-[12px] border border-slate-100 bg-white"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {device.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Split Row for Login Methods & Compatible Apps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  {/* Login Methods */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                      Supported login methods:
                    </h4>
                    <ul className="space-y-2">
                      {loginMethods.map((method, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Tick />
                          <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                            {method}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compatible Apps */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                      Compatible applications:
                    </h4>
                    <ul className="space-y-2">
                      {compatibleApps.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Tick />
                          <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                            {app}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Disclaimer footer */}
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Third-party application fees are separate from the B1G IPTV subscription.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* ── Footer / View Setup Instructions CTA Card ── */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed max-w-2xl">
              Access the guide below to review configuration tutorials and links for installing the relevant players.
            </p>

            <Link href="/installation-guide/" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>View setup instructions for supported devices</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
