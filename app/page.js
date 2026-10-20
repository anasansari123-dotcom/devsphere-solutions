import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import TechMarquee from "@/components/sections/TechMarquee";
import Statement from "@/components/sections/Statement";
import Work from "@/components/sections/Work";
import ProjectIndex from "@/components/sections/ProjectIndex";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Showcase from "@/components/sections/Showcase";
import Technologies from "@/components/sections/Technologies";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Showreel />
      <TechMarquee />
      <Statement />
      <Work />
      <ProjectIndex />
      <Services />
      <About />
      <Team />
      <Showcase />
      <Technologies />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
