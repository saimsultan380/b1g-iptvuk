"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { MessageCircle, Calendar, CheckCircle2, Settings, ShieldCheck } from "lucide-react";
import { ROUTES } from "@/lib/seo";

export function ConHero() {
  return (
    <PageHero
      titleParts={[
        { text: "Contact B1G Player for a" },
        { text: "UK Trial and Subscription Help", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Contact B1G Player support to request a UK trial, compare subscription options, confirm device compatibility or ask for help with installation, activation, login problems, renewals, refunds and reseller access.",
      ]}
      primaryCta={{
        href: "#trial-form",
        label: "Request My Free Trial",
        icon: MessageCircle,
      }}
      secondaryCta={{
        href: ROUTES.subscription,
        label: "Compare B1G Player Plans",
        icon: Calendar,
      }}
      trustItems={[
        { icon: CheckCircle2, label: "Device testing" },
        { icon: Settings, label: "Setup support" },
        { icon: ShieldCheck, label: "Account help" },
      ]}
    />
  );
}
