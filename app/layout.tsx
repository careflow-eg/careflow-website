import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://careflowai.health"),
  title: {
    default: "CareFlow — A Clinical AI Ecosystem for Egypt's Clinics",
    template: "%s | CareFlow AI Platform",
  },
  description:
    "CareFlow takes the patient's history by voice in Egyptian Arabic, reads their laboratory reports and radiology images, and gives the doctor one evidence-backed dashboard before the consultation begins.",
  keywords: [
    "Clinical AI Egypt",
    "Arabic medical AI",
    "AI Healthcare",
    "Clinical Decision Support",
    "AI Medical Assistant",
    "Medical AI Platform",
    "Healthcare AI",
    "Medical Documentation AI",
    "CareFlow",
  ],
  authors: [{ name: "CareFlow AI Team" }],
  creator: "CareFlow AI",
  publisher: "CareFlow Health",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careflowai.health",
    title: "CareFlow — A Clinical AI Ecosystem for Egypt's Clinics",
    description:
      "Patient history taken by voice in Egyptian Arabic, laboratory reports and radiology images read, and one evidence-backed dashboard ready before the consultation begins.",
    siteName: "CareFlow AI",
    images: [
      {
        url: "/assets/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareFlow — a clinical AI ecosystem for Egypt's independent clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareFlow — A Clinical AI Ecosystem",
    description:
      "History taken before the consultation. Laboratory reports and radiology images read. One evidence-backed dashboard.",
    images: ["/assets/img/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/assets/img/favicon.png", type: "image/png" },
    ],
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#021418] text-slate-900 dark:text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
