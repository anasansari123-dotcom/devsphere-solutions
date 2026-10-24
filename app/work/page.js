import PageHero from "@/components/PageHero";
import Work from "@/components/sections/Work";
import ProjectIndex from "@/components/sections/ProjectIndex";
import CTA from "@/components/CTA";
import { projects } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Work — Projects by DevSphere Solutions, Muzaffarnagar",
  description:
    "Websites, e-commerce stores, CRMs, EdTech and booking platforms built by DevSphere Solutions, Muzaffarnagar for clients in India, Dubai and the UAE.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([["Work", "/work"]])} />
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
