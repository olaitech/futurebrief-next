"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavItem = { label: string; href: string };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // True hvis vi er på norsk route
  const isNo = pathname === "/no" || pathname.startsWith("/no/");

  // Bygg en “base path” som alltid peker til riktig “landing” for språket.
  // Dette gjør at #anker funker uansett om du står på /no/terms eller /terms osv.
  const basePath = isNo ? "/no" : "/";

  // Nav labels avhenger av språk
  // Viktig: bruk /no#... og /#... (ikke bare #...), så det funker fra alle sider.
  const NAV: NavItem[] = useMemo(() => {
    if (isNo) {
      return [
        { label: "Prosjekter", href: "/no/projects" },
        { label: "Ambisjoner", href: "/no#ambitions" },
        { label: "Fokus", href: "/no#focus" },
        { label: "Kontakt", href: "/no#contact" },
      ];
    }

    return [
      { label: "Projects", href: "/projects" },
      { label: "Ambitions", href: "/#ambitions" },
      { label: "Focus", href: "/#focus" },
      { label: "Contact", href: "/#contact" },
    ];
  }, [isNo]);

  // Språk-toggle (robust: behold samme path når mulig)
  // /no/foo -> /foo
  // /foo -> /no/foo
  const langLabel = isNo ? "EN" : "NO";
  const langAria = isNo ? "Switch to English" : "Bytt til norsk";

  function getToggledLanguagePath() {
    // Normaliser tom/undefined
    const current = pathname || "/";

    // Norsk -> Engelsk
    if (isNo) {
      // "/no" -> "/"
      if (current === "/no") return "/";
      // "/no/xyz" -> "/xyz"
      return current.replace(/^\/no(?=\/)/, "");
    }

    // Engelsk -> Norsk
    // "/" -> "/no"
    if (current === "/") return "/no";
    // "/xyz" -> "/no/xyz"
    return `/no${current}`;
  }

  // Lukk meny ved ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleNavigate(href: string) {
    setOpen(false);

    // Interne lenker:
    // - /no#ambitions -> push og la nettleseren hoppe til anker
    // - /no/projects -> normal route
    router.push(href);
  }

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setOpen(false);
    router.push(basePath);
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-[73px] max-w-6xl items-center justify-between px-6">
          {/* Left: Logo */}
          <a href={basePath} onClick={handleLogoClick} className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="FutureBrief"
              width={28}
              height={28}
              priority
            />
            <span className="text-sm font-semibold tracking-wide text-white">
              FutureBrief
            </span>
          </a>

          {/* Right: Desktop pill menu */}
          <div className="hidden items-center gap-3 md:flex">
            <nav className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
              <ul className="flex items-center gap-1">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language pill */}
            <a
              href={getToggledLanguagePath()}
              aria-label={langAria}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 hover:text-white"
            >
              {langLabel}
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getToggledLanguagePath()}
              aria-label={langAria}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 backdrop-blur"
            >
              {langLabel}
            </a>

            <button
              type="button"
              aria-label={isNo ? "Åpne meny" : "Open menu"}
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur transition hover:bg-white/10"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer + overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label={isNo ? "Lukk meny" : "Close menu"}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="absolute right-0 top-0 h-full w-[min(360px,90vw)] border-l border-white/10 bg-[#05070c]/95 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">
                {isNo ? "Meny" : "Menu"}
              </div>
              <button
                type="button"
                aria-label={isNo ? "Lukk" : "Close"}
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {NAV.map((item) => (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  router.push(getToggledLanguagePath());
                }}
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                aria-label={langAria}
              >
                {isNo ? "English (EN)" : "Norsk (NO)"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
