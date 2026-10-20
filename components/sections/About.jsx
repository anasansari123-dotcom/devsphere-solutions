"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import Magnetic from "@/components/Magnetic";
import { heroStats as stats, serviceTags, projects } from "@/lib/content";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2.2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      <span className="accent">{suffix}</span>
    </span>
  );
}

const shots = projects.filter((p) => p.image);

function Column({ items, y }) {
  return (
    <motion.div style={{ y }} className="flex flex-col gap-5">
      {items.map((p) => (
        <div key={p.title} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover object-top" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
            <div className="font-serif text-lg italic text-white">{p.title}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);
  const down = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <div className="relative mb-10 h-14 w-[200px] overflow-hidden rounded-md">
              <Image src="/logo.jpeg" alt="DevSphere Solutions" fill sizes="200px" className="object-cover" />
            </div>
            <div className="label">About the agency</div>
          </Reveal>
          <SplitReveal text="Built for businesses that take *growth* seriously." className="display mt-6 text-[clamp(2.8rem,5.5vw,5.5rem)]" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-400">
              DevSphere Solutions is a premium full-stack agency building websites, SaaS platforms, mobile apps and admin
              dashboards for clients across India, Dubai, Oman and global markets. Clean, production-ready code — designed for
              long-term growth, built to move with your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {serviceTags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-slate-300">{t}</span>
              ))}
            </div>
            <div className="mt-10">
              <Magnetic>
                <a href="#process" className="btn-primary">Our Approach →</a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="relative grid h-[460px] grid-cols-2 gap-3 sm:h-[640px] sm:gap-5 overflow-hidden [mask-image:linear-gradient(transparent,black_15%,black_85%,transparent)]">
          <Column items={[...shots.slice(0, 4)]} y={up} />
          <Column items={[...shots.slice(4), shots[0]]} y={down} />
        </div>
      </div>

      <div className="container-x mt-16 lg:mt-28 grid grid-cols-2 gap-y-12 border-t border-white/10 pt-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="lg:border-l lg:border-white/10 lg:pl-8 lg:first:border-0 lg:first:pl-0">
            <div className="display text-6xl sm:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="label mt-3">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
