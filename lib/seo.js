// Central SEO config: site URL, target keywords, local business details and JSON-LD builders
import { company, team, services } from "@/lib/content";

// Set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://www.devspheresolutions.com) in the hosting env
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://devsphere-website.vercel.app").replace(/\/$/, "");

export const brandNames = ["DevSphere Solutions", "DevSphere", "Devsphere Solution"];

export const keywords = [
  "DevSphere Solutions",
  "DevSphere Solution",
  "IT company in Uttar Pradesh",
  "IT company Uttar Pradesh",
  "software company in Uttar Pradesh",
  "website development company Uttar Pradesh",
  "app development company Uttar Pradesh",
  "website development Meerut",
  "website development Shamli",
  "website development Saharanpur",
];

export const geo = { region: "Uttar Pradesh", regionCode: "IN-UP", country: "IN" };

export const areasServed = ["Shamli", "Meerut", "Saharanpur", "Roorkee", "Haridwar", "Delhi NCR", "Dubai", "Oman"];

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
      description: `${company.name} is an IT company in Uttar Pradesh building websites, SaaS platforms, mobile apps and admin dashboards for India, Dubai, Oman & global clients.`,
      email: company.email,
      telephone: company.phones[0].label.replace(/\s/g, ""),
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressRegion: geo.region,
        addressCountry: geo.country,
      },
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

// Per-page metadata with canonical URL and matching Open Graph fields
// Titles that already contain the brand are used as-is instead of getting the "| DevSphere Solutions" suffix.
// Page-level openGraph replaces the root one, so the default share card is re-attached here.
const defaultImages = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DevSphere Solutions — IT Company in Uttar Pradesh" }];

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
