"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { MessageCircle, Download, MonitorSmartphone, ShieldCheck, Wifi } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function DevicesHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G Player Supported Devices" },
        { text: "and Compatibility", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "B1G Player works directly on compatible Fire TV and Android devices. Samsung, LG, Apple, Windows and Mac users normally add their B1G IPTV account to a compatible third-party player.",
        "Check the exact device model and operating system before ordering.",
      ]}
      primaryCta={{
        href: buildIntentWhatsAppUrl("deviceCheck"),
        label: "Ask About My Device",
        icon: MessageCircle,
        external: true,
      }}
      secondaryCta={{
        href: ROUTES.installation,
        label: "Open Installation Guide",
        icon: Download,
      }}
      trustItems={[
        { icon: MonitorSmartphone, label: "Fire TV and Android" },
        { icon: ShieldCheck, label: "Third-party player options" },
        { icon: Wifi, label: "Network planning" },
      ]}
    />
  );
}
