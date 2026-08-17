"use client";

import React from "react";
import { PageCta } from "@/components/layout/page-cta";
import { MessageCircle, Calendar } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function ConCTA() {
  return (
    <PageCta
      title={
        <>
          Request a <span className="text-brand-gradient font-bold">B1G IPTV Trial</span>
        </>
      }
      description="Send your device details so support can confirm whether trial access is available."
      primary={{
        href: buildIntentWhatsAppUrl("freeTrial"),
        label: "Request My Free Trial",
        icon: MessageCircle,
        external: true,
      }}
      secondary={{
        href: ROUTES.subscription,
        label: "View B1G IPTV Plans",
        icon: Calendar,
      }}
    />
  );
}
