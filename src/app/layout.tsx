import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer/Footer";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FutureBrief",
  "url": "https://futurebrief.net/",
  "logo": "https://futurebrief.net/assets/logo.png",
  "sameAs": [
    "https://www.linkedin.com/in/kewin-olaisen-287204338",
    "https://substack.com/@kewinolaisen"
  ]
};

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
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "FutureBrief - Practical AI, Web Design & Early Product Concepts",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureBrief",
    description:
      "Practical AI applications, web design, and early-stage product concepts.",
    images: {
      url: "/og.png",
      alt: "FutureBrief - Practical AI, Web Design & Early Product Concepts",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
