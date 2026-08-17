"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const stepsList = [
  {
    number: "01",
    title: "Check your device",
    description: "Confirm its exact manufacturer, model and operating system.",
  },
  {
    number: "02",
    title: "Request a trial or choose a plan",
    description: "Test first if the setup has not previously been used.",
  },
  {
    number: "03",
    title: "Receive private login details",
    description: "Keep the username, password and server address secure.",
  },
  {
    number: "04",
    title: "Install the correct player",
    description: "Use B1G Player on compatible Android or Fire TV devices and an appropriate alternative elsewhere.",
  },
  {
    number: "05",
    title: "Sign in",
    description: "Enter every field exactly as supplied.",
  },
  {
    number: "06",
    title: "Allow the first update to finish",
    description: "Large catalogues and EPG information can take time to load.",
  },
  {
    number: "07",
    title: "Test the service",
    description: "Open several live and on-demand items before adjusting advanced settings.",
  },
];

export function StartWatchingSteps() {
  return (
    <section id="steps" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            How to Start Using{" "}
            <span className="text-brand-gradient font-bold">B1G Player</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full mb-10">
            {stepsList.map((step, idx) => (
              <TelvisCard key={step.number} index={idx} className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col">
                <span className="text-5xl font-extrabold text-[#E01E26]/10 mb-4 block leading-none select-none font-heading">
                  {step.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  {step.description}
                </p>
              </TelvisCard>
            ))}
          </div>

        <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <FadeIn className="max-w-2xl">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Follow only the method written for your device. Do not attempt to install an Android APK on Samsung Tizen, LG webOS or Apple products.
              </p>
            </FadeIn>
            <Link href={ROUTES.installation} className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>Open the Installation Guide</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
      </div>
    </section>
  );
}
