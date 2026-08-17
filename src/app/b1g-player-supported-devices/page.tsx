import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { DevicesHero } from "@/components/devices/devices-hero";
import { DevicesTable } from "@/components/devices/devices-table";
import { DevicesGroups } from "@/components/devices/devices-groups";
import { DevicesNetworkChoice } from "@/components/devices/devices-network";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, getSitePage, ROUTES } from "@/lib/seo";

const page = getSitePage(ROUTES.devices)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function SupportedDevicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <DevicesHero />
      <DevicesTable />
      <DevicesGroups />
      <DevicesNetworkChoice />
      <B1GFooter />
    </main>
  );
}
