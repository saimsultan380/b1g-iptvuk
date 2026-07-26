"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is B1G Player?",
    answer: "B1G Player is the official IPTV application used with an active B1G IPTV subscription on compatible Android and Fire TV devices.",
  },
  {
    question: "Does the app come with the subscription?",
    answer: "Yes. Access to the official player is included with each active subscription.",
  },
  {
    question: "What does a B1G IPTV subscription include?",
    answer: "It may include more than 35,000 live channels, 50,000+ movies, 10,000+ television series, sports, EPG, Catch-Up and customer support.",
  },
  {
    question: "Which devices support the official app?",
    answer: "The app supports compatible Android Smart TVs, Android boxes, Firestick, Fire TV, Android phones and tablets.",
  },
  {
    question: "Can I use the subscription on Samsung or LG?",
    answer: "Yes. Install a compatible third-party player and enter the information supplied after activation.",
  },
  {
    question: "Is there a free trial?",
    answer: "A trial may be requested before purchasing. Availability may depend on current demand and support capacity.",
  },
  {
    question: "Does the service support 4K?",
    answer: "Selected streams may be available in 4K where supported. Actual quality depends on the source, device and connection.",
  },
  {
    question: "How quickly is the subscription activated?",
    answer: "Most accounts are activated after the order has been confirmed and the required customer information has been received.",
  },
  {
    question: "Where can I get setup help?",
    answer: "Visit the Installation Guide or contact the support team.",
  },
  {
    question: "Can businesses resell B1G IPTV?",
    answer: "Yes. Eligible businesses can apply through the reseller page.",
  },
];

export function B1GFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns for desktop layout
  const midIndex = Math.ceil(faqList.length / 2);
  const leftColFaqs = faqList.slice(0, midIndex);
  const rightColFaqs = faqList.slice(midIndex);

  const renderFaqItem = (item: FAQItem, absoluteIndex: number) => {
    const isOpen = openIndex === absoluteIndex;
    return (
      <div
        key={absoluteIndex}
        data-reveal
        data-delay={String((absoluteIndex % 3) * 50)}
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          onClick={() => toggleFAQ(absoluteIndex)}
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

        {/* Answer Expandable Area */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0 border-t border-slate-100/50 mt-1">
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              Support Center
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Frequently Asked <span className="text-brand-gradient font-bold">Questions</span>
          </h2>
        </FadeIn>

        {/* ── Accordion List Layout: 2 Columns on Large Screens ── */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            
            {/* Left Column FAQs */}
            <div className="flex flex-col gap-4 w-full">
              {leftColFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
            </div>

            {/* Right Column FAQs */}
            <div className="flex flex-col gap-4 w-full">
              {rightColFaqs.map((faq, idx) => renderFaqItem(faq, idx + midIndex))}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
