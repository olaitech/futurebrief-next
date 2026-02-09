import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer/Footer";

const SITE_URL = "https://www.futurebrief.net";

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FutureBrief",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-futurebrief.svg`,
      },
      areaServed: [{ "@type": "Country", name: "Norway" }],
      availableLanguage: ["nb-NO", "en-US"],
      knowsAbout: [
        "Artificial intelligence",
        "AI applications",
        "Web design",
        "Web development",
        "Product prototyping",
        "Next.js",
        "Vercel",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          url: `${SITE_URL}/#contact`,
          areaServed: "NO",
          availableLanguage: ["nb-NO", "en-US"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/kewin-olaisen-287204338",
        "https://substack.com/@kewinolaisen",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "FutureBrief",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["nb-NO", "en-US"],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "FutureBrief",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "x-default": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/`,
      "nb-NO": `${SITE_URL}/no`,
    },
  },
  title: {
    default: "FutureBrief",
    template: "%s – FutureBrief",
  },
  description: "Practical AI applications, web design, and early-stage product concepts.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "FutureBrief",
    title: "FutureBrief",
    description:
      "FutureBrief builds practical AI applications, clean web design, and early-stage product concepts focused on real-world systems, prototypes, and future-facing platforms.",
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["nb_NO"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FutureBrief - Practical AI, Web Design & Early Product Concepts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureBrief",
    description: "Practical AI applications, web design, and early-stage product concepts.",
    images: [{ url: "/og.png", alt: "FutureBrief - Practical AI, Web Design & Early Product Concepts" }],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    // apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Script
          id="site-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
