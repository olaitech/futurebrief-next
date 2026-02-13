import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.futurebrief.net";

    const routes = [
        "",
        "/about",
        "/faqs",
        "/privacy",
        "/terms",
        "/projects",
        "/projects/bioluminescent-interface",
        "/projects/generative-glass-system",
        "/projects/matrix-card",
        "/insights",
        "/insights/ai-landing-page-that-converts",
        "/insights/from-prototype-to-product-website-strategy-for-ai-founders",
        "/insights/stop-building-pages-start-building-systems",
        "/insights/what-makes-an-ai-landing-page-convert",
        "/insights/why-i-dont-just-build-websites",
        "/insights/why-most-ai-startups-build-the-wrong-website",
        "/systems",
        "/no",
        "/no/about",
        "/no/faqs",
        "/no/innsikt",
        "/no/innsikt/ai-landingsside-som-konverterer",
        "/no/innsikt/fra-prototype-til-produkt-nettstedsstrategi-for-ai-gründere",
        "/no/innsikt/hva-gjor-at-en-ai-landingsside-konverterer",
        "/no/innsikt/hvorfor-de-fleste-ai-startups-bygger-feil-nettside",
        "/no/innsikt/slutt-a-bygge-sider-begynn-a-bygge-systemer",
        "/no/privacy",
        "/no/projects",
        "/no/systemer",
        "/no/terms",
    ];

    const now = new Date();

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: route === "" || route === "/no" ? 1.0 : 0.8,
    }));
}
