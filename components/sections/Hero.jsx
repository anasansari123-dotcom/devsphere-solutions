"use client";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import Magnetic from "@/components/Magnetic";
import SceneBoundary from "@/components/three/SceneBoundary";
import { markets } from "@/lib/content";
import introDelay from "@/lib/introDelay";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });


export default function Hero() {
  const ref = useRef(null);
  // Wait for the preloader on first load; start right away when navigating back to Home
  const [START] = useState(() => introDelay());
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  return (
    <section ref={ref} id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(30,144,255,0.16),transparent_55%)]" />
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <motion.div style={{ scale: globeScale }} className="pointer-events-none absolute -right-[30%] top-0 h-full w-[100%] opacity-30 sm:opacity-50 lg:pointer-events-auto lg:-right-[4%] lg:w-[52%] lg:opacity-100">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: START, duration: 2 }} className="h-full w-full">
          <SceneBoundary>
            <HeroScene />
          </SceneBoundary>
        </motion.div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="container-x relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: START }} className="eyebrow">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
          Premium Software Development Agency
        </motion.div>

        <SplitReveal
          as="h1"
          immediate
          delay={START + 0.1}
          text="We build *scalable* digital products that help businesses *grow.*"
          className="display mt-6 max-w-[13ch] text-[clamp(3rem,6.4vw,6.6rem)]"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: START + 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px max-w-xl origin-left bg-gradient-to-r from-brand-400 via-white/15 to-transparent"
        />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: START + 1 }} className="mt-8 max-w-xl">
          <p className="text-lg leading-relaxed text-slate-300">
            Full-stack development, SaaS platforms, mobile apps, admin dashboards, AI integrations and cloud deployment for{" "}
            <span className="accent text-xl">India, Dubai, Oman</span> &amp; global markets.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link href="/contact" className="btn-primary">Start a Project →</Link>
            </Magnetic>
            <Magnetic>
              <Link href="/work" className="btn-ghost">View Projects</Link>
            </Magnetic>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            <span className="label">10+ years · 20+ experts · 15+ projects ·</span>
            {markets.map((m) => (
              <span key={m} className="label text-slate-400">{m}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#showreel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: START + 1.4 }}
        className="label absolute bottom-8 right-5 z-10 hidden items-center gap-3 sm:right-12 md:flex"
      >
        <span className="h-px w-10 bg-white/30" /> Scroll
      </motion.a>
    </section>
  );
}
