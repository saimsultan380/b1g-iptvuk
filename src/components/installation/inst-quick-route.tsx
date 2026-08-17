"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const rows = [
  { device: "Firestick and Fire TV", method: "B1G Player through verified Downloader route" },
  { device: "Android TV, Google TV or Android box", method: "Compatible B1G Player Android build" },
  { device: "Android phone or tablet", method: "Compatible B1G Player Android build" },
  { device: "Samsung Smart TV", method: "Compatible Tizen app-store player" },
  { device: "LG Smart TV", method: "Compatible webOS app-store player" },
  { device: "iPhone or iPad", method: "Compatible iOS App Store player" },
  { device: "Apple TV", method: "Compatible tvOS player" },
  { device: "Windows PC", method: "Compatible desktop player" },
  { device: "Mac", method: "Compatible macOS player" },
  { device: "MAG or portal device", method: "Only where the exact model and portal method are confirmed" },
];

export function InstQuickRoute() {
  return (
    <section id="quick-setup" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Quick Setup <span className="text-brand-gradient font-bold">Route</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="overflow-x-auto rounded-[12px] border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                    Device
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                    Installation method
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.device} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold text-[#12141F]">
                      {row.device}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-slate-700">
                      {row.method}
                    </td>
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
