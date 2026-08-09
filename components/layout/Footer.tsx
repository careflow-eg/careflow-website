"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ArrowUp,
  Stethoscope,
  Shield,
  Activity,
  HeartPulse,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const doctorPortalUrl =
    process.env.NEXT_PUBLIC_DOCTOR_PORTAL_URL || "https://doctor.careflowai.health";
  const patientPortalUrl =
    process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || "https://patient.careflowai.health";

  return (
    <footer className="bg-[#021418] text-slate-300 relative pt-16 pb-8 border-t border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-teal-950">
          {/* Brand & Contact Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-[168px] h-8">
                <Image
                  src="/assets/img/logo_white.png"
                  alt="CareFlow"
                  fill
                  sizes="(max-width: 768px) 140px, 165px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              CareFlow is a clinical AI ecosystem for Egypt&apos;s independent clinics. It takes the patient&apos;s history by voice in Egyptian Arabic, reads their laboratory reports and radiology images, and gives the doctor one evidence-backed dashboard before the consultation begins.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-teal-950/60 text-teal-400 border border-teal-800/40">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-teal-950/60 text-teal-400 border border-teal-800/40">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:info@careflowai.health"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@careflowai.health
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Platform */}
            <div className="space-y-4">
              <h2 className="text-white font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-400" />
                Platform
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-teal-400 transition-colors"
                  >
                    AI Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-teal-400 transition-colors"
                  >
                    How CareFlow Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technology"
                    className="hover:text-teal-400 transition-colors"
                  >
                    AI Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-clinics"
                    className="hover:text-teal-400 transition-colors"
                  >
                    For Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-teal-400 transition-colors"
                  >
                    About CareFlow
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Portals & Help */}
            <div className="space-y-4">
              <h2 className="text-white font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-teal-400" />
                Specialists & Portals
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={doctorPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>Doctor Portal Login</span>
                  </a>
                </li>
                <li>
                  <a
                    href={patientPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Patient Intake Portal
                  </a>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Specialty Coverage & FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Trust & Legal */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h2 className="text-white font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                Trust &amp; Legal
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/security"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Security &amp; Data Protection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Security &amp; Data Protection FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Request Platform Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CareFlow. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Use
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-teal-950 hover:bg-teal-900 text-teal-400 border border-teal-800/40 transition-all flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
