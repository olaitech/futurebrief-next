#!/usr/bin/env node
/**
 * SEO smoke test for Next.js (App Router)
 *
 * Usage:
 *   node scripts/seo-check.mjs http://localhost:3000
 *   node scripts/seo-check.mjs https://www.futurebrief.net
 *
 * Optional:
 *   AUTO_FROM_SITEMAP=1 node scripts/seo-check.mjs https://www.futurebrief.net
 *
 * Requires: Node 18+ (global fetch)
 */

import { JSDOM } from "jsdom";

const BASE_URL = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const AUTO_FROM_SITEMAP = process.env.AUTO_FROM_SITEMAP === "1";

const ROUTES = [
    "/",
    "/no",
    "/projects",
    "/about",
    "/insights",
    "/systems",
    "/no/systemer",
    // keep a couple of known articles (optional)
    "/insights/ai-landing-page-that-converts",
    "/insights/stop-building-pages-start-building-systems",
    "/no/innsikt",
];

const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    bold: "\x1b[1m",
};

function log(msg, color = "reset") {
    console.log(`${colors[color]}${msg}${colors.reset}`);
}
const pass = (m) => log(`  ✓ ${m}`, "green");
const fail = (m) => log(`  ✗ ${m}`, "red");
const warn = (m) => log(`  ⚠ ${m}`, "yellow");

function isAbsoluteUrl(u) {
    return typeof u === "string" && /^https?:\/\//i.test(u);
}

function normalizePath(path) {
    if (!path) return "/";
    const p = path.startsWith("/") ? path : `/${path}`;
    return p.length > 1 ? p.replace(/\/$/, "") : p;
}

async function fetchWithRedirectInfo(url, maxHops = 5) {
    const chain = [];
    let current = url;

    for (let i = 0; i <= maxHops; i++) {
        const res = await fetch(current, { redirect: "manual" });
        chain.push({ url: current, status: res.status });

        const isRedirect = [301, 302, 303, 307, 308].includes(res.status);
        if (!isRedirect) {
            const text = await res.text();
            return { finalUrl: current, finalStatus: res.status, chain, body: text, headers: res.headers };
        }

        const location = res.headers.get("location");
        if (!location) return { finalUrl: current, finalStatus: res.status, chain, body: "", headers: res.headers };

        // Resolve relative redirects
        const next = new URL(location, current).toString();
        current = next;
    }

    return { finalUrl: current, finalStatus: 0, chain, body: "", headers: new Headers() };
}

function checkTitle(doc) {
    const title = doc.querySelector("title")?.textContent?.trim() || "";
    if (!title) return fail("Missing <title> tag"), false;

    if (title.length < 30) warn(`Title too short (${title.length} chars): "${title}"`);
    else if (title.length > 60) warn(`Title too long (${title.length} chars): "${title}"`);
    else pass(`Title OK (${title.length} chars)`);

    // duplication heuristic
    const dup = /(FutureBrief).*\1/i.test(title);
    if (dup) warn(`Title may contain duplicated brand: "${title}"`);

    return true;
}

function checkMetaDescription(doc) {
    const desc = doc.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() || "";
    if (!desc) return fail("Missing meta description"), false;

    if (desc.length < 120) warn(`Description too short (${desc.length} chars)`);
    else if (desc.length > 160) warn(`Description too long (${desc.length} chars)`);
    else pass(`Meta description OK (${desc.length} chars)`);

    return true;
}

function checkCanonical(doc, expectedPath) {
    const canonical = doc.querySelector('link[rel="canonical"]');
    if (!canonical) return fail("Missing canonical link"), false;

    const href = canonical.getAttribute("href") || "";
    if (!href) return fail("Canonical link has no href"), false;
    if (!isAbsoluteUrl(href)) return fail(`Canonical is not absolute: ${href}`), false;

    const canonicalPath = normalizePath(new URL(href).pathname);
    const exp = normalizePath(expectedPath);

    if (canonicalPath !== exp) {
        warn(`Canonical path mismatch. expected "${exp}" got "${canonicalPath}"`);
        pass(`Canonical: ${href}`);
        return false;
    }

    pass(`Canonical matches: ${href}`);
    return true;
}

