"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import SocialIcon from "@/components/SocialIcon";
import { team } from "@/lib/content";

const initials = (n) => n.split(" ").filter((w) => !/^(syed|mohd)$/i.test(w)).map((w) => w[0]).join("").slice(0, 2);

function FounderCard({ m, i }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={i * 0.15} className="h-full [perspective:1200px]">
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0d1528] to-[#070b16] p-5 sm:p-8 lg:rounded-[2rem] lg:p-10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(500px circle at var(--mx) var(--my), rgba(56,189,248,0.14), transparent 60%)" }}
        />

        {/* Depth lift only on desktop; preserve-3d layers can mis-clip on mobile browsers */}
        <div className="relative lg:[transform:translateZ(40px)]">
          <div className="flex items-center justify-between gap-4 lg:items-start lg:gap-6">
            {/* Monogram with an orbiting ring, echoing the globe in the logo */}
            <div className="relative h-16 w-16 shrink-0 lg:h-28 lg:w-28">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-400/40"
              />
              <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-300 font-serif text-xl italic text-white shadow-[0_0_40px_-8px_#1e90ff] lg:inset-3 lg:text-4xl">
                {initials(m.name)}
              </div>
            </div>
            <span className="label whitespace-nowrap rounded-full border border-brand-400/30 px-3 py-1.5 !tracking-[0.18em] text-brand-300 lg:px-4 lg:py-2 lg:!tracking-[0.25em]">
              {m.role}
            </span>
          </div>

          <h3 className="display mt-5 text-[2.5rem] sm:text-5xl lg:mt-8 lg:text-6xl">
            {m.name.split(" ").slice(0, -1).join(" ")} <span className="accent">{m.name.split(" ").slice(-1)}</span>
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400 lg:mt-6 lg:text-lg">{m.bio}</p>

          {/* Mobile: three equal buttons in one row. Desktop: pill row with the full number */}
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 lg:mt-8 lg:flex lg:flex-wrap lg:items-center lg:gap-3 lg:pt-8">
            <Magnetic className="w-full lg:w-auto">
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center !gap-1.5 !px-2 !py-3 text-xs lg:w-auto lg:!gap-2 lg:!px-5 lg:!py-2.5 lg:text-sm">
                <SocialIcon name="LinkedIn" size={15} />
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic className="w-full lg:w-auto">
              <a href={m.phone.href} aria-label={`Call ${m.phone.label}`} className="btn-ghost w-full justify-center !gap-1.5 !px-2 !py-3 text-xs lg:w-auto lg:!px-5 lg:!py-2.5 lg:text-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="lg:hidden">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
                </svg>
                <span className="lg:hidden">Call</span>
                <span className="hidden lg:inline">{m.phone.label}</span>
              </a>
            </Magnetic>
            <Magnetic className="w-full lg:w-auto">
              <a href={m.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center !gap-1.5 !px-2 !py-3 text-xs lg:w-auto lg:!px-5 lg:!py-2.5 lg:text-sm">
                <span className="lg:hidden">
                  <SocialIcon name="WhatsApp" size={15} />
                </span>
                <span className="lg:hidden">WhatsApp</span>
                <span className="hidden lg:inline">WhatsApp ↗</span>
              </a>
            </Magnetic>
          </div>
          <a href={m.phone.href} className="mt-3 block text-center text-sm text-slate-400 lg:hidden">{m.phone.label}</a>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute right-0 top-1/3 h-[500px] w-[600px] rounded-full bg-brand-600/10 blur-[140px]" />
      <div className="container-x relative">
        <div className="mb-10 lg:mb-16 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <div className="label flex items-center gap-3">
              <span className="h-px w-10 bg-brand-400" /> Leadership
            </div>
            <SplitReveal text="The people behind *DevSphere.*" className="display mt-6 text-[clamp(3rem,6.5vw,6.5rem)]" />
          </div>
          <Reveal delay={0.2}>
            <p className="text-lg text-slate-400">
              A founder-led team of 20+ specialists with 10+ years of experience — you work directly with the people who own the
              outcome, from the first call to long after launch.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          {team.map((m, i) => (
            <FounderCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
