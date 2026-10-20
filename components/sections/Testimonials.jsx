"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import { testimonials as items } from "@/lib/content";

const initials = (n) => n.replace("Dr. ", "").split(" ").map((w) => w[0]).join("");

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, [paused]);
  const it = items[i];

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 lg:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-x">
        <div className="mb-10 lg:mb-16 flex flex-wrap items-end justify-between gap-6">
          <SplitReveal text="Words from our *partners.*" className="display text-[clamp(3rem,6vw,6rem)]" />
          <div className="flex items-center gap-3">
            <button onClick={() => setI((i - 1 + items.length) % items.length)} aria-label="Previous" className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:bg-brand-500">←</button>
            <button onClick={() => setI((i + 1) % items.length)} aria-label="Next" className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:bg-brand-500">→</button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="relative min-h-[340px]">
            <span className="pointer-events-none absolute -left-4 -top-16 font-serif text-[14rem] leading-none text-brand-500/15">&ldquo;</span>
            <AnimatePresence mode="wait">
              <motion.blockquote key={i} className="relative">
                <p className="display text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.15]">
                  {it.text.split(" ").map((w, k) => (
                    <span key={k} className="inline-block overflow-hidden align-top">
                      <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.6, delay: k * 0.015, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {w}&nbsp;
                      </motion.span>
                    </span>
                  ))}
                </p>
                <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-300 font-semibold text-white">{initials(it.name)}</div>
                  <div>
                    <div className="font-semibold text-white">{it.name}</div>
                    <div className="text-sm text-slate-400">{it.role}</div>
                    <div className="accent text-sm">{it.place}</div>
                  </div>
                </motion.footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <ul className="hidden space-y-1 lg:block">
            {items.map((t, k) => (
              <li key={t.name}>
                <button onClick={() => setI(k)} className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition ${k === i ? "bg-white/5" : "opacity-50 hover:opacity-100"}`}>
                  <span className="relative h-8 w-1 overflow-hidden rounded bg-white/10">
                    {k === i && !paused && <motion.span key={i} initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 6.5, ease: "linear" }} className="absolute inset-x-0 top-0 bg-brand-400" />}
                    {k === i && paused && <span className="absolute inset-0 bg-brand-400" />}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-white">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role.split(", ")[1]}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
