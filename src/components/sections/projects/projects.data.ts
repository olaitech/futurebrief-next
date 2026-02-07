export type Project = {
  id: string;

  // Title and description are bilingual
  title: { en: string; no: string };
  desc: { en: string; no: string };

  tags: string[];

  /**
   * Live-demo URL (f.eks. Vercel). Brukes til "Open live site".
   * (Vi bør ikke stole på iframe, mange sider blokkerer.)
   */
  url?: string;

  /**
   * Lokal forhåndsvisning i /public (IKKE Windows-sti).
   * Eksempel: "/dj-prebz.png" eller "/screenshots/dj-prebz.png"
   */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "client-demo",
    title: { en: "Client Website Demo", no: "Klientside – demo" },
    desc: {
      en: "Glass card expands to full-screen. Show screenshot + open live site.",
      no: "Glasskort som åpner seg til fullskjerm. Vis screenshot + åpne live side.",
    },
    tags: ["Glass", "Showcase", "Next.js"],
    url: "https://dj-preb-z.vercel.app",
    image: "/projects-hero.png",
  },
  {
    id: "dj-prebz",
    title: { en: "DJ Prebz – Official Website", no: "DJ Prebz – Offisiell nettside" },
    desc: {
      en: "Live DJ website with booking focus, visual identity, and event promotion.",
      no: "Live DJ-nettside med fokus på booking, visuell identitet og promotering.",
    },
    tags: ["Client", "Website", "Vercel"],
    url: "https://dj-preb-z.vercel.app/",
    image: "/dj-prebz.png",
  },
  {
    id: "sharge-share",
    title: { en: "Sharge Share", no: "Sharge Share" },
    desc: {
      en: "Concept marketplace for sharing private EV chargers. Architecture and deck material ready.",
      no: "Konsept-markedsplass for deling av private hjemmeladere. Arkitektur og presentasjonsmateriale klart.",
    },
    tags: ["Energy", "Marketplace", "Concept"],
    // La stå tom hvis du ikke har live link enda. (Du kan også fjerne hele linja.)
    url: "/decks/Sharge-Share-Airbnb-for-hjemmelading.pdf",
    // Legg et bilde i /public først, f.eks: /public/sharge-share.png
    image: "/sharge-share.png",
  },
];
