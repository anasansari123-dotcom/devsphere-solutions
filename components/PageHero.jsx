"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SplitReveal from "./SplitReveal";
import introDelay from "@/lib/introDelay";

// Top banner for inner pages: breadcrumb, word-reveal title, intro line and an orbiting accent
export default function PageHero({ eyebrow, title, text, crumbs = [] }) {
  const [start] = useState(() => introDelay());

  return (
    <section className="relative overflow-hidden pb-14 pt-36 lg:pb-20 lg:pt-48">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(30,144,255,0.18),transparent_55%)]" />
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_65%)]" />

      {/* Orbit rings echoing the globe in the logo */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-[520px] w-[520px] opacity-60 lg:-right-20 lg:top-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-dashed border-brand-400/25"
            style={{ inset: i * 60 }}
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400 shadow-[0_0_14px_#38bdf8]" />
          </motion.div>
        ))}
      </div>

      <div className="container-x relative">
        <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: start }} aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-brand-300">Home</Link>
          {crumbs.map(([label, href]) => (
            <span key={label} className="flex items-center gap-2">
              <span className="text-slate-600">/</span>
              {href ? <Link href={href} className="hover:text-brand-300">{label}</Link> : <span className="text-brand-300">{label}</span>}
            </span>
          ))}
        </motion.nav>
        {eyebrow && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: start + 0.1 }} className="eyebrow mt-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> {eyebrow}
          </motion.div>
        )}
        <SplitReveal as="h1" immediate delay={start + 0.15} text={title} className="display mt-5 max-w-5xl text-[clamp(3rem,8vw,8rem)]" />
        {text && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: start + 0.6 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            {text}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: start + 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 h-px origin-left bg-gradient-to-r from-brand-400 via-white/15 to-transparent"
        />
      </div>
    </section>
  );
}
