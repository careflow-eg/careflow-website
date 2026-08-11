import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Mail, Clock } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/layout/AnimatedWrapper";

export const metadata = {
  title: "Book a Demonstration",
  description:
    "See CareFlow run on a real patient in your own clinic. Book a demonstration or ask us anything about pricing, privacy or how it fits your practice.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
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
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]">
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
                <AnimatedCard delay={0.1} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:border-teal-400/50 group">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-teal-400 transition-colors">Medical Center Address</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Cairo, Egypt</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:border-teal-400/50 group">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-teal-400 transition-colors">Email Inquiries</h3>
                    <a href="mailto:info@careflowai.health" className="text-xs text-teal-600 dark:text-teal-400 hover:underline mt-1 block">
                      info@careflowai.health
                    </a>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:border-teal-400/50 group">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-teal-400 transition-colors">Support Availability</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">24/7 Clinical Emergency Support</p>
                  </div>
                </AnimatedCard>
              </div>
            </div>

            {/* Interactive Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