function checkHreflang(doc) {
    const links = [...doc.querySelectorAll('link[rel="alternate"][hreflang]')];
    if (links.length === 0) return warn("No hreflang alternates found"), false;

    let ok = true;
    const langs = [];
    for (const l of links) {
        const lang = l.getAttribute("hreflang") || "";
        const href = l.getAttribute("href") || "";
        langs.push(lang || "?");
        if (!isAbsoluteUrl(href)) {
            fail(`Hreflang ${lang} is not absolute: ${href}`);
            ok = false;
        }
    }
    if (ok) pass(`Hreflang alternates OK: ${langs.join(", ")}`);
    return ok;
}

function checkOpenGraph(doc) {
    const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute("content")?.trim();
    const ogDesc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content")?.trim();
    const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute("content")?.trim();
    const ogUrl = doc.querySelector('meta[property="og:url"]')?.getAttribute("content")?.trim();

    let ok = true;

    if (!ogTitle) (fail("Missing og:title"), (ok = false));
    else pass("og:title present");

    if (!ogDesc) (fail("Missing og:description"), (ok = false));
    else pass("og:description present");

    if (!ogImage) (fail("Missing og:image"), (ok = false));
    else if (!isAbsoluteUrl(ogImage)) (fail(`og:image is not absolute: ${ogImage}`), (ok = false));
    else pass(`og:image absolute`);

    if (!ogUrl) warn("Missing og:url");
    else pass("og:url present");

    return ok;
}

function checkTwitter(doc) {
    const card = doc.querySelector('meta[name="twitter:card"]')?.getAttribute("content")?.trim();
    const image = doc.querySelector('meta[name="twitter:image"]')?.getAttribute("content")?.trim();

    if (!card) warn("Missing twitter:card");
    else pass("twitter:card present");

    if (!image) warn("Missing twitter:image");
    else if (!isAbsoluteUrl(image)) warn(`twitter:image not absolute: ${image}`);
    else pass("twitter:image absolute");

    return true;
}

function checkH1(doc) {
    const h1s = [...doc.querySelectorAll("h1")];
    if (h1s.length === 0) return fail("No <h1> found"), false;
    if (h1s.length > 1) return warn(`Multiple <h1> tags found (${h1s.length})`), false;
    pass(`Single <h1> OK`);
    return true;
}

function checkJsonLdArticle(doc, route) {
    const isInsightArticle =
        (route.startsWith("/insights/") || route.startsWith("/no/innsikt/")) &&
        route !== "/insights" && route !== "/no/innsikt" &&
        !route.endsWith("/insights") && !route.endsWith("/no/innsikt");
    if (!isInsightArticle) return true;

    const scripts = [...doc.querySelectorAll('script[type="application/ld+json"]')];
    let found = false;

    for (const s of scripts) {
        try {
            const data = JSON.parse(s.textContent || "{}");
            const scan = (obj) => {
                if (!obj) return;
                if (obj["@type"] === "Article" || obj["@type"] === "BlogPosting") found = true;
            };
            scan(data);
            if (Array.isArray(data["@graph"])) data["@graph"].forEach(scan);
        } catch {
            // ignore
        }
    }

    if (found) pass("Article JSON-LD present");
    else warn("No Article JSON-LD found (recommended for blog posts)");

    return found;
}

