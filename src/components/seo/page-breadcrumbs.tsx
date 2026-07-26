import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbJsonLd, canonicalPath } from "@/lib/seo";

type PageBreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Hide visual trail on homepage; JSON-LD still emitted when items exist. */
  showVisual?: boolean;
};

export function PageBreadcrumbs({
  items,
  showVisual = true,
}: PageBreadcrumbsProps) {
  if (!items.length) return null;

  const jsonLd = buildBreadcrumbJsonLd(items);
  const showNav = showVisual && items.length > 1;

  return (
    <>
      <JsonLd data={jsonLd} />
      {showNav ? (
        <nav
          aria-label="Breadcrumb"
          className="mx-auto w-full max-w-[1280px] px-3 sm:px-6 lg:px-8 pt-2 pb-1"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-semibold">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const href = canonicalPath(item.path);

              return (
                <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-slate-300 shrink-0"
                      aria-hidden
                    />
                  ) : null}
                  {isLast ? (
                    <span className="text-[#12141F]" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="hover:text-[#E01E26] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}
    </>
  );
}
