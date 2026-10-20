import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About",
  description: "Meet DevSphere Solutions — a founder-led full-stack agency from Muzaffarnagar building digital products for India, Dubai, Oman and global clients.",
};

export default function AboutPage() {
  return (
    <>
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
