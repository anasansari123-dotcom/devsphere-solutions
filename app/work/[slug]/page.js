import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { projects, projectHref } from "@/lib/content";
import { siteUrl, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.title} — ${p.category} Case Study`,
    description: `${p.text} Built by DevSphere Solutions, Uttar Pradesh.`,
    path: projectHref(p),
    ...(p.image && { images: [p.image] }),
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];

  const caseStudy = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.title} — ${p.category}`,
    description: p.text,
    url: `${siteUrl}${projectHref(p)}`,
    ...(p.image && { image: `${siteUrl}${p.image}` }),
    keywords: p.tech.join(", "),
    creator: { "@id": `${siteUrl}/#organization` },
    about: { "@type": "WebSite", name: p.title, url: p.url },
  };

  return (
    <>
      <JsonLd data={caseStudy} />
      <JsonLd data={breadcrumbJsonLd([["Work", "/work"], [p.title, projectHref(p)]])} />
      <ProjectDetail index={index} />
      <CTA />
    </>
  );
}
