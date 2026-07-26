"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900">
            Aura Motion
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-slate-950 transition-colors">
            Motion Rules
          </Link>
          <Link href="#components" className="hover:text-slate-950 transition-colors">
            Components
          </Link>
          <Link href="#typography" className="hover:text-slate-950 transition-colors">
            Typography
          </Link>
          <Link href="#metrics" className="hover:text-slate-950 transition-colors">
            Performance
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Documentation
          </Button>
          <Button variant="primary" size="sm">
            <span>Get Started</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
