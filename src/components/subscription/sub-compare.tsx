"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const rows = [
  { plan: "1 month", price: "£10", period: "1 month", monthly: "£10 per month" },
  { plan: "3 months", price: "£20", period: "3 months", monthly: "£6.67 per month" },
  { plan: "6 months", price: "£30", period: "6 months", monthly: "£5 per month" },
  { plan: "12 months + 1 free", price: "£45", period: "13 months", monthly: "£3.46 per month of access" },
];

export function SubCompare() {
  return (
    <section id="compare-plans" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Compare <span className="text-brand-gradient font-bold">B1G IPTV Plans</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="overflow-x-auto rounded-[12px] border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  {["Plan", "Price", "Access period", "Approximate cost"].map((heading) => (
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
                  <tr key={row.plan} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold text-[#12141F]">{row.plan}</td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-[#E01E26]">{row.price}</td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-slate-700">{row.period}</td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-slate-700">{row.monthly}</td>
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
