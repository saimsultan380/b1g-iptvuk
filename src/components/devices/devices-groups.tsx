"use client";

import React from "react";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { Flame, Tv, Monitor, Smartphone, Laptop } from "lucide-react";

const groups = [
  {
    title: "Fire TV Devices",
    icon: Flame,
    body: "Fire TV is suitable for customers who want to use B1G Player directly. Performance differs between models based on memory, processor, storage and Wi-Fi capability. Confirm that the selected model permits the required installation method.",
  },
  {
    title: "Android and Google TV",
    icon: Tv,
    body: "Many Android televisions and boxes can run B1G Player. Compatibility still depends on Android version, processor, memory, storage, security restrictions, manufacturer changes and remote-control support.",
  },
  {
    title: "Samsung and LG",
    icon: Monitor,
    body: "Samsung and LG televisions normally use operating systems that cannot install Android APK files. Use a compatible application from the official television app store. Some independent players require a separate activation fee.",
  },
  {
    title: "Apple Devices",
    icon: Smartphone,
    body: "iPhone, iPad and Apple TV require a compatible App Store player. Check whether it supports EPG, subtitles, multiple audio tracks and the supplied login format.",
  },
  {
    title: "Computers",
    icon: Laptop,
    body: "Windows and Mac customers can use a reputable compatible desktop application. The player should be obtained from its official publisher.",
  },
];

export function DevicesGroups() {
  return (
    <section id="device-groups" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <TelvisCard key={group.title} index={index} className="rounded-[12px] border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      {group.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {group.body}
                  </p>
                </TelvisCard>
              );
            })}
          </div>
      </div>
    </section>
  );
}
