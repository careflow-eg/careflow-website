"use client";

import React from "react";
import Image from "next/image";

export function TrustedBy() {
  const partners = [
    { name: "St. Jude Health System", logo: "/assets/img/clients/client-1.png" },
    { name: "Metro General Hospital", logo: "/assets/img/clients/client-2.png" },
    { name: "Apex Medical Network", logo: "/assets/img/clients/client-3.png" },
    { name: "CareFirst Alliance", logo: "/assets/img/clients/client-4.png" },
    { name: "University Clinic Group", logo: "/assets/img/clients/client-5.png" },
    { name: "Horizon Health", logo: "/assets/img/clients/client-6.png" },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-[#061518] border-y border-slate-200/60 dark:border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
          Trusted by leading clinics, health systems, and specialty networks
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80 dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative h-10 w-32 flex items-center justify-center p-2 hover:scale-105 transition-transform"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
