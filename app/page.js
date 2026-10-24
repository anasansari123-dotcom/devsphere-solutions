import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import TechMarquee from "@/components/sections/TechMarquee";
import Statement from "@/components/sections/Statement";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import LocalSeo from "@/components/sections/LocalSeo";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "DevSphere Solutions | IT Company in Muzaffarnagar — Website & App Development",
  description:
    "DevSphere Solutions (DevSphere MZN) is an IT company in Muzaffarnagar building websites, SaaS platforms, mobile apps, CRMs and admin dashboards for India, Dubai, Oman & global clients. 10+ years, 20+ experts.",
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
      {/* FAQ schema is emitted once, on the dedicated landing page, to avoid duplicate FAQ rich results */}
      <LocalSeo faqSchema={false} />
      <CTA />
    </>
  );
}
