import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: null },
      { label: "Pricing", href: null },
      { label: "Testimonials", href: null },
      { label: "Integration", href: null },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: null },
      { label: "Changelog", href: null },
      { label: "Brand", href: null },
      { label: "Help", href: null },
    ],
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 pb-12 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid gap-7 p-6 md:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <div className="mb-3 text-sm font-semibold text-white/90">
                  {col.title}
                </div>

                <nav className="space-y-2">
                  {col.links.map((l) =>
                    l.href ? (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="block text-sm text-white/70 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <span
                        key={l.label}
                        className="block cursor-not-allowed text-sm text-white/40"
                        title="Coming soon"
                      >
                        {l.label}
                      </span>
                    )
                  )}
                </nav>
              </div>
            ))}
          </div>

          <div className="px-6 pb-6 text-xs text-white/50">
            © {year} FutureBrief. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
