"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const rows = [
  ["Compatible Firestick/Fire TV", "Yes", "Other supported player"],
  ["Android TV/Google TV", "Yes", "Other Android player"],
  ["Android phone/tablet", "Compatible builds", "Other Android player"],
  ["Samsung Smart TV", "No Android APK", "Tizen app-store player"],
  ["LG Smart TV", "No Android APK", "webOS app-store player"],
  ["iPhone/iPad", "No Android APK", "iOS App Store player"],
  ["Apple TV", "No Android APK", "tvOS player"],
  ["Windows", "Normally no", "Desktop player"],
  ["Mac", "Normally no", "macOS player"],
  ["MAG/portal device", "No", "Confirmed portal method"],
];

export function DevicesTable() {
  return (
    <section id="compatibility-table" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Device Compatibility{" "}
            <span className="text-brand-gradient font-bold">Table</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="overflow-x-auto rounded-[12px] border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  {["Device", "Direct B1G Player", "Alternative method"].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-b border-slate-100 last:border-0">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-slate-800">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
