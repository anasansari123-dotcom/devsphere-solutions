import PageHero from "@/components/PageHero";
import LocalSeo from "@/components/sections/LocalSeo";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    title: "IT Company in Muzaffarnagar (MZN) — DevSphere Solutions",
    description:
      "Looking for an IT company in Muzaffarnagar? DevSphere Solutions (DevSphere MZN) builds websites, mobile apps, SaaS, CRMs and admin dashboards for businesses in Muzaffarnagar, Shamli, Meerut & Saharanpur. Free quote.",
    path: "/it-company-in-muzaffarnagar",
  }),
  keywords: [
    "IT company in Muzaffarnagar",
    "IT company Muzaffarnagar",
    "IT company in MZN",
    "IT MZN",
    "DevSphere MZN",
    "DevSphere Solutions Muzaffarnagar",
    "software company Muzaffarnagar",
    "website development company in Muzaffarnagar",
    "app development Muzaffarnagar",
  ],
};

export default function ItCompanyMuzaffarnagarPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([["IT Company in Muzaffarnagar", "/it-company-in-muzaffarnagar"]])} />
      <PageHero
        crumbs={[["IT Company in Muzaffarnagar"]]}
        eyebrow="DevSphere Solutions · Muzaffarnagar, Uttar Pradesh"
        title="IT company in *Muzaffarnagar* building digital products."
        text="Websites, mobile apps, SaaS platforms, CRMs and admin dashboards — built in MZN by a 20+ member team with 10+ years of experience, for businesses across India, Dubai and Oman."
      />
      <LocalSeo full />
      <Work />
      <Testimonials />
      <CTA />
    </>
  );
}
