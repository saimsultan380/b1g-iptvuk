import type { BreadcrumbItem } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/** Invisible BreadcrumbList schema for Google — not shown in the page UI. */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  if (!items.length) return null;
  return <JsonLd data={buildBreadcrumbJsonLd(items)} />;
}
