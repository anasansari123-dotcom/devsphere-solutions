"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "./Magnetic";
import SocialIcon from "./SocialIcon";
import { company } from "@/lib/content";

const left = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Agency", "#about"],
];
const right = [
  ["Stack", "#technologies"],
  ["Process", "#process"],
];
const all = [["Home", "#home"], ...left, ["Founders", "#team"], ...right, ["Testimonials", "#testimonials"], ["Contact", "#contact"]];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 300 && !open);
    setScrolled(v > 40);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,padding] duration-500 ${
          scrolled ? "bg-ink/70 py-3 backdrop-blur-xl" : "py-5"
        }`}
      >
        <nav className="container-x grid grid-cols-[1fr_auto_1fr] items-center">
          <ul className="hidden items-center gap-8 lg:flex">
            {left.map(([l, h]) => (
              <NavLink key={h} href={h} label={l} />
            ))}
          </ul>
          <button onClick={() => setOpen(true)} className="label justify-self-start text-slate-300 lg:hidden" aria-label="Open menu">
            Menu
          </button>

          <a href="#home" className="relative block h-10 w-[128px] overflow-hidden rounded-md sm:h-12 sm:w-[170px]">
            <Image src="/logo.jpeg" alt="DevSphere Solutions" fill priority className="object-cover" sizes="170px" />
          </a>

          <div className="flex items-center justify-end gap-8">
            <ul className="hidden items-center gap-8 lg:flex">
              {right.map(([l, h]) => (
                <NavLink key={h} href={h} label={l} />
              ))}
            </ul>
            <Magnetic>
              <a href="#contact" className="btn-primary whitespace-nowrap !px-4 !py-2 text-xs sm:!px-5 sm:!py-2.5 sm:text-sm">
                Let&apos;s Connect
              </a>
            </Magnetic>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 10% 5%)" }}
            animate={{ clipPath: "circle(150% at 10% 5%)" }}
            exit={{ clipPath: "circle(0% at 10% 5%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-navy px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <span className="label">Navigation</span>
              <button onClick={() => setOpen(false)} className="label text-slate-300">Close ✕</button>
            </div>
            <ul className="mt-12 flex-1 space-y-2">
              {all.map(([l, h], i) => (
                <motion.li key={h} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }}>
                  <a href={h} onClick={() => setOpen(false)} className="display flex items-baseline gap-4 text-5xl">
                    <span className="font-sans text-xs text-brand-400">0{i + 1}</span>
                    {l}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-1 text-sm text-slate-400">
              <a href={`mailto:${company.email}`} className="block">{company.email}</a>
              {company.phones.map((ph) => (
                <a key={ph.href} href={ph.href} className="block">{ph.label}</a>
              ))}
              <div className="flex gap-3 pt-4">
                {company.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
                  >
                    <SocialIcon name={s.label} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Label rolls up to reveal a duplicate on hover
function NavLink({ href, label }) {
  return (
    <li>
      <a href={href} className="group relative block h-5 overflow-hidden text-sm text-slate-300">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">{label}</span>
        <span className="accent absolute left-0 top-full block text-base leading-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {label}
        </span>
      </a>
    </li>
  );
}
