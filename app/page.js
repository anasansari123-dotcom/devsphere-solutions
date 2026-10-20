import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import TechMarquee from "@/components/sections/TechMarquee";
import Statement from "@/components/sections/Statement";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/CTA";

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
