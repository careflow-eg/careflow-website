"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "../providers/ThemeProvider";
import {
  Mail,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  X,
  UserCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/technology", label: "AI Tech" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const doctorPortalUrl =
    process.env.NEXT_PUBLIC_DOCTOR_PORTAL_URL || "https://doctor.careflowai.health";
  const patientPortalUrl =
    process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || "https://patient.careflowai.health";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-[#021418] text-slate-300 text-xs py-2 px-4 border-b border-teal-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:info@careflowai.health"
              className="flex items-center space-x-1.5 hover:text-teal-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-500" />
              <span>info@careflowai.health</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block text-slate-400">
              A Clinical AI Ecosystem for Egypt's Clinics
            </span>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-1 rounded-md hover:bg-slate-800 text-teal-400 transition-colors flex items-center gap-1 text-xs"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#021418]/90 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-teal-900/30 py-3"
            : "bg-white dark:bg-[#021418] py-4 border-b border-slate-100 dark:border-teal-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-[168px] h-8">
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/assets/img/logo_white.png"
                    : "/assets/img/logo.png"
                }
                alt="CareFlow AI"
                fill
                sizes="(max-width: 768px) 140px, 165px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#06635d] dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#06635d] dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Portals Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPortalsOpen(!isPortalsOpen)}
                onBlur={() => setTimeout(() => setIsPortalsOpen(false), 200)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#06635d] dark:hover:text-teal-300 transition-colors"
              >
                <span>Portals</span>
                <ChevronDown className="w-4 h-4 text-teal-600" />
              </button>

              {isPortalsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#0b1f24] rounded-xl shadow-xl border border-slate-100 dark:border-teal-900/40 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <a
                    href={doctorPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-[#06635d] dark:hover:text-teal-300 transition-colors"
                  >
                    <Stethoscope className="w-4 h-4 text-[#06635d] dark:text-teal-400" />
                    <div>
                      <div className="font-medium">Doctor Portal</div>
                      <div className="text-xs text-slate-400">Clinical Dashboard</div>
                    </div>
                  </a>
                  <a
                    href={patientPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-[#06635d] dark:hover:text-teal-300 transition-colors"
                  >
                    <Users className="w-4 h-4 text-teal-600" />
                    <div>
                      <div className="font-medium">Patient Portal</div>
                      <div className="text-xs text-slate-400">History & Results</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={doctorPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#06635d] hover:bg-[#044c47] dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-[#021418] font-medium text-sm transition-all shadow-md shadow-teal-900/10 hover:shadow-lg hover:shadow-teal-900/20 active:scale-98"
            >
              <UserCheck className="w-4 h-4" />
              <span>Doctor Login</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#06635d]" />
              ) : (
                <Menu className="w-6 h-6 text-[#06635d]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#021418] border-b border-slate-200 dark:border-teal-900/40 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-teal-50 dark:bg-teal-950/60 text-[#06635d] dark:text-teal-400 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Portals &amp; Access
              </div>
              <a
                href={doctorPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#06635d] text-white font-medium text-sm"
              >
                <span>Doctor Portal Login</span>
                <Stethoscope className="w-4 h-4" />
              </a>
              <a
                href={patientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-[#06635d]"
              >
                Patient Portal
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
