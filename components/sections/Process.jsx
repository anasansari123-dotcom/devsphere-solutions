"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import { process as steps } from "@/lib/content";

function Step({ i, title, text, progress }) {
  const at = i / (steps.length - 1);
  const lit = useTransform(progress, [Math.max(0, at - 0.12), at], [0, 1]);
  const color = useTransform(lit, [0, 1], ["rgba(255,255,255,0.15)", "rgba(56,189,248,1)"]);
  const glow = useTransform(lit, [0, 1], ["0 0 0px rgba(30,144,255,0)", "0 0 30px rgba(30,144,255,0.8)"]);
  const opacity = useTransform(lit, [0, 1], [0.35, 1]);

  return (
    <motion.div style={{ opacity }} className="relative pl-14 lg:pl-0 lg:pt-14">
      <motion.span
        style={{ borderColor: color, boxShadow: glow }}
        className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-ink font-serif text-sm italic text-white lg:left-0"
      >
        {i + 1}
      </motion.span>
      <h3 className="display text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-20 lg:py-32">
      <div className="container-x">
        <div className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-8">
          <SplitReveal text="A proven process, *zero* guesswork." className="display max-w-4xl text-[clamp(3rem,6vw,6rem)]" />
          <div className="label">06 steps · Discovery → Maintenance</div>
        </div>

        <div ref={ref} className="relative">
          {/* track: vertical on mobile, horizontal on desktop */}
          <div className="absolute left-[17px] top-0 h-full w-px bg-white/10 lg:left-0 lg:top-[17px] lg:h-px lg:w-full" />
          <motion.div style={{ height: fill }} className="absolute left-[17px] top-0 w-px bg-gradient-to-b from-brand-300 to-brand-600 lg:hidden" />
          <motion.div style={{ width: fill }} className="absolute left-0 top-[17px] hidden h-px bg-gradient-to-r from-brand-600 to-brand-300 shadow-[0_0_20px_#38bdf8] lg:block" />

          <div className="grid gap-12 lg:grid-cols-6 lg:gap-8">
            {steps.map(([t, d], i) => (
              <Step key={t} i={i} title={t} text={d} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
