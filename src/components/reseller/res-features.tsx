"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  UserPlus,
  Coins,
  Calendar,
  RefreshCw,
  Clock,
  Key,
  Share2,
  Lock,
} from "lucide-react";

interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const featuresList: FeatureCard[] = [
  {
    title: "Customer Creation",
    desc: "Create a new customer account and choose the required duration.",
    icon: UserPlus,
  },
  {
    title: "Credit Management",
    desc: "View your available balance and the credits required for each account type.",
    icon: Coins,
  },
  {
    title: "Subscription Durations",
    desc: "Offer available periods such as: 1 month, 3 months, 6 months, or 12 months.",
    icon: Calendar,
  },
  {
    title: "Account Renewal",
    desc: "Renew eligible customer accounts using the available credit balance.",
    icon: RefreshCw,
  },
  {
    title: "Expiry Tracking",
    desc: "Review account end dates and organize renewal reminders.",
    icon: Clock,
  },
  {
    title: "Trial Creation",
    desc: "Where permitted, create short trial accounts for potential customers.",
    icon: Key,
  },
  {
    title: "Connection Management",
    desc: "Choose the available connection option where the panel supports multiple connections.",
    icon: Share2,
  },
  {
    title: "Secure Access",
    desc: "Use private reseller credentials and do not share them with customers or unauthorized team members.",
    icon: Lock,
  },
];

export function ResFeatures() {
  return (
    <section
      id="panel-features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Reseller Panel <span className="text-brand-gradient font-bold">Features</span>
          </h2>
        </FadeIn>

        {/* Features Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {featuresList.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] border border-slate-200 bg-white p-5 flex flex-col justify-between h-full hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#12141F] leading-none font-heading">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
