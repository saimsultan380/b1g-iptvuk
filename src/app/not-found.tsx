import type { Metadata } from "next";
import Link from "next/link";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | B1G Player",
  },
  description:
    "The page you requested could not be found. Return to B1G Player home or browse subscription plans, installation guides and support.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const helpfulLinks = [
  { name: "Home", href: "/" },
  { name: "Subscription Plans", href: "/b1g-iptv-subscription/" },
  { name: "Installation Guide", href: "/b1g-player-installation-guide/" },
  { name: "Reseller Panel", href: "/b1g-player-reseller/" },
  { name: "Contact Us", href: "/contact/" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <B1GHeader />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl w-full text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01E26] mb-4">
            Error 404
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12141F] tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-10 max-w-lg mx-auto">
            The page you are looking for does not exist, was moved, or the URL
            may be mistyped. Use the links below to continue.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12">
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full h-[48px] rounded-[12px] px-8 text-sm font-semibold bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white"
              >
                Back to Home
              </Button>
            </Link>
            <Link href="/contact/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full h-[48px] rounded-[12px] px-8 text-sm font-semibold border-2 border-slate-200 text-[#12141F] hover:bg-slate-50"
              >
                Contact Support
              </Button>
            </Link>
          </div>

          <nav aria-label="Helpful links">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-slate-600 hover:text-[#E01E26] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <B1GFooter />
    </main>
  );
}
