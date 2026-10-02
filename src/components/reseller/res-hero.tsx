"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Users, Headphones, Layout, ShieldCheck, Calendar } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

export function ResHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G Player Reseller Panel for" },
        { text: "UK Credits and Account Management", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Use the B1G Player reseller panel to create and manage eligible customer accounts, allocate credits, monitor expiry dates and process renewals. Compare available UK credit packages and reseller responsibilities before applying.",
      ]}
      primaryCta={{
        href: buildIntentWhatsAppUrl("reseller"),
        label: "Request Reseller Details",
        icon: Users,
        external: true,
      }}
      secondaryCta={{
        href: buildIntentWhatsAppUrl("reseller"),
        label: "Contact the Reseller Team",
        icon: Headphones,
        external: true,
      }}
      trustItems={[
        { icon: Layout, label: "Account management" },
        { icon: Calendar, label: "Credit-based plans" },
        { icon: ShieldCheck, label: "Approved resellers" },
      ]}
    />
  );
}
