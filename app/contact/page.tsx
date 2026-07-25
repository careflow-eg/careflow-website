import React from "react";
import Metadata from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Mail, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact CareFlow AI | Request a Demo",
  description:
    "Get in touch with CareFlow AI. Contact our clinical deployment team or request a 1-on-1 platform demonstration for your practice.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            Contact &amp; Deployment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Connect with CareFlow AI
          </h1>
          <p className="text-slate-300 text-lg">
            Have questions about clinical integration, platform pricing, or security compliance? Our team is here to support you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Headquarters &amp; Support
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Our clinical implementation specialists provide technical onboarding and 24/7 dedicated support for partner clinics.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Medical Center Address</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">CareFlow Medical Center, 1 Health Plaza</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Email Inquiries</h3>
                    <a href="mailto:info@careflowai.health" className="text-xs text-teal-600 dark:text-teal-400 hover:underline mt-1 block">
                      info@careflowai.health
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Support Availability</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">24/7 Clinical Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
