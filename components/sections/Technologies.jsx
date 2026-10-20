"use client";
import VelocityMarquee from "@/components/VelocityMarquee";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import { technologies } from "@/lib/content";

// Spread the categories across three marquee rows moving in alternating directions
const rows = [0, 1, 2].map((r) => technologies.filter((_, i) => i % 3 === r).flatMap(([cat, items]) => items.map((t) => [t, cat])));

export default function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden py-20 lg:py-32">
      <div className="container-x mb-10 lg:mb-16 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <SplitReveal text="A modern stack for every *layer.*" className="display text-[clamp(3rem,6.5vw,6.5rem)]" />
        <Reveal delay={0.2}>
          <p className="text-lg text-slate-400">
            From frontend to AI, cloud and payments — {technologies.reduce((n, [, i]) => n + i.length, 0)}+ tools across{" "}
            {technologies.length} categories. We pick the right ones for your product.
          </p>
          <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
            {technologies.map(([c]) => (
              <span key={c} className="label rounded-full border border-white/10 px-3 py-1.5 !tracking-[0.15em]">{c}</span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="space-y-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        {rows.map((row, r) => (
          <VelocityMarquee key={r} baseVelocity={r % 2 ? -1.2 : 1.2}>
            {row.map(([t, cat]) => (
              <span
                key={t}
                className="group mx-2.5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 transition-colors duration-300 hover:border-brand-400/50 hover:bg-brand-500/10"
              >
                <span className="h-2 w-2 rounded-full bg-brand-400/60 transition group-hover:bg-brand-300" />
                <span className="text-lg font-medium text-slate-200">{t}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500">{cat}</span>
              </span>
            ))}
          </VelocityMarquee>
        ))}
      </div>
    </section>
  );
}
