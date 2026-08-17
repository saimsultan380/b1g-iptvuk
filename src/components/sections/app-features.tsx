"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import {
  ShieldCheck,
  LayoutList,
  Search,
  Star,
  History,
  Filter,
  Volume2,
  Captions,
  Maximize2,
  Gamepad2,
} from "lucide-react";

const features = [
  { name: "Secure account sign-in", icon: ShieldCheck },
  { name: "Clear live, film and series sections", icon: LayoutList },
  { name: "Programme-guide information", icon: LayoutList },
  { name: "Search across available categories", icon: Search },
  { name: "Favourite-channel management", icon: Star },
  { name: "Recently viewed items", icon: History },
  { name: "Category filtering", icon: Filter },
  { name: "Audio-track selection", icon: Volume2 },
  { name: "Subtitle controls", icon: Captions },
  { name: "Selected Catch-Up", icon: History },
  { name: "Multiple picture-quality options", icon: Maximize2 },
  { name: "Remote-friendly Android and Fire TV navigation", icon: Gamepad2 },
];

export function AppFeatures() {
  return (
    <section id="app-features" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            B1G Player{" "}
            <span className="text-brand-gradient font-bold">App Features</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Features can vary by app version, device and source, but B1G Player may include:
          </p>
        </FadeIn>

        <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <TelvisCard
                    key={feature.name}
                    index={index}
                    className="flex items-center gap-3 p-3 rounded-[12px] border border-slate-100 bg-white"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {feature.name}
                    </span>
                  </TelvisCard>
                );
              })}
            </div>
            <div className="border-t border-slate-100 pt-4 mt-6">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                A player feature can work only when the selected source supplies the required information. For example, subtitle controls may appear in the application even though a particular programme does not include subtitles.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
