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
        { text: "Free Trial and Support", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Request a short B1G IPTV Free Trial to check your device, player and internet connection before choosing a longer subscription.",
        "Trial availability, duration, connection allowance and any catalogue restrictions will be confirmed before activation.",
      ]}
      primaryCta={{
        href: "#trial-form",
        label: "Request My Free Trial",
        icon: MessageCircle,
      }}
      secondaryCta={{
        href: ROUTES.subscription,
        label: "View B1G IPTV Plans",
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
