"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { PageCta } from "@/components/layout/page-cta";
import {
  MessageCircle,
  Calendar,
  ShieldCheck,
  Scale,
  Send,
  CheckCircle2,
  Star,
} from "lucide-react";
import { ROUTES, WHATSAPP_FROM_SITE, buildIntentWhatsAppUrl, buildWhatsAppUrl } from "@/lib/seo";

export function ReviewsHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G Player Reviews and" },
        { text: "Customer Feedback", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Helpful reviews explain the customer’s device, installation experience, account support and any limitations encountered.",
        "Only genuine reviews submitted with permission are published. Names, ratings or quotations are not invented.",
      ]}
      primaryCta={{
        href: buildIntentWhatsAppUrl("freeTrial"),
        label: "Request a Trial",
        icon: MessageCircle,
        external: true,
      }}
      secondaryCta={{
        href: ROUTES.subscription,
        label: "Compare Plans",
        icon: Calendar,
      }}
      trustItems={[
        { icon: ShieldCheck, label: "Verified interaction" },
        { icon: Scale, label: "Honest criticism kept" },
        { icon: Star, label: "Permission required" },
      ]}
    />
  );
}

export function ReviewsBody() {
  const checks = [
    "Order reference",
    "Account username",
    "Order email",
    "Support telephone number",
    "Verified support interaction",
  ];
  const rejected = [
    "Passwords",
    "Playlist or server details",
    "Payment information",
    "Personal information about another person",
    "Threats or harassment",
    "Copied review text",
    "Spam links",
    "Undisclosed incentives",
    "Claims unrelated to the experience",
  ];

  return (
    <>
      <section id="genuine-reviews" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Genuine Customer{" "}
              <span className="text-brand-gradient font-bold">Reviews</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Verified customer reviews will appear here once they have been submitted with permission and checked against a genuine order or support interaction. No placeholder names, ratings or quotations are shown.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="how-checked" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              How Reviews Are{" "}
              <span className="text-brand-gradient font-bold">Checked</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                A customer relationship may be confirmed using:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {checks.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Never ask for the account password. Verification confirms that the reviewer had a genuine interaction. It does not prove every opinion expressed.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="moderation" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Review <span className="text-brand-gradient font-bold">Moderation</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                Submissions may be rejected if they contain:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {rejected.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Reasonable criticism should not be removed merely because it is negative.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export function ReviewsForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    reference: "",
    device: "",
    plan: "",
    review: "",
    honest: false,
    permission: false,
    privacy: false,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.honest || !form.permission || !form.privacy) {
      alert("Please confirm the honest-experience, publication and privacy statements.");
      return;
    }
    const message = [
      `${WHATSAPP_FROM_SITE} I would like to submit a review.`,
      `Name: ${form.name}`,
      `Order contact: ${form.contact}`,
      `Order reference or username: ${form.reference}`,
      `Device: ${form.device}`,
      `Plan: ${form.plan}`,
      `Review: ${form.review}`,
    ].join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26]";

  return (
    <section id="leave-a-review" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Leave a <span className="text-brand-gradient font-bold">Review</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10">
          {sent ? (
            <div className="text-center py-8">
              <div className="h-14 w-14 rounded-full bg-red-50 text-[#E01E26] flex items-center justify-center mb-5 mx-auto">
                <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#12141F] mb-2">Review submitted</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Support will check the interaction before any publication.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Name", required: true },
                  { name: "contact", label: "Order contact", required: true },
                  { name: "reference", label: "Order reference or username", required: true },
                  { name: "device", label: "Device", required: true },
                  { name: "plan", label: "Plan" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                      {field.label} {field.required && <span className="text-[#E01E26]">*</span>}
                    </label>
                    <input
                      name={field.name}
                      required={field.required}
                      value={form[field.name as keyof typeof form] as string}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                  Review <span className="text-[#E01E26]">*</span>
                </label>
                <textarea
                  name="review"
                  required
                  rows={5}
                  value={form.review}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <label className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <input type="checkbox" name="honest" checked={form.honest} onChange={handleChange} className="mt-1" />
                Honest-experience confirmation
              </label>
              <label className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <input type="checkbox" name="permission" checked={form.permission} onChange={handleChange} className="mt-1" />
                Publication permission
              </label>
              <label className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} className="mt-1" />
                I accept the{" "}
                <Link href={ROUTES.privacy} className="text-[#E01E26] underline">
                  Privacy Policy
                </Link>
              </label>
              <Button
                type="submit"
                className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Send className="h-4 w-4 mr-2 stroke-[2.5]" />
                Submit My Review
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export function ReviewsDecision() {
  return (
    <>
      <section id="informed-decision" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
              Make an <span className="text-brand-gradient font-bold">Informed Decision</span>
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              Reviews are one signal. Customers should also check compatibility, request a trial, compare the plans and read the refund policy.
            </p>
          </FadeIn>
        </div>
      </section>
      <PageCta
        title={
          <>
            Request a <span className="text-brand-gradient font-bold">Trial</span>
          </>
        }
        description="Test your device first, then compare the available subscription durations."
        primary={{
          href: buildIntentWhatsAppUrl("freeTrial"),
          label: "Request a Trial",
          icon: MessageCircle,
          external: true,
        }}
        secondary={{
          href: ROUTES.subscription,
          label: "Compare Plans",
          icon: Calendar,
        }}
      />
    </>
  );
}
