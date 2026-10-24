import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About DevSphere Solutions — IT Company in Muzaffarnagar",
  description:
    "Meet DevSphere Solutions (DevSphere MZN) — a founder-led IT company from Muzaffarnagar, Uttar Pradesh with 10+ years of experience and 20+ experts building digital products for India, Dubai, Oman and global clients.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([["About", "/about"]])} />
      <PageHero
        crumbs={[["About"]]}
        eyebrow="About the agency"
        title="A founder-led team building *digital* products."
        text="10+ years of experience and a 20+ member team designing, building and supporting websites, SaaS platforms, mobile apps and admin dashboards."
      />
      <About />
      <Team />
      <Showcase />
      <Testimonials />
      <CTA />
    </>
  );
}
