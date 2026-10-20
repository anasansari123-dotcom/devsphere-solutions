import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import CTA from "@/components/CTA";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} — Case Study`,
    description: p.text,
    openGraph: p.image ? { images: [p.image] } : undefined,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  return (
    <>
      <ProjectDetail index={index} />
      <CTA />
    </>
  );
}
