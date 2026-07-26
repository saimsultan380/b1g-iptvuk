"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsList: StepItem[] = [
  {
    number: "01",
    title: "Choose a Plan",
    description: "Select a 1-month, 3-month, 6-month or 12-month subscription.",
  },
  {
    number: "02",
    title: "Receive Details",
    description: "After confirmation, receive your private username, password and server URL.",
  },
  {
    number: "03",
    title: "Install the Player",
    description: "Use B1G Player on Android or Firestick, or choose a compatible alternative application for another device.",
  },
  {
    number: "04",
    title: "Sign In",
    description: "Enter the supplied details and allow the available live and on-demand categories to load.",
  },
];

export function StartWatchingSteps() {
  return (
    <section
      id="steps"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading ── */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Start Watching in{" "}
            <span className="text-brand-gradient font-bold">Four Steps</span>
          </h2>
        </FadeIn>

        {/* ── Steps Layout Grid with Connection Lines ── */}
        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full relative">
            {stepsList.map((step, idx) => (
              <div key={idx} data-reveal data-delay={String(idx * 100)} className="relative flex flex-col justify-between h-full">
                
                {/* Connection line between cards (desktop only) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-slate-200 z-10" />
                )}

                <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1 relative z-20">
                  <div>
                    {/* Big Step Number */}
                    <span className="text-5xl font-extrabold text-[#E01E26]/10 mb-4 block leading-none select-none font-heading">
                      {step.number}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2 leading-snug">
                      Step {idx + 1} – {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── CTA Card at Bottom ── */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed max-w-2xl">
              Ready to access premium IPTV stream services? Pick a plan and begin your activation.
            </p>

            <Link href="#pricing" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Start Your B1G IPTV Subscription</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