async function checkRoute(route) {
    const expectedPath = normalizePath(route);
    const url = `${BASE_URL}${route}`;

    log(`\n${colors.bold}Checking: ${url}${colors.reset}`, "cyan");

    try {
        const { chain, finalUrl, finalStatus, body } = await fetchWithRedirectInfo(url);

        // Redirect chain visibility
        if (chain.length > 1) {
            warn(`Redirect chain: ${chain.map((x) => `${x.status}`).join(" -> ")}`);
            chain.forEach((x) => log(`    ${x.status} ${x.url}`, "cyan"));
        } else {
            pass(`HTTP ${finalStatus}`);
        }

        if (finalStatus >= 400) {
            fail(`Final status ${finalStatus} for ${finalUrl}`);
            return;
        }

        const dom = new JSDOM(body);
        const doc = dom.window.document;

        checkTitle(doc);
        checkMetaDescription(doc);
        checkCanonical(doc, expectedPath);
        checkHreflang(doc);
        checkOpenGraph(doc);
        checkTwitter(doc);
        checkH1(doc);
        checkJsonLdArticle(doc, expectedPath);
    } catch (e) {
        fail(`Error: ${e.message}`);
    }
}

async function checkRobots() {
    const url = `${BASE_URL}/robots.txt`;
    log(`\n${colors.bold}Checking: ${url}${colors.reset}`, "cyan");

    try {
        const res = await fetch(url, { redirect: "follow" });
        if (!res.ok) return fail(`robots.txt not found (HTTP ${res.status})`);

        const txt = await res.text();
        pass("robots.txt exists");

        const hasSitemap = /sitemap:\s*/i.test(txt);
        if (!hasSitemap) fail("robots.txt missing 'Sitemap:' line");
        else pass("robots.txt references sitemap");
    } catch (e) {
        fail(`Robots check failed: ${e.message}`);
    }
}

async function checkSitemapAndMaybeLoadRoutes() {
    const url = `${BASE_URL}/sitemap.xml`;
    log(`\n${colors.bold}Checking: ${url}${colors.reset}`, "cyan");

    try {
        const res = await fetch(url, { redirect: "follow" });
        if (!res.ok) {
            fail(`Sitemap not found (HTTP ${res.status})`);
            return { routesFromSitemap: [] };
        }

        const xml = await res.text();
        const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]).filter(Boolean);

        pass(`Sitemap exists (${locs.length} URLs)`);

        const hasNo = locs.some((u) => {
            try {
                return new URL(u).pathname.startsWith("/no/");
            } catch {
                return false;
            }
        });

        if (hasNo) pass("Norwegian (/no/) routes included in sitemap");
        else fail("Norwegian (/no/) routes NOT found in sitemap");

        const routesFromSitemap = locs
            .map((u) => {
                try {
                    return normalizePath(new URL(u).pathname);
                } catch {
                    return null;
                }
            })
            .filter(Boolean);

        return { routesFromSitemap };
    } catch (e) {
        fail(`Sitemap check failed: ${e.message}`);
        return { routesFromSitemap: [] };
    }
}

async function main() {
    log(`\n${"=".repeat(60)}`, "bold");
    log(`SEO Audit for: ${BASE_URL}`, "bold");
    log(`${"=".repeat(60)}\n`, "bold");

    const { routesFromSitemap } = await checkSitemapAndMaybeLoadRoutes();
    await checkRobots();

    const routesToCheck = AUTO_FROM_SITEMAP && routesFromSitemap.length
        ? Array.from(new Set([
            ...ROUTES.map(normalizePath),
            ...routesFromSitemap,
        ]))
        : ROUTES.map(normalizePath);

    // Keep it sane: don’t check 500 pages unless you want to.
    // You can remove this cap if you want full coverage.
    const CAP = 60;
    const finalRoutes = routesToCheck.slice(0, CAP);

    if (AUTO_FROM_SITEMAP) {
        pass(`AUTO_FROM_SITEMAP enabled — checking ${finalRoutes.length} routes (cap ${CAP})`);
    } else {
        pass(`Checking ${finalRoutes.length} routes (static list)`);
    }

    for (const r of finalRoutes) {
        await checkRoute(r);
    }

    log(`\n${"=".repeat(60)}`, "bold");
    log("SEO Audit Complete", "bold");
    log(`${"=".repeat(60)}\n`, "bold");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
