"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import SocialIcon from "@/components/SocialIcon";
import { team } from "@/lib/content";

const initials = (n) => n.split(" ").filter((w) => !/^(syed|mohd)$/i.test(w)).map((w) => w[0]).join("").slice(0, 2);

// Full-bleed photo that fades into the card, with the role on a glass pill
function Portrait({ m, right }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:aspect-[16/11]">
      <Image
        src={m.photo}
        alt={`${m.name}, ${m.role} of DevSphere Solutions`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        style={{ objectPosition: m.focus }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      {/* On phones the photo is too short for an overlay, so the badge moves above the name instead */}
      <span className={`label absolute top-4 lg:top-6 ${right ? "right-4 lg:right-6" : "left-4 lg:left-6"} hidden items-center sm:flex gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 !tracking-[0.18em] text-white backdrop-blur-md lg:px-4 lg:py-2`}>
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_#38bdf8]" />
        {m.role}
      </span>
    </div>
  );
}

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
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0d1528] to-[#070b16] transition-colors duration-500 hover:border-brand-400/30 lg:rounded-[2rem]"
      >
        {m.photo && <Portrait m={m} right={i % 2 === 1} />}

        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(500px circle at var(--mx) var(--my), rgba(56,189,248,0.14), transparent 60%)" }}
        />

        {/* Depth lift only on desktop; preserve-3d layers can mis-clip on mobile browsers */}
        <div className={`relative z-10 p-5 sm:p-8 lg:p-10 lg:[transform:translateZ(40px)] ${m.photo ? "-mt-10 pt-0 sm:pt-0 lg:-mt-14 lg:pt-0" : ""}`}>
          <div className={`flex items-center justify-between gap-4 lg:items-start lg:gap-6 ${m.photo ? "hidden" : ""}`}>
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

          {m.photo && (
            <span className="label mb-3 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-ink/70 px-3 py-1.5 !tracking-[0.18em] text-brand-300 backdrop-blur-md sm:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_#38bdf8]" />
              {m.role}
            </span>
          )}
          <h3 className={`display text-[2.5rem] sm:text-5xl lg:text-6xl ${m.photo ? "" : "mt-5 lg:mt-8"}`}>
            {m.name.split(" ").slice(0, -1).join(" ")} <span className="accent">{m.name.split(" ").slice(-1)}</span>
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400 lg:mt-6 lg:text-lg">{m.bio}</p>

          {/* Mobile: full-width Call with the number, then WhatsApp | LinkedIn. Desktop: one pill row */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-5 lg:mt-8 lg:flex lg:flex-wrap lg:items-center lg:gap-3 lg:pt-8">
            <Magnetic className="order-3 w-full lg:order-none lg:w-auto">
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center !gap-2 !px-3 !py-3.5 text-sm lg:hidden">
                <SocialIcon name="LinkedIn" size={16} />
                LinkedIn
              </a>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !gap-2 !px-5 !py-2.5 text-sm lg:inline-flex">
                <SocialIcon name="LinkedIn" size={15} />
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic className="order-1 col-span-2 w-full lg:order-none lg:w-auto">
              <a href={m.phone.href} aria-label={`Call ${m.phone.label}`} className="btn-primary w-full justify-center !gap-2 !px-4 !py-3.5 text-sm lg:hidden">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
                </svg>
                Call {m.phone.label}
              </a>
              <a href={m.phone.href} aria-label={`Call ${m.phone.label}`} className="btn-ghost hidden !px-5 !py-2.5 text-sm lg:inline-flex">
                {m.phone.label}
              </a>
            </Magnetic>
            <Magnetic className="order-2 w-full lg:order-none lg:w-auto">
              <a href={m.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center !gap-2 !px-3 !py-3.5 text-sm lg:w-auto lg:!px-5 lg:!py-2.5">
                <span className="text-[#25D366] lg:hidden">
                  <SocialIcon name="WhatsApp" size={16} />
                </span>
                <span className="lg:hidden">WhatsApp</span>
                <span className="hidden lg:inline">WhatsApp ↗</span>
              </a>
            </Magnetic>
          </div>
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
