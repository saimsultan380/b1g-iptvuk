"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { MessageCircle, Download, MonitorSmartphone, ShieldCheck, Wifi } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function DevicesHero() {
  return (
    <PageHero
      titleParts={[
        { text: "Which Devices Support" },
        { text: "B1G Player?", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Check which devices can run B1G Player directly and which require a compatible alternative player. Review support for Firestick, Android TV, Smart TVs, Apple devices, Windows and Mac before choosing a subscription.",
      ]}
      primaryCta={{
        href: buildIntentWhatsAppUrl("deviceCheck"),
        label: "Ask About My Device",
        icon: MessageCircle,
        external: true,
      }}
      secondaryCta={{
        href: ROUTES.installation,
        label: "Open Setup Guide",
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
