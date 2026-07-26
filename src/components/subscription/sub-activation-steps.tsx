"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsList: StepItem[] = [
  {
    number: "01",
    title: "Choose a Plan",
    description: "Select your preferred subscription duration.",
  },
  {
    number: "02",
    title: "Complete the Order",
    description: "Provide the information needed to process your subscription.",
  },
  {
    number: "03",
    title: "Receive Your Login",
    description: "Receive your private username, password and server URL.",
  },
  {
    number: "04",
    title: "Install the App",
    description: "Use B1G Player on Android or Firestick, or install a compatible alternative player.",
  },
  {
    number: "05",
    title: "Start Watching",
    description: "Enter your account information and allow the available categories to load.",
  },
];

export function SubActivationSteps() {
  return (
    <section
      id="activation-steps"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            How <span className="text-brand-gradient font-bold">Activation Works</span>
          </h2>
        </FadeIn>

        {/* Steps Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch w-full relative">
            {stepsList.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between h-full">
                
                {/* Horizontal separator line on desktop */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-slate-200 z-10" />
                )}

                <div className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col justify-between flex-1 relative z-20">
                  <div>
                    {/* Step Number */}
                    <span className="text-4xl font-extrabold text-[#E01E26]/10 mb-3 block leading-none select-none font-heading">
                      {step.number}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5 leading-snug">
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

      </div>
    </section>
  );
}
