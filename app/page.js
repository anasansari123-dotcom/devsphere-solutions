import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import TechMarquee from "@/components/sections/TechMarquee";
import Statement from "@/components/sections/Statement";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "DevSphere Solutions | IT Company in Uttar Pradesh — Website & App Development",
  description:
    "DevSphere Solutions is an IT company in Uttar Pradesh building websites, SaaS platforms, mobile apps, CRMs and admin dashboards for India, Dubai, Oman & global clients. 10+ years, 20+ experts.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Showreel />
      <TechMarquee />
      <Statement />
      <Work />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
