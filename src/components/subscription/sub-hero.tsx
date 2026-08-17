"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Calendar, MessageCircle, ShieldCheck, KeyRound, Headphones } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

export function SubHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G IPTV Subscription Plans and Prices" },
        { text: "in the UK", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Choose one, three, six or twelve months. Every standard B1G IPTV Subscription includes the same core service, one active connection, private account details and setup guidance.",
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
