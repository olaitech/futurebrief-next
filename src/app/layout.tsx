import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://futurebrief.net"),
  alternates: {
    languages: {
      en: "/",
      no: "/no",
    },
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}


