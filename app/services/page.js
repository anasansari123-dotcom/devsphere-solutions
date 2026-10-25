import PageHero from "@/components/PageHero";
import TechMarquee from "@/components/sections/TechMarquee";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Process from "@/components/sections/Process";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Website & App Development Services in Uttar Pradesh",
  description:
    "Website development, full-stack web apps, SaaS, e-commerce, Android & iOS apps, CRMs and admin dashboards by DevSphere Solutions — IT company in Uttar Pradesh serving India, Dubai & Oman.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([["Services", "/services"]])} />
      <PageHero
        crumbs={[["Services"]]}
        eyebrow="What we do"
        title="Services built for *modern* growth."
        text="Full-stack development, SaaS, mobile apps, dashboards, AI integrations and cloud deployment — everything under one roof."
      />
      <TechMarquee />
      <Services />
      <Technologies />
      <Process />
      <CTA />
    </>
  );
}
