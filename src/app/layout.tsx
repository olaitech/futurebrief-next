import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/ui/site-header";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/**
 * Root metadata
 * – Holdes bevisst kort og språk-nøytral
 * – Overstyres per språk/side senere (EN / NO)
 */
export const metadata: Metadata = {
  title: {
    default: "FutureBrief",
    template: "%s · FutureBrief",
  },
  description:
    "Practical AI applications, web design, and early-stage product concepts.",
  metadataBase: new URL("https://futurebrief.no"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "FutureBrief",
    title: "FutureBrief",
    description:
      "Practical AI applications, web design, and early-stage product concepts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureBrief",
    description:
      "Practical AI applications, web design, and early-stage product concepts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#05070c] text-white antialiased`}
      >
        <SiteHeader />

        {/* Push content below fixed header */}
        <div className="pt-[73px]">{children}</div>
      </body>
    </html>
  );
}
