"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  clinic: z.string().min(2, "Clinic / Organization name is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      // Simulate API form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Contact form submitted:", data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0b1f24] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-teal-900/40 shadow-xl">
      {isSuccess ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Thank You for Reaching Out!
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Your inquiry has been received by our clinical team. A CareFlow representative will contact you within 24 business hours to arrange your platform demo.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[#06635d] text-white text-sm font-semibold hover:bg-[#044c47] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Request a Platform Demo or Information
          </h3>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-50 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Full Name *
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Dr. Sarah Jenkins"
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06171a] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  errors.name
                    ? "border-rose-500"
                    : "border-slate-200 dark:border-teal-900/60"
                }`}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Address *
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="s.jenkins@healthclinic.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06171a] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  errors.email
                    ? "border-rose-500"
                    : "border-slate-200 dark:border-teal-900/60"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Clinic */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Clinic / Healthcare Center *
            </label>
            <input
              {...register("clinic")}
              type="text"
              placeholder="Apex Internal Medicine Clinic"
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06171a] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.clinic
                  ? "border-rose-500"
                  : "border-slate-200 dark:border-teal-900/60"
              }`}
            />
            {errors.clinic && (
              <p className="text-[11px] text-rose-500">{errors.clinic.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Message / Deployment Inquiry *
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your clinic specialty, estimated daily patient volume, and key documentation goals..."
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06171a] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.message
                  ? "border-rose-500"
                  : "border-slate-200 dark:border-teal-900/60"
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-[#06635d] hover:bg-[#044c47] dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-[#021418] font-bold text-sm transition-all shadow-md disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Demo Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
