"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisCard } from "@/components/animation/telvis-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  id?: string;
  title?: string;
  items: FaqItem[];
};

export function FaqSection({
  id = "faq",
  title = "Frequently Asked Questions",
  items,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const midIndex = Math.ceil(items.length / 2);
  const leftCol = items.slice(0, midIndex);
  const rightCol = items.slice(midIndex);

  const renderItem = (item: FaqItem, absoluteIndex: number) => {
    const isOpen = openIndex === absoluteIndex;
    return (
      <TelvisCard
        key={item.question}
        index={absoluteIndex}
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          type="button"
          onClick={() => setOpenIndex(isOpen ? null : absoluteIndex)}
          className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
            {item.question}
          </span>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              isOpen ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"
            }`}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
            ) : (
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0 border-t border-slate-100/50 mt-1">
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </TelvisCard>
    );
  };

  const titleParts = title.split(" ");
  const lastWord = titleParts.pop() ?? "";
  const titleStart = titleParts.join(" ");

  return (
    <section id={id} className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              Support Centre
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            {titleStart}{" "}
            <span className="text-brand-gradient font-bold">{lastWord}</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
          <div className="flex flex-col gap-4 w-full">
            {leftCol.map((faq, idx) => renderItem(faq, idx))}
          </div>
          <div className="flex flex-col gap-4 w-full">
            {rightCol.map((faq, idx) => renderItem(faq, idx + midIndex))}
          </div>
        </div>
      </div>
    </section>
  );
}
