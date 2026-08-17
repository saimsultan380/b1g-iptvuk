"use client";

import React from "react";
import { Calendar, Wrench, MonitorSmartphone, KeyRound } from "lucide-react";

const trustItems = [
  { icon: Calendar, label: "Flexible plans" },
  { icon: Wrench, label: "Guided installation" },
  { icon: MonitorSmartphone, label: "Compatible-device support" },
  { icon: KeyRound, label: "Private account access" },
];

export function B1GTrustRow() {
  return (
    <div className="w-full rounded-2xl sm:rounded-full border border-slate-200 bg-white p-3 sm:p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x-0 sm:divide-x divide-slate-200/90 gap-y-3 sm:gap-y-0 text-center items-center">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-3"
            >
              <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
