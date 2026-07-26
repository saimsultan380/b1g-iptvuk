"use client";

import React from "react";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 bg-white">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1155/678] w-[72.1875rem] flex-none bg-gradient-to-tr from-slate-200 to-slate-100 opacity-60"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge Row (FadeIn delay 0.36) */}
          <FadeIn delay={0.36} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Light Theme & Color-Agnostic Motion</span>
            </div>
          </FadeIn>

          {/* H1 Word-by-Word Mask Reveal */}
          <div className="max-w-4xl">
            <MaskReveal
              text="Fluid, Purposeful Motion Systems Designed for Modern Web Apps"
              className="text-h1 text-slate-900 justify-center tracking-tight"
              delay={0}
              stagger={0.05}
              duration={0.85}
              trigger="mount"
            />
          </div>

          {/* Body Copy (FadeIn delay 0.2) */}
          <FadeIn delay={0.2} className="mt-6 max-w-2xl">
            <p className="text-body text-slate-600 sm:text-lg">
              Engineered with Next.js App Router, Tailwind CSS v4, and Framer Motion. 
              Respects reduced motion preferences automatically with responsive mobile-first typography.
            </p>
          </FadeIn>

          {/* CTAs (FadeIn delay 0.28) */}
          <FadeIn delay={0.28} className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <span>Explore Motion System</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4 text-slate-700 fill-slate-700" />
              <span>Watch Interactive Demo</span>
            </Button>
          </FadeIn>

          {/* Hero Dashboard Preview Image (FadeIn delay 0.08) */}
          <FadeIn delay={0.08} className="mt-12 sm:mt-16 w-full max-w-5xl">
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-2xl shadow-slate-900/10">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
                {/* Mockup Topbar */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                  </div>
                  <div className="h-5 w-48 rounded-md bg-slate-200/70 text-[10px] text-slate-400 flex items-center justify-center font-mono">
                    aura-motion-system.config.ts
                  </div>
                  <div className="h-4 w-4 rounded bg-slate-200" />
                </div>

                {/* Mockup Dashboard Content */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs flex flex-col items-start">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-900 mb-3">
                      <Zap className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">CTA Hover Curve</span>
                    <span className="text-base font-bold text-slate-900 mt-1">scale(1.04) / 0.2s</span>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs flex flex-col items-start">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-900 mb-3">
                      <Layers className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">Scroll Reveal</span>
                    <span className="text-base font-bold text-slate-900 mt-1">y: 22px / stagger 55ms</span>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs flex flex-col items-start">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-900 mb-3">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">Accessibility</span>
                    <span className="text-base font-bold text-slate-900 mt-1">prefers-reduced-motion</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Trust Row */}
          <FadeIn delay={0.36} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>React 19 Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Tailwind CSS v4</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Zero Jank Animation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Strict Light Mode</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
