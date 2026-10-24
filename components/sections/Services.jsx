"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { services, projects, projectHref } from "@/lib/content";

function Card({ s, i, total, progress }) {
  // Earlier cards shrink and dim as later ones stack over them
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - i) * 0.035]);
  const filter = useTransform(progress, [i / total, 1], ["brightness(1)", `brightness(${1 - (total - i) * 0.08})`]);

  return (
    <div className="sticky top-20 flex items-start justify-center pb-6 lg:top-28 lg:h-[78vh] lg:pb-0" style={{ paddingTop: i * 14 }}>
      <motion.article
        style={{ scale, filter }}
        className="group relative grid w-full origin-top overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0d1528] to-[#070b16] lg:h-full lg:max-h-[620px] lg:grid-cols-[1.05fr_1fr] lg:rounded-[2rem]"
      >
        <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-12 [@media(min-width:1024px)_and_(max-height:800px)]:p-9">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <span className="label text-brand-300">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-brand-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
            </span>
          </div>
          <div className="relative">
            <h3 className="display text-4xl sm:text-6xl xl:text-7xl [@media(min-width:1024px)_and_(max-height:800px)]:text-6xl">
              {s.title.split(" ").slice(0, -1).join(" ")} <span className="accent">{s.title.split(" ").slice(-1)}</span>
            </h3>
            <p className="mt-4 max-w-md text-base text-slate-400 sm:mt-5 sm:text-lg">{s.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">{t}</span>
              ))}
            </div>
            {s.projects && (
              <div className="mt-6 border-t border-white/10 pt-4 [@media(min-width:1024px)_and_(max-height:800px)]:mt-5 [@media(min-width:1024px)_and_(max-height:800px)]:pt-3">
                <div className="label mb-2">Projects delivered</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {s.projects.map((t) => {
                    const p = projects.find((x) => x.title === t);
                    return p ? (
                      <Link key={t} href={projectHref(p)} data-cursor="View" className="text-slate-300 transition-colors hover:text-brand-300">
                        {t} <span className="text-brand-400">↗</span>
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="relative order-first h-40 overflow-hidden sm:h-56 lg:order-none lg:h-auto" data-cursor="Scroll">
          <div className="scroll-shot absolute inset-0" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1528] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0b1324]" />
        </div>
      </motion.article>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="services" className="relative pt-20 lg:pt-28">
      <div className="container-x">
        <div className="mb-10 lg:mb-16 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SplitReveal text="Technology. Design. *Growth.*" className="display text-[clamp(3rem,7vw,7rem)]" />
          <Reveal delay={0.2}>
            <div className="label mb-4">Our services · Est. India</div>
            <p className="text-lg text-slate-400">
              Most businesses have good ideas. The real challenge is turning them into fast, secure, scalable products. We handle
              the complete lifecycle — from discovery to deployment and beyond.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative pb-[10vh]">
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} total={services.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
