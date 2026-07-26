"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Info } from "lucide-react";

interface CompareRow {
  plan: string;
  price: string;
  period: string;
  app: string;
  support: string;
}

const compareData: CompareRow[] = [
  {
    plan: "1 Month",
    price: "£10",
    period: "1 month",
    app: "Included",
    support: "Included",
  },
  {
    plan: "3 Months",
    price: "£20",
    period: "3 months",
    app: "Included",
    support: "Included",
  },
  {
    plan: "6 Months",
    price: "£30",
    period: "6 months",
    app: "Included",
    support: "Included",
  },
  {
    plan: "12 + 1 Months",
    price: "£45",
    period: "13 months",
    app: "Included",
    support: "Included",
  },
];

export function SubCompare() {
  return (
    <section
      id="compare-plans"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Compare the <span className="text-brand-gradient font-bold">Plans</span>
          </h2>
        </FadeIn>

        {/* Responsive Table Wrapper */}
        <FadeIn className="w-full mb-6">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                      Plan
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                      Price
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                      Access Period
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                      B1G Player
                    </th>
                    <th className="px-6 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F]">
                      Support
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#12141F]">
                        {row.plan}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-bold text-[#E01E26]">
                        {row.price}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        {row.period}
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                          {row.app}
                        </span>
                      </td>
                      <td className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                          {row.support}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Footer Warning/Disclaimer */}
        <FadeIn className="w-full">
          <div className="flex items-start gap-2.5 px-2">
            <Info className="h-4.5 w-4.5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Review the current package details at checkout in case pricing, promotions or included features have changed.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
