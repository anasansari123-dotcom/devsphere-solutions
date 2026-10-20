import PageHero from "@/components/PageHero";
import Work from "@/components/sections/Work";
import ProjectIndex from "@/components/sections/ProjectIndex";
import CTA from "@/components/CTA";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Work",
  description: "Selected projects by DevSphere Solutions — CRMs, e-commerce, EdTech, booking platforms and brand websites for clients in India and the UAE.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[["Work"]]}
        eyebrow={`${projects.length} projects · India · UAE`}
        title="Selected *Work.*"
        text="Real products, brands and growth systems built for businesses. Hover any project to explore it, or open its case page."
      />
      <Work showIntro={false} />
      <ProjectIndex />
      <CTA />
    </>
  );
}
