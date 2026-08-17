"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";
import { WHATSAPP_FROM_SITE, buildWhatsAppUrl } from "@/lib/seo";

const applySteps = [
  "Request the current reseller information.",
  "Provide genuine business and contact details.",
  "Explain the intended customer market.",
  "Review a panel demonstration.",
  "Review the credit table.",
  "Read the reseller agreement.",
  "Complete any required checks.",
  "Start with a manageable credit level.",
];

export function ResApply() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    country: "",
    website: "",
    email: "",
    whatsapp: "",
    activations: "",
    experience: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `${WHATSAPP_FROM_SITE} I want to request reseller details.`,
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Country: ${form.country}`,
      `Website: ${form.website || "Not provided"}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Expected activations: ${form.activations}`,
      `Support experience: ${form.experience}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26]";

  return (
    <section id="how-to-apply" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            How to <span className="text-brand-gradient font-bold">Apply</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <FadeIn className="lg:col-span-5">
            <ol className="space-y-3">
              {applySteps.map((step, idx) => (
                <li key={step} className="flex items-start gap-3 rounded-[12px] border border-slate-200 bg-white p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn className="lg:col-span-7">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="h-14 w-14 rounded-full bg-red-50 text-[#E01E26] flex items-center justify-center mb-5 mx-auto">
                    <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#12141F] mb-2">Application opened in WhatsApp</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Support will review your details and confirm whether reseller access can be offered.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Name", required: true },
                    { name: "business", label: "Business name", required: true },
                    { name: "country", label: "Country", required: true },
                    { name: "website", label: "Website" },
                    { name: "email", label: "Email", required: true, type: "email" },
                    { name: "whatsapp", label: "WhatsApp", required: true },
                    { name: "activations", label: "Expected activations" },
                    { name: "experience", label: "Support experience" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col">
                      <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                        {field.label} {field.required && <span className="text-[#E01E26]">*</span>}
                      </label>
                      <input
                        name={field.name}
                        type={field.type || "text"}
                        required={field.required}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2 flex flex-col">
                    <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                      Message <span className="text-[#E01E26]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
                    >
                      <Send className="h-4 w-4 mr-2 stroke-[2.5]" />
                      Request Reseller Details
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
