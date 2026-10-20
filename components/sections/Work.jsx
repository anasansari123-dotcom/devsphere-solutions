"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjectFrame from "@/components/ProjectFrame";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Card({ p, i }) {
  return (
    <article className="group relative w-full shrink-0 lg:w-[min(62vw,860px,calc((100vh-330px)*1.6))]">
      <a href={p.url} target="_blank" rel="noopener noreferrer" data-cursor="Visit" className="block">
        <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
          <ProjectFrame project={p} />
        </motion.div>
      </a>
      <div className="mt-6 grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6">
        <span className="font-serif text-2xl italic text-brand-400">{String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="display text-4xl sm:text-5xl">{p.title}</h3>
          <div className="label mt-2">
            {p.category} · {p.location}
          </div>
          <p className="mt-4 max-w-xl text-slate-400">{p.text}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{t}</span>
            ))}
          </div>
        </div>
        {p.stats && (
          <div className="flex gap-6 sm:flex-col sm:gap-3 sm:text-right">
            {p.stats.map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-white">{v}</div>
                <div className="label">{l}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  const section = useRef(null);
  const track = useRef(null);
  const [desktop, setDesktop] = useState(false);
  const [distance, setDistance] = useState(0);

  useIso(() => {
    const check = () => setDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // The track only exists in desktop mode, so measure it once that layout has rendered
  useIso(() => {
    if (!desktop || !track.current) return;
    const el = track.current;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [desktop]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -distance]), { stiffness: 120, damping: 30, mass: 0.3 });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const intro = (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw] lg:pr-10">
      <div className="label flex items-center gap-3">
        <span className="h-px w-10 bg-brand-400" /> Selected work · {projects.length} projects
      </div>
      <SplitReveal text="Selected *Work*" className="display mt-6 text-[clamp(3.5rem,7vw,7rem)]" />
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-sm text-lg text-slate-400">
          Real products, brands and <span className="accent text-xl">growth systems</span> built for businesses across India and the UAE.
        </p>
        <p className="label mt-8 hidden lg:block">Hover a project to explore it · Keep scrolling →</p>
      </Reveal>
    </div>
  );

  if (!desktop) {
    return (
      <section id="work" className="py-20 lg:py-28">
        <div className="container-x space-y-14">
          {intro}
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <Card p={p} i={i} />
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={section} style={{ height: `calc(100vh + ${distance}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex items-center gap-16 pl-[max(3rem,calc((100vw-1320px)/2+3rem))] pr-[8vw] will-change-transform">
          {intro}
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </motion.div>
        <div className="container-x absolute inset-x-0 bottom-8">
          <div className="h-px w-full bg-white/10">
            <motion.div style={{ width: bar }} className="h-px bg-brand-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
