"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Installation Guide", href: "/installation-guide" },
  { name: "Subscription Plans", href: "/b1g-iptv-subscription" },
  { name: "Reseller Panel", href: "/reseller-panel" },
  { name: "Contact Us", href: "/contact" },
];

/** Shared frosted-glass surface — desktop header + mobile navbar use the exact same look */
const glassSurface =
  "border border-white/40 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/55";

export function B1GHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((wasOpen) => {
      const willOpen = !wasOpen;

      // Pin sticky header to the top of the viewport when opening
      if (willOpen && headerRef.current) {
        const offset = headerRef.current.getBoundingClientRect().top - 12;
        if (Math.abs(offset) > 1) {
          window.scrollBy({ top: offset, behavior: "instant" });
        }
      }

      return willOpen;
    });
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 lg:px-8 max-w-[1280px] mx-auto"
    >
      {/* 
        DESKTOP HEADER CONTAINER 
        Floating Bar (~84px tall, rounded-[12px], frosted glass)
      */}
      <div
        className={`hidden lg:flex h-[84px] w-full items-center justify-between rounded-[12px] px-8 overflow-hidden ${glassSurface}`}
      >
        
        {/* 1) LEFT: Logo image only (square ~64x64, object-contain) */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/logo.PNG"
              alt="B1G Player Logo"
              width={64}
              height={64}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* 2) CENTER: Horizontal Nav (5 text links in 1 row, even ~32px gaps) */}
        <nav className="flex items-center gap-8 text-base font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#E01E26] whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3) RIGHT: Primary CTA “Get Started” (~44px tall, rounded-[12px]) */}
        <div className="flex items-center shrink-0">
          <Button
            variant="primary"
            className="h-[44px] px-6 rounded-[12px] text-sm font-semibold bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white whitespace-nowrap"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* 
        MOBILE HEADER
        In-flow height stays 64px always so hero content never shifts.
        Open menu overlays content via absolute positioning (no shadow).
      */}
      <div className="relative lg:hidden w-full h-[64px]">
        <div
          className={`absolute top-0 left-0 right-0 z-50 flex flex-col w-full rounded-[12px] overflow-hidden ${glassSurface}`}
        >
          {/* Collapsed Top Bar (~64px tall) */}
          <div className="flex h-[64px] items-center justify-between px-5 shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-[54px] h-[54px] flex items-center justify-center transition-transform duration-300 group-active:scale-[1.02]">
                <Image
                  src="/logo.PNG"
                  alt="B1G Player Logo"
                  width={54}
                  height={54}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 text-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#E01E26]" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Overlay panel — frosted glass, does not affect document flow / hero position */}
          <AnimatePresence initial={false}>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-menu-overlay"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden border-t border-white/40 bg-transparent"
              >
                <div className="p-5 flex flex-col gap-5">
                  <nav className="flex flex-col gap-3.5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[17px] font-semibold text-slate-800 py-3 border-b border-white/40"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full h-[48px] rounded-[12px] text-base font-semibold bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
