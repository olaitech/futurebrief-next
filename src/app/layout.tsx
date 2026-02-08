import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://futurebrief.net"),
alternates: {
  languages: {
    "x-default": "https://futurebrief.net/",
    en: "https://futurebrief.net/",
    no: "https://futurebrief.net/no",
  },
},


  title: {
    default: "FutureBrief",
    template: "%s – FutureBrief",
  },
  description:
    "Practical AI applications, web design, and early-stage product concepts.",
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
    url: "https://futurebrief.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
