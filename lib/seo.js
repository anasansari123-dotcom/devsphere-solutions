// Central SEO config: site URL, target keywords, local business details and JSON-LD builders
import { company, team, services } from "@/lib/content";

// Set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://www.devspheresolutions.com) in the hosting env
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://devsphere-website.vercel.app").replace(/\/$/, "");

export const brandNames = ["DevSphere Solutions", "DevSphere", "DevSphere MZN", "DevSphere Solutions Muzaffarnagar", "Devsphere Solution"];

export const keywords = [
  "DevSphere Solutions",
  "DevSphere Solution",
  "DevSphere MZN",
  "DevSphere Solutions Muzaffarnagar",
  "IT company in Muzaffarnagar",
  "IT company Muzaffarnagar",
  "IT company in MZN",
  "IT MZN",
  "software company in Muzaffarnagar",
  "website development company Muzaffarnagar",
  "web design Muzaffarnagar",
  "app development company Muzaffarnagar",
  "digital agency Muzaffarnagar",
  "SEO company Muzaffarnagar",
  "IT company Uttar Pradesh",
  "website development Meerut",
  "website development Shamli",
  "website development Saharanpur",
];

export const geo = { lat: 29.4727, lng: 77.7085, city: "Muzaffarnagar", region: "Uttar Pradesh", regionCode: "IN-UP", country: "IN" };

export const areasServed = ["Muzaffarnagar", "Shamli", "Meerut", "Saharanpur", "Roorkee", "Haridwar", "Delhi NCR", "Dubai", "Oman"];

// Shared FAQ: rendered on the page and emitted as FAQPage schema
export const localFaqs = [
  [
    "Which is the best IT company in Muzaffarnagar?",
    "DevSphere Solutions is a full-stack IT company in Muzaffarnagar (MZN), Uttar Pradesh, with 10+ years of experience and a 20+ member team. We build websites, SaaS platforms, mobile apps, CRMs and admin dashboards for businesses in Muzaffarnagar, across India, Dubai and Oman.",
  ],
  [
    "What services does DevSphere Solutions offer?",
    "Website development, full-stack web apps, SaaS development, e-commerce stores, Android & iOS mobile apps, admin dashboards and CRMs, SEO, AI integrations and cloud deployment — everything under one roof.",
  ],
  [
    "Do you work with local businesses in MZN, Shamli, Meerut and Saharanpur?",
    "Yes. We are based in Muzaffarnagar and work with local shops, schools, clinics, consultancies and manufacturers across Muzaffarnagar, Shamli, Meerut, Saharanpur, Roorkee and Haridwar — and meet in person when needed.",
  ],
  [
    "How much does a website cost in Muzaffarnagar?",
    "Business websites start under ₹50,000, while web apps, e-commerce and SaaS platforms are quoted on scope. Share your requirements and we send a clear, fixed quote within 1–2 business days.",
  ],
  [
    "Will my website rank on Google?",
    "Every site we build is SEO-ready: fast loading, mobile-first, schema markup, sitemap and local SEO for your city — so customers searching in Muzaffarnagar and nearby areas can find you.",
  ],
  [
    "How do I contact DevSphere Solutions?",
    `Call ${company.phones.map((p) => p.label).join(" or ")}, message us on WhatsApp, or email ${company.email}. We respond within ${company.responseTime}.`,
  ],
];

const orgId = `${siteUrl}/#organization`;

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: company.name,
      alternateName: brandNames.slice(1),
      url: siteUrl,
      logo: `${siteUrl}/logo.jpeg`,
      image: `${siteUrl}/logo.jpeg`,
      description: `${company.name} is an IT company in Muzaffarnagar, Uttar Pradesh building websites, SaaS platforms, mobile apps and admin dashboards for India, Dubai, Oman & global clients.`,
      email: company.email,
      telephone: company.phones[0].label.replace(/\s/g, ""),
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: geo.city,
        addressRegion: geo.region,
        addressCountry: geo.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
      areaServed: areasServed.map((name) => ({ "@type": "Place", name })),
      founder: team.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role, sameAs: m.linkedin })),
      contactPoint: company.phones.map((p) => ({
        "@type": "ContactPoint",
        telephone: p.label.replace(/\s/g, ""),
        contactType: "sales",
        areaServed: ["IN", "AE", "OM"],
        availableLanguage: ["English", "Hindi"],
      })),
      sameAs: company.socials.filter((s) => s.label !== "WhatsApp").map((s) => s.href),
      knowsAbout: services.map((s) => s.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT & software development services",
        itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.text } })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      alternateName: brandNames.slice(1),
      publisher: { "@id": orgId },
      inLanguage: "en-IN",
    },
  ],
});

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"], ...items].map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${siteUrl}${path}`,
  })),
});

export const faqJsonLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

// Per-page metadata with canonical URL and matching Open Graph fields
// Titles that already contain the brand are used as-is instead of getting the "| DevSphere Solutions" suffix.
// Page-level openGraph replaces the root one, so the default share card is re-attached here.
const defaultImages = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DevSphere Solutions — IT Company in Muzaffarnagar" }];

export const pageMeta = ({ title, description, path, images = defaultImages }) => {
  const full = title.includes(company.name) ? title : `${title} | ${company.name}`;
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_IN", siteName: company.name, title: full, description, url: path, images },
    twitter: { card: "summary_large_image", title: full, description, images },
  };
};
