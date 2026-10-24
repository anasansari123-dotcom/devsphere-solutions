"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHero from "@/components/PageHero";
import ProjectFrame from "@/components/ProjectFrame";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { projects, projectHref } from "@/lib/content";

// Last word of the title becomes the italic accent in the page heading
const accentTitle = (t) => {
  const w = t.split(" ");
  return w.length > 1 ? `${w.slice(0, -1).join(" ")} *${w.at(-1)}*` : `*${t}*`;
};

// Preview frame that grows into place as it scrolls into view
function Preview({ p }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);

  return (
    <section ref={ref} className="container-x py-10 [perspective:1400px] lg:py-16">
      <motion.div style={{ scale, rotateX }} className="group origin-top" data-cursor={p.full ? "Scroll" : undefined}>
        <ProjectFrame project={p} />
      </motion.div>
      {p.full && <p className="label mt-5 text-center">Hover the window to scroll through the homepage</p>}
    </section>
  );
}

// Sticky browser window: the full-page screenshot scrolls inside it as the page scrolls
function ScrollThrough({ p }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const pos = useTransform(scrollYProgress, (v) => `50% ${Math.min(100, Math.max(0, v * 100))}%`);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const host = p.url.replace(/^https?:\/\//, "");

  return (
    <section ref={ref} className="relative h-[220vh] lg:h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center py-20">
        <div className="container-x">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-4xl sm:text-6xl">
              Scroll the <span className="accent">live site</span>
            </h2>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="label hover:text-brand-300">{host} ↗</a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-[0_40px_120px_-40px_rgba(30,144,255,0.45)]">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.04] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="mx-auto max-w-[70%] truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400">{host}</div>
            </div>
            <motion.div
              role="img"
              aria-label={`${p.title} full page`}
              className="h-[55vh] w-full bg-no-repeat lg:h-[62vh]"
              style={{ backgroundImage: `url(${p.full})`, backgroundSize: "100% auto", backgroundPosition: pos }}
            />
          </div>
          <div className="mt-4 h-px w-full bg-white/10">
            <motion.div style={{ width: bar }} className="h-px bg-brand-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Client background + numbered list of what was delivered
function Built({ p }) {
  return (
    <section className="container-x pt-16 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <div className="label">The client</div>
          <h2 className="display mt-4 text-4xl sm:text-6xl">
            What we <span className="accent">built</span>
          </h2>
          {p.client && <p className="mt-6 max-w-md text-lg text-slate-400">{p.client}</p>}
        </Reveal>
        <ol className="grid gap-x-10 sm:grid-cols-2">
          {p.highlights.map((h, i) => (
            <Reveal key={h} delay={(i % 2) * 0.08}>
              <li className="flex gap-4 border-t border-white/10 py-5">
                <span className="font-serif text-lg italic text-brand-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-200">{h}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function ProjectDetail({ index }) {
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    ["Category", p.category],
    ["Location", p.location],
    ["Built with", p.tech.join(", ")],
  ];

  return (
    <>
      <PageHero
        crumbs={[["Work", "/work"], [p.title]]}
        eyebrow={`Case study · ${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`}
        title={accentTitle(p.title)}
        text={p.text}
      />

      <section className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <dl className="grid gap-6 sm:grid-cols-3">
              {facts.map(([k, v]) => (
                <div key={k} className="border-t border-white/10 pt-4">
                  <dt className="label">{k}</dt>
                  <dd className="mt-2 text-slate-200">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary">Visit live site ↗</a>
              </Magnetic>
              <Magnetic>
                <Link href="/contact" className="btn-ghost">Start a similar project →</Link>
              </Magnetic>
            </div>
          </Reveal>
          {p.stats && (
            <Reveal delay={0.15} className="grid grid-cols-2 gap-4 self-start">
              {p.stats.map(([v, l]) => (
                <div key={l} className="glass rounded-2xl p-6">
                  <div className="display text-4xl sm:text-5xl">{v}</div>
                  <div className="label mt-2">{l}</div>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {p.highlights && <Built p={p} />}

      <Preview p={p} />
      {p.full && <ScrollThrough p={p} />}

      {/* Next project */}
      <section className="container-x pb-10 pt-10 lg:pt-20">
        <Link href={projectHref(next)} data-cursor="Next" className="group relative block overflow-hidden rounded-[2rem] border border-white/10">
          <div className="relative h-[280px] sm:h-[380px]">
            {next.image ? (
              <Image src={next.image} alt={next.title} fill sizes="100vw" className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a5c] via-[#1d4ed8] to-[#38bdf8]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-10">
            <div>
              <div className="label text-brand-300">Next project</div>
              <div className="display mt-3 text-4xl sm:text-7xl">{next.title}</div>
              <div className="label mt-2">{next.category}</div>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-xl text-white transition duration-500 group-hover:-rotate-45 group-hover:border-brand-400 group-hover:bg-brand-500">
              →
            </span>
          </div>
        </Link>
        <div className="mt-6 text-center">
          <Link href="/work" className="label hover:text-brand-300">← All projects</Link>
        </div>
      </section>
    </>
  );
}
