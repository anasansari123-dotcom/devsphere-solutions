"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import ProjectFrame from "@/components/ProjectFrame";
import Reveal from "@/components/Reveal";
import { projects, projectHref } from "@/lib/content";

// Table of projects; hovering a row floats a scrolling preview that trails the cursor
export default function ProjectIndex() {
  const [active, setActive] = useState(null);
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  return (
    <section
      className="relative py-20 lg:py-28"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <div className="container-x">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-5xl sm:text-7xl">
            Project <span className="accent">Index</span>
          </h2>
          <p className="max-w-sm text-slate-400">
            Every build, at a glance. <span className="hidden md:inline">Hover a row to preview it, click to open the case study.</span>
            <span className="md:hidden">Tap a project to open its case study.</span>
          </p>
        </Reveal>

        <div className="label hidden grid-cols-[80px_1.4fr_1fr_1.2fr_60px] gap-6 border-b border-white/10 pb-4 md:grid">
          <span>No.</span>
          <span>Partner</span>
          <span>Platform</span>
          <span>Built with</span>
          <span />
        </div>

        <ul onMouseLeave={() => setActive(null)}>
          {projects.map((p, i) => (
            <li key={p.title} onMouseEnter={() => setActive(i)}>
              <Link
                href={projectHref(p)}
                data-cursor="View"
                className="group relative grid grid-cols-[50px_1fr_auto] items-center gap-4 border-b border-white/10 py-7 md:grid-cols-[80px_1.4fr_1fr_1.2fr_60px] md:gap-6"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-brand-500/10 to-transparent transition-transform duration-500 group-hover:scale-y-100" />
                <span className="relative font-serif text-xl italic text-brand-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="display relative text-3xl transition-transform duration-500 group-hover:translate-x-3 sm:text-4xl">{p.title}</span>
                <span className="relative hidden text-sm italic text-slate-300 md:block">{p.category}</span>
                <span className="relative hidden text-sm text-slate-500 md:block">{p.tech.join(", ")}</span>
                <span className="relative flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-white/15 text-white transition duration-500 group-hover:-rotate-45 group-hover:border-brand-400 group-hover:bg-brand-500">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block">
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className="-translate-y-1/2 translate-x-10">
                <ProjectFrame key={active} project={projects[active]} className="w-[380px]" active />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
