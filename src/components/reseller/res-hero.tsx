"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Users, Headphones, Layout, ShieldCheck, Calendar } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

export function ResHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G IPTV Reseller Panel for" },
        { text: "UK Account Management", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "The reseller panel is an account-management system for approved commercial resellers. Depending on the package, it may allow authorised users to create, extend and manage customer accounts using purchased credits.",
        "It is not a guaranteed-income scheme or permission to market content without the required authority.",
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
