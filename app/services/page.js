import PageHero from "@/components/PageHero";
import TechMarquee from "@/components/sections/TechMarquee";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Process from "@/components/sections/Process";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services",
  description: "Website development, full-stack web apps, SaaS, e-commerce, mobile apps and admin dashboards — plus our technology stack and delivery process.",
};

export default function ServicesPage() {
  return (
    <>
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
