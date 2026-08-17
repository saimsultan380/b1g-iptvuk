"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const steps = [
  "Select a subscription duration.",
  "Provide accurate contact and device information.",
  "Review the total price and connection allowance.",
  "Complete the approved payment process.",
  "Allow the order and payment to be checked.",
  "Receive private account details.",
  "Follow the installation guide.",
  "Sign in and allow the first catalogue update to finish.",
];

export function SubActivationSteps() {
  return (
    <section id="after-ordering" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Happens <span className="text-brand-gradient font-bold">After Ordering</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <div key={step} className="rounded-[12px] border border-slate-200 bg-white p-5 flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] font-bold text-xs">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
            Keep the activation message securely for later device changes or account support.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
