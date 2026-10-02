"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Calendar, MessageCircle, ShieldCheck, KeyRound, Headphones } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

export function SubHero() {
  return (
    <PageHero
      titleParts={[
        { text: "Compare B1G Player Subscription Plans" },
        { text: "in the UK", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Compare B1G Player subscription plans for UK customers. Choose 1, 3, 6 or 12 months, review current prices and connection limits, and check device compatibility before ordering. A short trial may be available for eligible new customers.",
      ]}
      primaryCta={{
        href: buildIntentWhatsAppUrl("freeTrial"),
        label: "Request a Free Trial",
        icon: MessageCircle,
        external: true,
      }}
      secondaryCta={{
        href: buildIntentWhatsAppUrl("planQuestion"),
        label: "Ask a Plan Question",
        icon: Calendar,
        external: true,
      }}
      trustItems={[
        { icon: KeyRound, label: "One connection" },
        { icon: ShieldCheck, label: "Same core catalogue" },
        { icon: Headphones, label: "Setup guidance" },
      ]}
    />
  );
}
