"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Tv,
  Film,
  MonitorPlay,
  Radio,
  Newspaper,
  Baby,
  BookOpen,
  Globe,
  CalendarClock,
  Rewind,
  Maximize2,
  ArrowRight,
  Zap,
  KeyRound,
  Link2,
  LayoutList,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";

const contentStats = [
  { value: "35,000+", label: "Live TV Channels", icon: Tv },
  { value: "50,000+", label: "Movies", icon: Film },
  { value: "10,000+", label: "TV Series", icon: MonitorPlay },
];

const contentCategories = [
  { label: "UK & International Channels", icon: Globe },
  { label: "Sports Coverage", icon: Radio },
  { label: "News", icon: Newspaper },
  { label: "Children's Programming", icon: Baby },
  { label: "Documentaries", icon: BookOpen },
  { label: "International Entertainment", icon: Globe },
  { label: "Electronic Programme Guide", icon: CalendarClock },
  { label: "Catch-Up TV where available", icon: Rewind },
  { label: "HD, Full HD & 4K Streams", icon: Maximize2 },
];

const activationItems = [
  { label: "Private username", icon: KeyRound },
  { label: "Private password", icon: ShieldCheck },
  { label: "Server URL", icon: Link2 },
  { label: "App installation instructions", icon: LayoutList },
  { label: "Alternative-player details where required", icon: Tv },
];

const supportItems = [
  "Trial requests",
  "Plan selection",
  "Application installation",
  "Login assistance",
  "Subscription activation",
  "Renewal questions",
  "Supported-device guidance",
];

export function WhyUKViewers() {
  return (
    <section
      id="why-uk-viewers"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Why UK Viewers Choose{" "}
            <span className="text-brand-gradient font-bold">B1G IPTV</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              People comparing IPTV services usually want more than a large content figure. They also need clear account access, straightforward installation, popular-device support and help when a setup problem occurs.
            </p>
            <p>
              B1G IPTV is designed for viewers throughout England, Scotland, Wales and Northern Ireland.
            </p>
          </div>
        </FadeIn>

        {/* ── ROW 1: Content Stats + Categories ── */}
        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 w-full items-stretch">

            {/* LEFT Heading: occupying 4 cols on desktop */}
            <div className="lg:col-span-4">
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                An active subscription may provide access to:
              </h3>
            </div>

            {/* RIGHT Spacer: occupying 8 cols on desktop to align row 2 cards */}
            <div className="lg:col-span-8 hidden lg:block" />

            {/* LEFT: Stat Cards */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {contentStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    data-reveal
                    data-delay={String(idx * 100)}
                    className="flex items-center gap-4 rounded-[12px] border border-slate-200 bg-white p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div>
                      <p className="text-xl font-heading font-medium text-[#12141F] leading-none">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Categories Box */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between flex-1 h-full">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 w-full">
                  {contentCategories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <li key={idx} data-reveal data-delay={String((idx % 3) * 50)} className="flex items-center gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#E01E26]">
                          <Icon className="h-3.5 w-3.5 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {cat.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-t border-slate-100 pt-4 mt-6">
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    The exact selection may change as channels, programmes and on-demand libraries are updated. Individual events, competitions or channels should only be treated as included when confirmed within the current package information.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* ── ROW 2: Instant Activation | Official App | UK Support ── */}
        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full">

            {/* Card 1: Instant Account Activation */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                  <Zap className="h-4.5 w-4.5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                  Instant Account Activation
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                After the order has been confirmed, customers receive the information required to sign in. This normally includes:
              </p>
              <ul className="space-y-2.5 flex-1">
                {activationItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#E01E26] mt-0.5">
                        <Icon className="h-3 w-3 stroke-[2]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Card 2: Official App Access */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                  <ShieldCheck className="h-4.5 w-4.5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                  Official App Access
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed flex-1">
                Every active B1G IPTV subscription includes access to the B1G Player app for supported Android and Fire TV devices. The app provides a clean, dedicated interface that keeps your account information and available content in one place — no switching between external players.
              </p>
            </div>

            {/* Card 3: UK Customer Assistance */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                  <HeadphonesIcon className="h-4.5 w-4.5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                  UK Customer Assistance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Support is available for:
              </p>
              <ul className="space-y-2.5 flex-1">
                {supportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/contact/" className="mt-auto">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full rounded-[10px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white text-xs font-semibold py-2.5"
                >
                  <span>Contact B1G Player Support</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 stroke-[2.5]" />
                </Button>
              </Link>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
