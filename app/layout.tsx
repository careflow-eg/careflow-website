import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "CareFlow AI — Connected AI Clinical Care & Assistant Platform",
    template: "%s | CareFlow AI Platform",
  },
  description:
    "CareFlow is an AI Clinical Assistant that empowers physicians by automating clinical documentation, structuring patient history, analyzing lab & radiology reports, and generating real-time clinical decision support.",
  keywords: [
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
    title: "CareFlow AI — Connected AI Clinical Care & Assistant Platform",
    description:
      "Automating clinical documentation, structuring patient history, analyzing lab & radiology reports for board-certified physicians.",
    siteName: "CareFlow AI",
    images: [
      {
        url: "/assets/img/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "CareFlow Clinical Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareFlow AI Platform",
    description:
      "Empowering clinical decisions with AI history intake, lab OCR, and radiology insights.",
    images: ["/assets/img/hero-bg.png"],
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#021418] text-slate-900 dark:text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
